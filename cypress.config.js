import { defineConfig } from 'cypress';
import dotenv from 'dotenv';
dotenv.config();

export default defineConfig({
  e2e: {
    baseUrl: 'http://localhost:3000',
    port: 5000,
    viewportHeight: 900,
    viewportWidth: 1440,
    env: { ...process.env },

    // setupNodeEvents(on, config) {
    //   // implement node event listeners here
    // },
  },
});
