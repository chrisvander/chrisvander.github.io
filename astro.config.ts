import sitemap from "@astrojs/sitemap";
import tailwindcss from "@astrojs/tailwind";
import icon from "astro-icon";
import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://chrisvanderloo.com/",
	integrations: [
		icon(),
		sitemap(),
		tailwindcss()
	],
	markdown: {
    shikiConfig: {
      themes: {
        light: "catppuccin-latte",
        dark: "catppuccin-mocha"
      },
    },
  },
});
