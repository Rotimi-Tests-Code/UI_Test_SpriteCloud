describe('Perform a successful login',() => {
    it('performs a login with the given email and password',() => {

        /* Sent the post request along with the email and password */
        cy.request('POST', 'https://reqres.in/api/login', 
            { email: "eve.holt@reqres.in", password: "cityslicka"})
        .then ((response) => {
            /* Sent the response to equal 200 */
            expect(response.status).to.equal(200);

            // Used AI to help me understand why to use token instead of data 
            /* Labelled the token as a constant and console logged a response */
            const token = response.body.token;
            console.log('The Given Token ' + token); 

            /* Confirm that the token equals the the token visible on the reqres login page */
            expect(token).equal("QpwL5tke4Pnpja7X4");
        })
    })
})