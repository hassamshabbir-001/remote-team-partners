// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
// GHPAGES=true only for GitHub Pages preview builds (served from /remote-team-partners/)
// Vercel builds use root '/' and are unaffected.
export default defineConfig({
  site: 'https://remoteteampartners.com',
  base: process.env.GHPAGES ? '/remote-team-partners/' : '/',
  compressHTML: true,
});
