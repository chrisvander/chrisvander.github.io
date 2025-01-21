import { getCollection } from "astro:content"
import rss from "@astrojs/rss"
import MarkdownIt from "markdown-it"
import sanitizeHtml from "sanitize-html"
const parser = new MarkdownIt()

export async function GET(context: { site: string }) {
  const blog = await getCollection("blog")
  return rss({
    title: "Christian van der Loo",
    description: "My personal blog.",
    site: context.site,
    items: blog
      .filter((post) => post.data.draft !== true)
      .map((post) => ({
        link: `/posts/${post.slug}`,
        content: sanitizeHtml(parser.render(post.body), {
          allowedTags: sanitizeHtml.defaults.allowedTags.concat(["img"]),
        }),
        ...post.data,
      })),
  })
}
