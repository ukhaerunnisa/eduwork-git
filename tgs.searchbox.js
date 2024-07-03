/// <reference types="cypress" />

describe('Searchbox Test', function() {
    before(() => {
        cy.visit('http://zero.webappsecurity.com/index.html')
    })
    it('Should typr into searchbox and submit', () => {
        cy.get('#searchTerm').type('online {enter}')
        cy.get('h2').should('contain.text', 'Search Results:') 
        cy.get('.top_offset').should('contain.text', 'The following pages were found for the query: online')
        cy.get(':nth-child(1)').should('contain.text', 'Zero - Free Access to Online Banking')
        cy.get(':nth-child(2)').should('contain.text', 'Zero - Online Statements')
    })
})