import { defineConfig } from 'astro/config';

const isProduction = process.env.NODE_ENV === 'production';

export default defineConfig({
  site: 'https://alisatozaj.github.io',
  base: isProduction ? '/Duart-e-Arta' : '/',
});