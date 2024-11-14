describe('', () => {
    beforeEach(() => {
        cy.visit('https://adopet-frontend-cypress.vercel.app/');   
      })
    it('explorando o site Adopet', () => {
        cy.contains('a','Ver pets disponíveis para adoção').click();
        cy.get('.header__home').click();
        cy.get('.header__message').click();
    });
    it('realizar login', () => {
        cy.get('[data-test="login-button"]').click();
        cy.get('input[name="email"]').type('matheus2@email.com');
        cy.get('input[name="password"]').type('Senha123');
        cy.contains('button', 'Entrar').click();
        cy.contains('a', 'Falar com responsável').click();
    });
});