import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import mdx from '@astrojs/mdx';
import netlify from '@astrojs/netlify';

export default defineConfig({
  site: 'https://gty.nl',
  output: 'static',
  adapter: netlify(),
  trailingSlash: 'always',
  build: {
    format: 'directory',
  },
  integrations: [
    tailwind({ applyBaseStyles: false }),
    sitemap(),
    mdx(),
  ],
  vite: {
    ssr: {
      noExternal: ['@fontsource-variable/*', '@fontsource/*'],
    },
  },
});
