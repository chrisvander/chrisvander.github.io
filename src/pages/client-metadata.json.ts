export async function GET() {
  return new Response(
    JSON.stringify({
      client_id: "https://chrisvanderloo.com/client-metadata.json",
      client_name: "Chris van der Loo's Blog",
      client_uri: "https://chrisvanderloo.com",
      redirect_uris: ["https://chrisvanderloo.com/callback"],
      scope: "atproto",
      grant_types: ["authorization_code", "refresh_token"],
      response_types: ["code"],
      token_endpoint_auth_method: "none",
      application_type: "web",
      dpop_bound_access_tokens: true,
    }),
  )
}
