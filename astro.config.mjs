// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
// Note: all asset URLs use relative paths (images/..., styles/...)
// so the site works from any base path (Vercel root, GitHub Pages subpath).
export default defineConfig({
  site: 'https://remoteteampartners.com',
  compressHTML: true,
});
