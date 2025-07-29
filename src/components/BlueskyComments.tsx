import type { BrowserOAuthClient, OAuthSession } from "@atproto/oauth-client-browser"
import {
  type PropsWithChildren,
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
  useTransition,
} from "react"
import { getClient } from "../oauth.ts"

type OAuthContextType = {
  isLoading: boolean
  client: BrowserOAuthClient | undefined
  handle: string | undefined
  session: OAuthSession | undefined
  setSession: (session: OAuthSession) => void
  signOut: () => Promise<void>
} | null
const OAuthContext = createContext<OAuthContextType>(null)

function useOAuthContext() {
  const ctx = useContext(OAuthContext)
  if (!ctx) {
    throw new Error("OAuthSessionContext.Provider required for useOAuthSession.")
  }
  return ctx
}

function OAuthContextProvider({ children }: PropsWithChildren) {
  const [isPending, startTransition] = useTransition()
  const [client, setClient] = useState<BrowserOAuthClient>()
  const [handle, setHandle] = useState<string>()
  const [session, setSession] = useState<OAuthSession>()

  const signOut = useCallback(async () => {
    if (client) {
      await client.revoke(session?.sub || "")
      setSession(undefined)
    }
  }, [client, session])

  useEffect(() => {
    startTransition(async () => {
      const client = await getClient()
      const initReturn = await client.init()
      if (initReturn) {
        setSession(initReturn.session)
        const handle = await fetch(`https://plc.directory/${initReturn.session.did}`)
          .then((b) => b.json())
          .then((j) => j.alsoKnownAs?.[0]?.replace("at://", "@"))
        setHandle(handle)
      }
      setClient(client)
    })
  }, [])

  return (
    <OAuthContext.Provider
      value={{ isLoading: isPending, client, handle, session, setSession, signOut }}
    >
      {children}
    </OAuthContext.Provider>
  )
}

function SignInWithBluesky() {
  const { client } = useOAuthContext()
  const [handle, setHandle] = useState("")

  const onChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setHandle(e.target.value)
  }, [])

  const onSignIn = useCallback(() => {
    client?.signIn(handle)
    window.location.hash = "comments"
    localStorage.setItem("redirect", window.location.href)
  }, [client, handle])

  return (
    <div className="flex flex-col items-center gap-2 bg-zinc-100 p-4 py-8 rounded-lg border border-zinc-200">
      <h3 className="mb-0">Sign In with Bluesky</h3>
      <span className="text-sm text-zinc-800 mb-4">or any other Atmosphere account.</span>
      <div className="flex gap-2 justify-center w-full">
        <input
          value={handle}
          onChange={onChange}
          className="bg-white border border-zinc-200 p-1 rounded-md"
          placeholder="user.bsky.social"
        />
        <button
          type="button"
          onClick={onSignIn}
          className="bg-blue-500 cursor-pointer hover:bg-blue-600 text-white px-3 py-1 rounded-md"
        >
          Sign In
        </button>
      </div>
    </div>
  )
}

function UserComment() {
  const [comment, setComment] = useState<string>("")
  const { handle, signOut } = useOAuthContext()
  return (
    <>
      <textarea
        className="w-full min-h-32 mb-1 resize-none border border-zinc-300 rounded-lg bg-zinc-50 hover:bg-zinc-100 focus:bg-white p-2"
        placeholder="Enter your comment here..."
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        maxLength={300}
      />
      <div className="flex justify-between items-center">
        <span className="text-zinc-700 text-sm">
          {handle ? handle : "Signed In"}
          <br />
          <button
            type="button"
            onClick={signOut}
            className="text-xs cursor-pointer hover:underline"
          >
            Sign Out
          </button>
        </span>
        <span className="flex gap-4 items-center">
          <span className="text-zinc-500">{comment.length} / 300</span>
          <button
            type="button"
            className="bg-blue-500 hover:bg-blue-600 active:bg-blue-700 cursor-pointer text-white px-3 py-1 rounded-md hover:shadow-md"
          >
            Post Comment
          </button>
        </span>
      </div>
    </>
  )
}

function UserCommentSection() {
  const { session } = useOAuthContext()
  if (session) return <UserComment />
  return <SignInWithBluesky />
}

export function BlueskyComments() {
  return (
    <>
      <h2>Comments</h2>
      <OAuthContextProvider>
        <UserCommentSection />
      </OAuthContextProvider>
    </>
  )
}
