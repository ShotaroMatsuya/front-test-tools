const { defineConfig } = require('cypress');

module.exports = defineConfig({
  projectId: 'j1ik93',
  e2e: {
    setupNodeEvents(on, config) {},
    baseUrl: 'http://localhost:3000',
  },
  retries: {
    runMode: 3,
    openMode: 0,
  },
  // experimentalStudio: true, //this feature was removed from v10
});
