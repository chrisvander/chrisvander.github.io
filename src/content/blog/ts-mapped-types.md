---
title: Using TypeScript Mapped Types
date: 2025-04-20
slug: using-typescript-mapped-types
description: A brief dive into TypeScript's ability to represent complex types using mapped types, generics, and type inference.
tags: [typescript]
---

TypeScript is an extremely powerful type system. It’s capable of representing a wide variety of types, sometimes divorced from the actual underlying representation in code, and is capable of deeply inferring values. In a library like [tRPC](https://trpc.io), the input and output types of every function in the RPC context are tracked in a single type. The resulting type is massive, and uses mappings to represent intermediate router types all the way through.

Like tRPC, it can be useful to build functions that operate on multiple objects or functions, referenced by key in an object, at one time. Making sure you track the types of each individual field is essential to create useful output type mappings. It might be compelling to just write “as any” in order to drop back to dynamic JavaScript land, but then you lose the strictness and safety of the type system.

Before we dive into mapped types, let’s talk briefly about generics and type inference in TypeScript.

# Generics

If you aren’t familiar with generics conceptually, they are a way to have types which represent a certain structure while being flexible on the specific types used. For example, let’s say we have a `Box` type which requires a function to clone the box:

```ts
interface Box {
  readonly contents: string
  clone: () => Box
}

const box: Box = { contents: "initial", clone: () => ({ ...box }) }
```

If we want to hold a number inside of the `Box`, we can’t. We only allow strings right now on the type. With generics, though, we can make this box invariant over the type of the contents:

```ts
interface Box<T> {
  readonly contents: T
  clone: () => Box<T>
}

const box: Box = { contents: "initial", clone: () => ({ ...box }) }
//         ^ ts: Generic type 'Box<T>' requires 1 type argument(s).
```

Whoops! I’ve now broken my existing code, assuming that box would contain a string. Perhaps the default (and most-used) behavior is to contain a string. We could go through all usages and fix the type (e.g. `const box: Box<string> = ...`). Or, we could use a default on the generic.

```ts
interface Box<T = string> {
  readonly contents: T
  clone: () => Box<T>
}

const box: Box = { contents: "initial", clone: () => ({ ...box }) }
```

Better. But I still have to write `: Box` anywhere I want to declare a box, and `: Box<T>` anytime I use a different type than string, which is a little irritating.

# Inference

In TypeScript, types are inferred in many places. Type inference allows the compiler to know what type variables are without having to explicitly declare the type. For example, TypeScript knows both of these declarations are of type `{ a: number }`:

```ts
const a = { a: 1 }
const b: { a: number } = { a: 1 }
```

In the case of our box example, that `clone` declaration seems like it will be the same across every instantiation. So we may want to create a function that returns a `Box`.

```ts
function createBox(contents: string): Box {
  const innerBox = {
    contents,
    clone: () => ({ ...innerBox })
  }
  return innerBox
}

const box = createBox("initial")
```

Okay, let’s reintroduce generics. The function itself will need to have a generic parameter, in order to pass that to the return type. So it’ll look like this:

```ts
function createBox<T>(contents: T): Box<T> {
  const innerBox = {
    contents,
    clone: () => ({ ...innerBox })
  }
  return innerBox
}

const box = createBox("initial")
```

This code will compile without issue, even though I didn’t explicitly say what type the generic was. I only had to declare `createBox("initial")`. That’s because TypeScript will infer generics on a function based on the parameters passed in. It inferred `"initial"` as the type `string`, and used that in place of the generic. The following three statements all return a `Box<number>`, in order of increasing explicitness:

```ts
const b1 = createBox(1)
const b2 = createBox<number>(1)
const b3: Box<number> = createBox<number>(1)
```

# Mapped Types

Now that we’ve covered generics and how to infer generics using functions, let’s get into mapped types.

Let’s start with an example. Staying solidly in the type system, here’s an example of an object with two functions, `a` and `b`. The signature of `a` is `(arg: string) => number` and the signature of `b` is `(arg: Box<string>) => Box<number>`.

```ts
type MyFuncs = {
	a: (arg: string) => number;
	b: (arg: Box<string>) => Box<number>;
}
```

Here’s a scenario we recently ran into at [Bluefin](https://bluefin.one). We’d like to run these functions inside of a web worker, and make it callable from the client side. This inevitably requires us to make these functions asynchronous, and wrap some kind of adapter around them. How do we do that and maintain type safety throughout?

First, let’s think about the overall structure of this mapped type. We have a mapping of keys to arbitrary functions. If we wanted to enforce this structure, the following type might work:

```ts
type FuncArgs = {
    [key: string]: (...args: any[]) => any
}
```

Let’s make sure we’re correct. TypeScript is structural, so we can see if one type is a supertype of another. In this case, `FuncArgs` should be a supertype of `MyFuncs`.

```ts
type Test = MyFuncs extends FuncArgs ? true : false
//   ^ true
```

Since `FuncArgs` exists to enforce a structure, I didn’t use generics, because I don’t want it to be more specific. With the above enforcement, we can create a function that takes in an object that maps keys to functions, but have TypeScript infer the generics so that we keep the all-important information on the function’s signatures.

```ts
function makeArgsAsync<T extends FuncArgs>(args: T): void {
    // todo
}

makeArgsAsync({
  a: (arg: string) => arg,
  b: (arg: Box<string>) => arg.clone(),
})
// ^ function makeArgsAsync<{
//       a: (arg: string) => string;
//       b: (arg: Box<string>) => Box<string>;
//   }>(args: {
//       a: (arg: string) => string;
//       b: (arg: Box<string>) => Box<string>;
//   }): void
```

TypeScript has correctly inferred the input arguments to match our `MyFuncs` type. That means that during development we don’t have to explicitly declare types to use the function correctly. We also won’t pass incorrect arguments to this function, since we’ve required the structure of our arguments to be a mapping of string keys to functions.

Let’s now map the return types to Promises. We can use the built-in `Parameters<T>` and `ReturnType<T>` utility types to extract the parameters and return type of each function. Then, we just need to reconstruct the function, with a `Promise<T>` around the return type. To do this on one function, it might look like this:

```ts
type ToAsync<Fn extends (...args: any[]) => any> =
  (...args: Parameters<Fn>) => Promise<ReturnType<Fn>>

type Result = ToAsync<(arg: string) => string>
//   ^ type Result = (arg: string) => Promise<string>
```

Okay, now let’s apply `ToAsync` in a mapped type.

```ts
type MyFuncs = {
  a: (arg: string) => number
  b: (arg: Box<string>) => Box<number>
}

type ToAsync<Fn extends (...args: any[]) => any> =
  (...args: Parameters<Fn>) => Promise<ReturnType<Fn>>

type MyFuncsAsync = {
  [K in keyof MyFuncs]: ToAsync<MyFuncs[K]>
}
// ^ type MyFuncsAsync = {
//       a: ToAsync<(arg: string) => number>;
//       b: ToAsync<(arg: Box<string>) => Box<number>>;
//   }

```

The statement `[K in keyof MyFuncs]` gives us a new type `K` that we can use to map into `MyFuncs`. The statement lets us use each field in `MyFuncs` as though it were a new generic argument, and TypeScript will take those results and reconstruct a new mapped type. Here’s the above, resulting in `MyFuncsAsync` again, but this time using a generic utility type:

```ts
type ToAsync<Fn extends (...args: any[]) => any> =
  (...args: Parameters<Fn>) => Promise<ReturnType<Fn>>

type MappedToAsync<T extends FuncArgs> = {
  [K in keyof T]: ToAsync<T[K]>
}

type MyFuncsAsync = MappedToAsync<MyFuncs>
```

With this new utility type, we can finish out the signature of the `makeArgsAsync` function:

```ts
function makeArgsAsync<T extends FuncArgs>(
  args: T
): MappedToAsync<T> {
  // todo
}

const asyncArgs = makeArgsAsync({
  a: (arg: string) => arg,
  b: (arg: Box<string>) => arg.clone(),
})

const result = asyncArgs.a("test")
//    ^ Promise<string>
```

Success! We’ve now created a mapped type that maps an object of synchronous functions to asynchronous. If you want more examples of this, [TypeScript’s handbook](https://www.typescriptlang.org/docs/handbook/2/mapped-types.html) is a great source. There’s one thing that we left out, though. How do we actually operate on each key / value pair such while maintaining types throughout?

## Implementation

The part that many resources leave out is actually implementing the runtime code while maintaining type-safety. To mentally maintain focus when working with complex types, I recommend splitting each bit of functionality that deals with a different part of the type into separate functions. Putting all the implementation inside of a for loop or mapping inside the main function can result in a confusing type hierarchy. Here’s an implementation of just making one function asynchronous:

```ts
function makeArgAsync<Fn extends (...args: any[]) => any>(
  fn: Fn
): ToAsync<Fn> {
  return async (...args) => {
    return new Promise<ReturnType<Fn>>((resolve) => {
      setTimeout(() => {
        resolve(fn(...args))
      }, 1000)
    })
  }
}
```

Now, let’s use it.

```ts
function makeArgsAsync<T extends FuncArgs>(
  args: T
): MappedToAsync<T> {
  return Object.fromEntries(
    Object.keys(args).map((key) => [
      key,
      makeArgAsync(args[key])
    ]),
  ) as MappedToAsync<T>
}
```

The `as` keyword is casting in TypeScript. We’ve had to cast to `MappedToAsync<T>` here because of some TypeScript quirks. `Object.fromEntries` does not know from the output whether all the keys have been iterated over. It just takes in the entries with type `Iterable<readonly [PropertyKey, ToAsync<T[keyof T]>]>`. There’s no information on how many entries there are, nor if all `PropertyKey` are included.

Additionally, `Object.keys` does not return the type `(keyof T)[]`. Instead, it returns `string[]`. This is because the keys may differ from the structural type that the runtime object satisfies. For example:

```ts
type ObjType = { a: number }
const obj: ObjType = { a: number, b: number }
```

`obj` satisfies the structural type of `ObjType`, but the key `b` will show up during runtime, hence the difference in type for `Object.keys`.

Casting can be unavoidable when working with complex mapped types for the above reasons. As the developer, you can safely assert that all keys will be operated on once, and you have to inform TypeScript of that information. Like I mentioned earlier, I recommend that the functions operating on the entire mapped type be as small as possible, and defer to smaller functions that operate on each field. It lets you maintain focus on the generics you care about in the moment.

# Conclusion

Mapped types, when paired with generics and utility types like `Parameters` and `ReturnType`, give TypeScript an almost magical ability to preserve structure and intent across functions. Whether you’re adapting functions for use in a worker thread or transforming types across boundaries, these tools let you do it safely and predictably. While some type assertions are necessary, especially at runtime boundaries, maintaining clear separation of logic and generic constraints go a long way. If you’re building complex systems in TypeScript, mastering mapped types is essential.