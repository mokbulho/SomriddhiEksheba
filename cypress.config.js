const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    specPattern: 'cypress/Jobs/**/*.cy.{js,jsx,ts,tsx}',
    setupNodeEvents(on, config) {

    },

  },
  viewportWidth: 1920,
  viewportHeight: 1300,
});
