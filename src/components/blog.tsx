/** @jsx jsx */
import * as React from "react";
import { jsx, Heading, Link as TLink, Flex } from "theme-ui";
import { Link } from "gatsby";
import kebabCase from "lodash.kebabcase";
import Layout from "./layout";
import Listing from "./listing";
import ItemTags from "./item-tags";
import useMinimalBlogConfig from "../hooks/use-minimal-blog-config";
import replaceSlashes from "../utils/replaceSlashes";
import Seo from "./seo";

type PostsProps = {
  posts: {
    slug: string;
    title: string;
    date: string;
    excerpt: string;
    description: string;
    timeToRead?: number;
    tags?: {
      name: string;
      slug: string;
    }[];
    parent?: {
      parent?: {
        name: string;
        relativeDirectory: string;
      };
    };
  }[];
  list: {
    fieldValue: string;
    totalCount: number;
  }[];
};

function compareTags(t1, t2) {
  if (t1.totalCount == t2.totalCount) {
    return t1.fieldValue > t2.fieldValue;
  }
  return t2.totalCount > t1.totalCount;
}

const Blog = ({ posts, list }: PostsProps) => {
  const { tagsPath, basePath } = useMinimalBlogConfig();

  return (
    <Layout>
      <Seo title="Posts" />
      <Heading as="h1" variant="styles.h1" sx={{ marginY: 2 }}>
        Posts
      </Heading>
      <Flex
        sx={{
          alignItems: `center`,
          justifyContent: `space-between`,
          flexFlow: `wrap`,
        }}
      >
        <div>
          {list
            .sort(compareTags)
            .slice(0, 4)
            .map((listItem, i) => (
              <React.Fragment key={listItem.fieldValue}>
                {!!i && `, `}
                <TLink
                  as={Link}
                  to={replaceSlashes(
                    `/${basePath}/${tagsPath}/${kebabCase(listItem.fieldValue)}`
                  )}
                >
                  {listItem.fieldValue} ({listItem.totalCount})
                </TLink>
              </React.Fragment>
            ))}
          {list.length > 6 && ", ..."}
        </div>
        <TLink
          as={Link}
          sx={{ variant: `links.secondary`, marginY: 2 }}
          to={replaceSlashes(`/${basePath}/${tagsPath}`)}
        >
          View all tags
        </TLink>
      </Flex>
      <Listing posts={posts} sx={{ mt: [4, 5] }} />
    </Layout>
  );
};

export default Blog;
