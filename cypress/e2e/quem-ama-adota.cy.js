describe('Página principal', () => {
    beforeEach(() => {
        cy.visit('https://adopet-frontend-cypress.vercel.app/');   
      })
    it('Encontrar a frase quem ama adora', () => {
        cy.contains('Quem ama adota!');
    });
});