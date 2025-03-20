describe('Perform a Deletion', () => {
    it('performs a required deletion', () => {
    cy.request('DELETE', 'https://reqres.in/api/users/2',
    ).its('status').should('equal',204);
})
})