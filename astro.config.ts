import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import icon from "astro-icon";
import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://chrisvanderloo.com/",
	integrations: [
		icon(),
		tailwind(),
		sitemap(),
	],
	markdown: {
    shikiConfig: {
      theme: 'catppuccin-mocha',
    },
  },
});
