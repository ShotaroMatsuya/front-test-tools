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
    supportFile: 'cypress-api-request/cypress/support/e2e.{js,jsx,ts,tsx}',
    specPattern: 'cypress-api-request/cypress/e2e/**/*.cy.{js,jsx,ts,tsx}',
  },
  retries: 2,
  downloadsFolder: 'cypress-api-request/cypress/downloads',
  fileServerFolder: 'cypress-api-request',
  fixturesFolder: 'cypress-api-request/cypress/fixtures',
  screenshotsFolder: 'cypress-api-request/cypress/screenshots',
  videosFolder: 'cypress-api-request/cypress/videos',
};
