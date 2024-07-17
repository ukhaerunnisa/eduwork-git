/// <reference types="cypress" />

describe('Searchbox Test', () => { //function() {
    beforeEach(() => {
        cy.visit('http://zero.webappsecurity.com/index.html')
        cy.url().should('include', 'index.html')
        cy.get('#signin_button').click()

   })
        
//    it('Should login to application with invalid data', () => {
    //     cy.get('#login_form').should('be.visible')
    //     cy.get('#user_login').type('invalid username')
    //     cy.get('#user_password').type('invalid password')
    //     cy.get('input[name="submit"]').click()
    //     cy.get('.alert').should('be.visible').and('contain.text', 'Login and/or password are wrong.')
    // })
    it('Should login to application with valid data', () => {
        cy.fixture("user").then(user => {
            const username = user.username
            const password = user.password
            
            cy.login1(username, password)

    })
    })
    })