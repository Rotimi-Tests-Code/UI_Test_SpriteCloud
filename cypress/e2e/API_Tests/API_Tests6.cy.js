//Used AI to support

describe('Perform an unsuccessful login',() => {
    it('performs a login with the an incomplete email and without the password',() => {
        cy.request({
            method: 'POST', 
            url: 'https:reqres.in/api/login',
            body: { email: 'peter@klaven'},
            failOnStatusCode: false
        }).then ((response) => {
            /* Validating the response to fail and give a 400*/
            expect(response.status).to.equal(400);
            /* Attaching the response body to a constant */
            const missing = response.body; 
            /* Validating that the error is there */
            expect(missing).to.deep.include({
                error:  "Missing password"
            });
        })
    });
});

// My old code
/**describe('Perform an unsuccessful login', () => {
    it('performs a login with the an incomplete email and without the password', () => {
      cy.request('POST', 'https://reqres.in/api/login',
        { "email": "peter@klaven" }
      ).its('status').should('equal', 400);
    });
  });
  */