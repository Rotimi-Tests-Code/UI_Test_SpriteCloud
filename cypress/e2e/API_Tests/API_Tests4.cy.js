describe('Perform a Deletion', () => {
    it('performs a required deletion', () => {
        /* Performing a Delete request */
    cy.request('DELETE', 'https://reqres.in/api/users/2')
    .then ((response) => {
        /* Validating the response */
        expect(response.status).to.equal(204);
        /* passing the response.body as a constant  */
        const deletedUser = response.body; 
        /* Validate the field is empty */
        expect(deletedUser).to.be.empty;
    })
})
})