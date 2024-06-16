import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    baseUrl: 'https://amazing-meerkat-ecc48e.netlify.app/',
    setupNodeEvents(on, config) {},
    viewportWidth: 1200,
    viewportHeight: 800,
  },

  component: {
    devServer: {
      framework: 'react',
      bundler: 'vite',
    },
  },
});
