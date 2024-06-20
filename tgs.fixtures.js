/// <reference types="cypress"/>

describe('Working with input', () => {
    it('visit the website', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.url().should('include', 'opensource-demo.orangehrmlive.com')
    cy.fixture("user").then(user => {
        const username = user.username
        const password = user.password

        cy.get('input[name="username"]').clear()
        cy.get('input[name="username"]').type(username)

        cy.get('input[name="password"]').clear()
        cy.get('input[name="password"]').type(password)

        cy.get('.oxd-button').click()
        cy.get('[type="button"').click({multiple: true})
})
})
})

