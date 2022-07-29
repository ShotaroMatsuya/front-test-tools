/// <reference types="Cypress" />

['macbook-15', 'ipad-2', 'iphone-x'].forEach(screen => {
  describe('SauseLab Landing page', () => {
    beforeEach(() => {
      cy.viewport(screen);
      cy.visit('https://www.saucedemo.com');
    });
    it('should load the page correctly', () => {
      cy.matchImageSnapshot(`Full Page on ${screen}`); // 最初はsnapshotを作成し、以降のテストではsnapshotと比較する
    });
    it('the logo should be displayed correctly', () => {
      cy.get('.login_logo').matchImageSnapshot(`logo on ${screen}`); //特定の要素をsnapshotする
      // base画像をupdateしたいときは、npx cypress run --env updateSnapshots=trueを実行する
    });
  });
});
