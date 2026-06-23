import { getCollection } from "astro:content";
import rss from "@astrojs/rss";
import { marked } from "marked";

export async function GET(context: { site: string }) {
  const blog = await getCollection("blog");
  return rss({
    title: "Christian van der Loo",
    description: "My personal blog.",
    site: context.site,
    items: blog
      .filter((post) => post.data.draft !== true)
      .map((post) => ({
        link: `/posts/${post.id}`,
        content: marked.parse(post.body ?? ""),
        ...post.data,
      })),
  });
}
