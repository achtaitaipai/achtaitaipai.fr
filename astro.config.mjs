import { defineConfig } from "astro/config";
import expressiveCode from "astro-expressive-code";
import remarkUnwrapImages from "remark-unwrap-images";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";

import svelte from "@astrojs/svelte";

// https://astro.build/config
export default defineConfig({
  site: "https://achtaitaipai.fr",
  markdown: {
    remarkPlugins: [remarkUnwrapImages]
  },
  integrations: [expressiveCode({
    themeCssSelector: theme => theme.name.includes("light") ? '' : '.dark',
    styleOverrides: {
      borderRadius: 0,
      frames: {
        shadowColor: "transparent"
      }
    }
  }), mdx(), sitemap(), svelte()]
});