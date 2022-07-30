module.exports = {
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    // specPattern: 'src/tests/*.cy.jsx',
    component: {
      specPattern: 'src/tests/*.cy.jsx',
    },
  },

  component: {
    devServer: {
      framework: 'create-react-app',
      bundler: 'webpack',
    },
  },
};
