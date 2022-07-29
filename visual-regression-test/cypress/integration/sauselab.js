/// <reference types="Cypress" />

describe('SauseLab Landing page', () => {
  beforeEach(() => {
    // cy.viewport('macbook-15');
    cy.visit('https://www.saucedemo.com');
  });
  it('should load the page correctly', () => {
    cy.matchImageSnapshot('Full Page'); // 最初はsnapshotを作成し、以降のテストではsnapshotと比較する
  });
});
