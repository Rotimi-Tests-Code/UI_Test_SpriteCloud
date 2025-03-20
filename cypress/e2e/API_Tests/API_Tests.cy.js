describe('Retrieve a list of users',() => {
    it('Gets the list of users',() => {

        cy.request('GET', 'https://reqres.in/api/users?page=2')
        .its('status').should('equal',200);
    })
})