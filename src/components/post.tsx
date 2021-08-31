/** @jsx jsx */
import * as React from "react";
import { jsx, Heading, Image } from "theme-ui";
import { MDXRenderer } from "gatsby-plugin-mdx";
import Layout from "./layout";
import ItemTags from "./item-tags";
import Seo from "./seo";

import "katex/dist/katex.min.css";

type PostProps = {
  data: {
    post: {
      slug: string;
      title: string;
      date: string;
      tags?: {
        name: string;
        slug: string;
      }[];
      description?: string;
      canonicalUrl?: string;
      body: string;
      excerpt: string;
      timeToRead?: number;
      banner?: {
        childImageSharp: {
          resize: {
            src: string;
          };
        };
      };
    };
  };
};

const px = [`32px`, `16px`, `8px`, `4px`];
const shadow = px.map((v) => `rgba(0, 0, 0, 0.15) 0px ${v} ${v} 0px`);

const Post = ({ data: { post } }: PostProps) => (
  <Layout>
    <Seo
      title={post.title}
      description={post.description ? post.description : post.excerpt}
      image={post.banner ? post.banner.childImageSharp.resize.src : undefined}
      pathname={post.slug}
      canonicalUrl={post.canonicalUrl}
    />
    <Heading as="h1" variant="styles.h2">
      {post.title}
    </Heading>
    {post.description && (
      <p
        sx={{
          mt: 2,
          fontSize: [2, 2, 3],
        }}
      >
        {post.description}
      </p>
    )}
    <p
      sx={{
        color: `secondary`,
        mt: 1,
        a: { color: `secondary` },
        fontSize: [1, 1, 2],
      }}
    >
      <time>{post.date}</time>
      {post.tags && post.tags.length > 0 && (
        <React.Fragment>
          {` — `}
          <ItemTags tags={post.tags.slice(0, 3)} />
        </React.Fragment>
      )}
      {post.timeToRead && ` — `}
      {post.timeToRead && <span>{post.timeToRead} min read</span>}
      {post.parent && ` — `}
      {post.parent
        ? post.parent.parent.relativeDirectory.split("/").slice(1)
        : ""}
    </p>
    {post.banner && <Image src={post.banner.childImageSharp.resize.src} />}
    <section
      sx={{
        my: 5,
        ".gatsby-resp-image-wrapper": {
          my: [4, 4, 5],
          boxShadow: shadow.join(`, `),
        },
        variant: `layout.content`,
      }}
    >
      <MDXRenderer>{post.body}</MDXRenderer>
    </section>
    {post.tags && post.tags.length > 0 && (
      <React.Fragment>
        All tags{` — `}
        <ItemTags tags={post.tags} />
      </React.Fragment>
    )}
  </Layout>
);

export default Post;
