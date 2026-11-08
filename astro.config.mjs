import { defineConfig } from 'astro/config';
import rootPaths from './integrations/root-paths.mjs';

// The base path is only needed on GitHub Pages. GITHUB_ACTIONS is set by the
// deploy workflow, so `astro dev` and local builds keep working at "/".
const base = process.env.GITHUB_ACTIONS ? '/Duart-e-Arta' : '/';

export default defineConfig({
  site: 'https://alisatozaj.github.io',
  base,
  integrations: [rootPaths(base)],
});
