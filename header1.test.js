///<reference types="cypress" />
describe('Automation API with Pokeapi', () =>{
    it('Successfully validate content-type', () => {
        cy.request('https://pokeapi.co/api/v2/pokemon/ditto').as('pokemon')
        cy.get('@pokemon').its('headers').its('content-type')
        .should('include', 'application/json; charset=utf-8')

        });
    it('Seccessfully validate status code', () =>{
        cy.request('https://pokeapi.co/api/v2/pokemon/ditto').as('ditto')
        cy.get('@ditto').its('status').should('equal', 200)
    })
    it('Successfully validate status code with parans', () =>{
        cy.request({
            method: 'GET',
            url: 'https://reqres.in/api/users?page=2&per_pages=1&delay=3'
        }).as('users')
        cy.get('@users').its('status').should('equal', 200)
    })
    it('Successfully validate content', () => {
        cy.request('https://pokeapi.co/api/v2/pokemon/bulbasaur').as('bulbasaur')
        cy.get('@bulbasaur').its('body').should('include', {name:'bulbasaur'})
    })
    it.only('Successfully validate content', () => {
        cy.request('https://pokeapi.co/api/v2/pokemon/bulbasaur').as('bulbasaur')
        cy.get('@bulbasaur').its('body').should((body) => {
            expect(body).to.have.property('name', 'bulbasaur')
            expect(body.abilities[0].ability.name).to.eq('overgrow')
            expect(body.abilities[0].ability.url).to.eq('https://pokeapi.co/api/v2/ability/65/')
    })
})
})