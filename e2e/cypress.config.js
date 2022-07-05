module.exports = {
  projectId: 'yn1ycf',
  e2e: {
    setupNodeEvents(on, config) {},
    baseUrl: 'http://localhost:3000',
    supportFile: 'cypress/support/e2e.{js,jsx,ts,tsx}',
    specPattern: 'cypress/e2e/**/*.cy.{js,jsx,ts,tsx}',
  },
  retries: 2,
  downloadsFolder: 'cypress/downloads',
  fixturesFolder: 'cypress/fixtures',
  screenshotsFolder: 'cypress/screenshots',
  videosFolder: 'cypress/videos',
};
