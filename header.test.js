describe('Validation Header', () =>{
    it('Successfully validate content-type', () => {
        cy.request('https://pokeapi.co/api/v2/pokemon/ditto').as('pokemon')
        cy.get('@pokemon').its('headers').its('content-type')
        .should('include', 'application/json; charset=utf-8')

        cy.get('@pokemon').its('body').should((body) => {
            expect(body).to.have.property('name', 'ditto')
            expect(body).to.have.property('id', 132)
            expect(body).to.have.property('base_experience', 101)
        })
    });
})