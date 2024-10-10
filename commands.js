// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
Cypress.Commands.add('loginViaAPI', (email, password) => {
    cy.request({
        method: 'POST', 
        url: 'https://reqres.in/api/user',
        body:{
            username: email,
            password : password 
        }
        
    }).then((response) => {
        expect(response.status).equal(201)
        if (response.status === 200 && response.body.token) {
        cy.setCookie('sessionId', response.body.token)
    } else {
        cy.log('Login failed: ' + response.body.error)
    }
    if (response.status === 200 && response.body.token) {
        cy.setCookie('userId', response.body.token)
    } else {
        cy.log('Login failed: ' + response.body.error)
    }
    if (response.status === 200 && response.body.token) {
        cy.setCookie('userName', response.body.token)
    } else {
        cy.log('Login failed: ' + response.body.error)
    }
    })
})