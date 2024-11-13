describe('página de cadastro', () => {
  it('Deve preencher os campos do formulário corretamente para cadastrar um novo usuário', () => {
    cy.visit('https://adopet-frontend-cypress.vercel.app/');
    cy.contains('a', 'Cadastrar').click();
    cy.get('[data-test="input-name"]').type('Matheus Schon');;
    cy.get('[data-test="input-email"]').type('matheus@email.com');
    cy.get('[data-test="input-password"]').type('Senha123');
    cy.get('[data-test="input-confirm-password"]').type('Senha123');
    cy.get('[data-test="input-confirm-password"]').click();
    cy.get('[data-test="submit-button"]')

  })
})