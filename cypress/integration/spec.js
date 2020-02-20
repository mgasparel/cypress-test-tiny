/// <reference types="cypress" />
describe('page', () => {
  it('works', () => {
    cy.server()
    cy.route({ method: 'PUT', url: 'https://nocontentexample.azurewebsites.net/api/HttpTrigger1?code=P9h9uOLUo5EelWZX2B4A6TaVBEeyDAoIvwNlxqP1kIVQUba3qXPi9w==' }).as('nocontent');

    cy.visit('./test.html')

    cy.wait('@nocontent')
      .should('have.property', 'status', 204);
  })
})
