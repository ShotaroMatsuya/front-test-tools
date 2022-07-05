// module.exports = {
//   e2e: {
//     setupNodeEvents(on, config) {
//       // implement node event listeners here
//     },
//   },
// };

module.exports = {
  projectId: 'yn1ycf',
  e2e: {
    setupNodeEvents(on, config) {},
    baseUrl: 'http://localhost:3000',
    supportFile: 'e2e/cypress/support/e2e.{js,jsx,ts,tsx}',
    specPattern: 'e2e/cypress/e2e/**/*.cy.{js,jsx,ts,tsx}',
  },
  retries: 2,
  downloadsFolder: 'e2e/cypress/downloads',
  fixturesFolder: 'e2e/cypress/fixtures',
  screenshotsFolder: 'e2e/cypress/screenshots',
  videosFolder: 'e2e/cypress/videos',
};
