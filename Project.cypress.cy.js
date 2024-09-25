/// <reference types="cypress" />

const { log } = require("async")

describe('Navbar Test',() => {
    beforeEach(() => {
        cy.visit('https://www.saucedemo.com/v1/index.html', {timeout: 60000})
        
    })
    it('Should login to application with empty data', () =>{
        cy.get('#user-name').should('be.empty')
        cy.get('#user-name').clear('be.empty')
        cy.get('#password').clear('be.empty')
        cy.get('#login-button').click()
        cy.get('[data-test="error"]').should('be.visible')
        .log('Epic sadface: ')
        cy.get('button.error-button').click()
    })
    it('Should login to application with invalid data', () => {
        cy.get('#user-name').should('be.visible')
        cy.get('#user-name').type('invalid username')
        cy.get('#password').type('invalid password')
        cy.get('#login-button').click()
        cy.get('[data-test="error"]').should('be.visible')
        .log('Epic sadface: ')
        cy.get('button.error-button').click()
    })
    it('Should login to application with valid data', () => {
        cy.fixture("user").then(user => {
             const username = user.username
             const password = user.password

            cy.get('#user-name').clear()
            cy.get('#user-name').type(username)
            cy.get('#password').clear()
            cy.get('#password').type(password)
            cy.get('#login-button').click()

            cy.get('.product_label').should('be.visible')
            .log('Products')

        cy.get('.bm-burger-button > button').click()
        cy.get('#inventory_sidebar_link').click()
        cy.get('.product_sort_container').select(2)
        cy.get('.product_sort_container').select('Price (high to low)')

        cy.get('#item_4_img_link > .inventory_item_img').click()

        cy.get('.btn_primary').click()
        cy.get('#shopping_cart_container').click()
        cy.get('.item_pricebar > .btn_secondary').click()
        cy.get('.btn_secondary').click()

        cy.get(':nth-child(1) > .pricebar > .btn_primary').click()
        cy.get('#shopping_cart_container').click()
        cy.get('.btn_action').click()
        
        cy.get('#first-name').type('Khaerun')
        cy.get('#last-name').type('nisa')
        cy.get('#postal-code').type(12345)
        cy.get('.btn_primary').click()
        cy.get('.btn_action').click()

        cy.get('.bm-burger-button > button').click()
        cy.get('#logout_sidebar_link').click()
    })       
    }) 
    })
