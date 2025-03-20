describe('Performs an update',() => {
    it('performs and update with the given name and job',() => {
        cy.request('PUT', 'https://reqres.in/api/users/2',
            { "name ": "morpheus" , "job": "zion resident"}
            ).its('status').should('equal',200);
    })
})