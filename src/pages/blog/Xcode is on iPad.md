---
layout: ../../layouts/PostLayout.astro
title: "Xcode is on iPad! Kinda."
date: 2021-06-08
slug: /xcode-is-on-ipad
tags: [wwdc, ipados, ipad, ios, apple]
banner: ./Images/ipadpro-swift.jpg
---

Apple's WWDC kicked off yesterday with an epic keynote outlining all of their upcoming software updates and APIs for developers, with all of these major releases coming in the fall. One thing that I [[The Future of iPadOS|have been hoping for]] on the iPad is inclusion of pro-level software, including creative software like Logic Pro or development tools like Xcode itself. Today, Apple didn't deliver a pro software suite to iPad. But they did introduce updates to Swift Playgrounds, Apple's app for teaching people how to code using Swift on an iPad in a fun, interactive way. The new update now allows full apps to be built on the iPad and even submitted to the App Store, without a Mac as an intermediary. While it may be disappointing to not have full developer suites yet, the fact that this was introduced implies a few things about what Apple is working on.

## In with the New

Last year, Apple introduced a declarative syntax for UI design known as SwiftUI, which made it simpler than ever before to create beautiful UIs in a way that easily adapts to different screen sizes and classes of device. It was limited when compared to it's older sibling, UIKit, which has been around since iOS 2.0. Last year SwiftUI brought with it support inside of Swift Playgrounds, which made building UI at all on Swift Playgrounds possible. It was half-baked at the time, lacking support for proper view models or the ability to preview iPad-level screens, but the basic tools existed. This year, with the announcement that you can build full apps on the iPad for the first time, Apple is making full use of SwiftUI's features to enable creation of apps with the declarative syntax. With SwiftUI 2, there is wider support for more of the interfaces that developers would have otherwise needed to fall back to UIKit to support.

As the library gets more mature, complex and fully-featured apps become possible with SwiftUI. While it's still in an early state, the perfect place to deploy it is within the context of Swift Playgrounds

## Transition Periods

Apple is undoubtably aware that professionals want to use their iPads for a range of tasks, and they're working on getting it there, one step at a time. Xcode on iPad, with the state of the underlying software and build tools at this point, wouldn't make sense for Apple to release. It just wouldn't be Xcode unless it lived up to the feature set of it's Mac-native sibling.

I think the takeaway from this feature is that Apple is continuing to bring previously Mac-only features to the iPad. At this point, they've even brought many of the tools required to build, run, test, and deploy _full iOS apps_ on the iPad. I'd expect that once the internal build tools and underlying frameworks found in Swift Playgrounds on iPad are as feature-rich and capable as what is bundled with Xcode is the point that Apple will ship Xcode for the iPad. For now, enjoy building your apps in Swift Playgrounds.

In the meantime? Just get a Mac.
