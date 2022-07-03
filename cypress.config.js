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
  },
  retries: 2,
  fileServerFolder: 'cypress-api-request',
  fixturesFolder: 'cypress-api-request/cypress/fixtures',
  screenshotsFolder: 'cypress-api-request/cypress/screenshots',
  videosFolder: 'cypress-api-request/cypress/videos',
};
