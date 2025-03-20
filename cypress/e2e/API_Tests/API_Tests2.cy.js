describe('Perform a successful login',() => {
    it('performs a login with the given username and password',() => {
        cy.request('POST', 'https://reqres.in/api/login',
        { "email": "eve.holt@reqres.in", "password": "cityslicka"}
        ).its('status').should('equal',200);
    })
})