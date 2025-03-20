describe('Perform a successful login',() => {
    it('performs a login with the given username and password',() => {
        cy.request('POST', 'https://reqres.in/api/login',
        { "email": "peter@klaven"}
        ).its('status').should('equal',404);
    })
})