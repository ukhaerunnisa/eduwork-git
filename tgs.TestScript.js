/// <reference types="cypress" />

describe('My Tugas First Test', () => {
    it('clicking "type" shows the right heading',() => {
        cy.visit('https://example.cypress.io')
        // cy.pause()

        cy.contains('type').click()
        cy.url().should('include', '/commands/actions')

        cy.get('.action-email')
        .type('khaerunnis541@gmail.com')
        .should('have.value', 'khaerunnis541@gmail.com')
    })
})