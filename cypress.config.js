const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    specPattern: 'cypress/Polytecnic/**/*.cy.{js,jsx,ts,tsx}',
    setupNodeEvents(on, config) {

    },

  },
  viewportWidth: 1920,
  viewportHeight: 1300,
});
