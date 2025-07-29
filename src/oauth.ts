import { BrowserOAuthClient, type HandleResolver } from "@atproto/oauth-client-browser"

const clientId = import.meta.env.DEV
  ? `http://localhost?redirect_uri=${encodeURIComponent("http://127.0.0.1:4321/callback")}`
  : "https://chrisvanderloo.com/client-metadata.json"

export function getClient(
  handleResolver: string | URL | HandleResolver = "https://bsky.chrisvanderloo.com",
) {
  return BrowserOAuthClient.load({ handleResolver, clientId })
}
