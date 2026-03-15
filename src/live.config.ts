import { defineLiveCollection } from "astro:content";
import * as com from "./lexicons/com";
import { atLiveLoader } from "at-astro-loader";

const projects = defineLiveCollection({
  loader: atLiveLoader(com.chrisvanderloo.project, {
    endpoint: "https://bsky.chrisvanderloo.com",
    repo: "chrisvanderloo.com",
  }),
});

export const collections = { projects };
