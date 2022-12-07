import { defineConfig } from 'cypress';
const createBundler = require('@bahmutov/cypress-esbuild-preprocessor');
const cucumberPreprocessor =
  require('@badeball/cypress-cucumber-preprocessor').addCucumberPreprocessorPlugin;
const createESBuildPlugin =
  require('@badeball/cypress-cucumber-preprocessor/esbuild').createEsbuildPlugin;

export default defineConfig({
  e2e: {
    specPattern: '**/*.feature',
    baseUrl: 'https://airmalta.com/en',
    defaultCommandTimeout: 60000,
    pageLoadTimeout: 60000,
    viewportHeight: 970,
    viewportWidth: 1650,
    video: false,
    chromeWebSecurity: false,
    async setupNodeEvents(
      on: Cypress.PluginEvents,
      config: Cypress.PluginConfigOptions
    ): Promise<Cypress.PluginConfigOptions> {
      const bundler = createBundler({ plugins: [createESBuildPlugin(config)] });

      on('file:preprocessor', bundler);

      await cucumberPreprocessor(on, config);

      return config;
    },
  },
});
