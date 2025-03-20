
describe('Perform a user is not found',() => {
    it('shows a scenario where a single user is not found',() => {
        /* Sending a request asking the script fail. */
        cy.request(
            {method: 'GET', 
            url: 'https:reqres.in/api/users/23',
            failOnStatusCode: false}

    /* Validating that the status should be a 404 */
        ) .then ((response) => {
            /* Validating the response to fail*/
            expect(response.status).to.equal(404);
        })
    });
});








