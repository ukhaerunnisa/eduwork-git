/// <reference types="cypress" />

describe('My First Test', () => {
    it('Click type show the right headings', () => {
        cy.visit('https://example.cypress.io')
        // cy.pause

        cy.contains('type').click()

        cy.url().should('include', 'example.cypress.io')

        cy.get('.action-email')
        .type('khaerunnis541@gmail.com')
        .should('have.value','khaerunnis541@gmail.com')

    })
})

