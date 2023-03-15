const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'http://qalab.pl.tivixlabs.com',

    viewportWidth: 1024,
    viewportHeight: 768,

    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
