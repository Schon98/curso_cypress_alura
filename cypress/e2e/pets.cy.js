describe('', () => {
    it('explorando o site Adopet', () => {
        cy.visit('https://adopet-frontend-cypress.vercel.app/');
        cy.contains('a','Ver pets disponíveis para adoção').click();
        cy.get('.header__home').click();
        cy.get('.header__message').click();
        cy.get('input[name="email"]').type('matheus@email.com');
        cy.get('input[name="password"]').type('Senha123');
        cy.contains('button', 'Entrar').click();
        cy.contains('a', 'Falar com responsável').click();







    });
});