/// <reference types="cypress"/>

describe('Working with input', () => {
    it('visit the website', () => {
    cy.visit('http://zero.webappsecurity.com/login.html')
    cy.url().should('include', 'zero.webappsecurity.com/login.html')
    // cy.get('#user_login').clear()
    // cy.get('#user_login').type('user_login')
    // cy.get('input[name="user_password"]').clear()
    // cy.get('input[name="user_password"]').type('user_password')
    cy.get('[type="checkbox"').check({multiple: true})
    cy.fixture("user").then(user => {
        const username = user.username
        const password = user.password

        cy.login(username, password)

        // cy.get('#user_login').clear()
        // cy.get('#user_login').type(username)

        // cy.get('input[name="user_password"]').clear()
        // cy.get('input[name="user_password"]').type(password)

        // cy.get('input[name="submit"]').click()

        //cy.get('.alert-error').should('contain.text', 'Login and/or password are wrong.')
})
})
})

// it('Should fill username', () => {
//     cy.get('#user_login').clear()
//     cy.get('#user_login').type('user_login')
// })

// it('Should fill pasword', () => {
//     cy.get('input[name="user_password"]').clear()
//     cy.get('input[name="user_password"]').type('user_password')
// })