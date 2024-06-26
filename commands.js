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

Cypress.Commands.add('login', (username, password) => {
    cy.clearCookies()
    cy.clearLocalStorage()
    cy.get('#user_login').clear()
        cy.get('#user_login').type(username)

        cy.get('#user_password').clear()
        cy.get('#user_password').type(password)

        cy.get('input[name="submit"]').click()

        cy.get('#pay_bills_tab').click()

        cy.get('#sp_payee').select('Bank of America')

        cy.get('#sp_account').select('Loan')

        cy.get('#sp_amount').type(5)

        cy.get('#sp_date').eq(0).click()
        cy.get('.ui-datepicker-calendar').eq(0).find('.ui-state-default')
        .each((el) =>{
            const date = el.text()
            cy.log(date)
            if(date==='6')
                {
                    cy.wrap(el).click()
                }
        })

        cy.get('#sp_description').type('Payment')

        cy.get('#pay_saved_payees').click()
})