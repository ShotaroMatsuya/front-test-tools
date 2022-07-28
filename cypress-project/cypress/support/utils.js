export const visitAPage = path => {
  cy.visit('/' + path);
};

export const checkURL = () => cy.url();
