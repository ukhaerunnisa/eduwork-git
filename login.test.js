/// <reference types="cypress"/>

describe('Working with input', () => {
    it('visit the website', () => {
    cy.visit('http://zero.webappsecurity.com/login.html')
    cy.url().should('include', 'zero.webappsecurity.com/login.html')
    cy.get('#user_login').clear()
    cy.get('#user_login').type('user_login')
    cy.get('input[name="user_password"]').clear()
    cy.get('input[name="user_password"]').type('user_password')
    cy.get('[type="checkbox"').check({multiple: true})
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