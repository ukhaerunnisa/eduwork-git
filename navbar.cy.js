/// <reference types="cypress" />

describe('Navbar Test',() => {
    beforeEach(() => {
        cy.visit('http://zero.webappsecurity.com/index.html')
    })

    it('Should display online banking content', () => {
        cy.get('#onlineBankingMenu').click()
        cy.url().should('include', 'online-banking.html')
        cy.get('h1').should('be.visible')
    })

    it('Should display feedback content',() => {
        cy.get('#feedback').click()
        cy.url().should('include', 'feedback.html')

        cy.get('#name').type('Umi Khaerunnisa')
        cy.get('#email').type('khaerunnisa541@gmail')
        cy.get('#subject').type('Payment')
        cy.get('#comment').type('bagaimana cara pembayaran kartu kredit?')
        cy.get('.btn-signin').click()
        cy.get('#feedback-title').should('be.visible')

    })

    it('Should display home content', () => {
        cy.contains('Zero Bank').click()
        cy.url().should('include', 'index.html')
    })
})