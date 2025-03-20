describe('Perform a successful update',() => {
    it('performs and update with the given name and job',() => {
        /* Put request with the given name and job */
        cy.request('PUT', 'https://reqres.in/api/users/2',
            { name: "morpheus" , job: "zion resident"})
        .then ((response) => {
            /* Validating that the response is a 200 */
            expect(response.status).to.equal(200);
        /* Giving the response.body */
            const resident = response.body;
            /* Validating that the resident includes the name and the job */
            expect(resident).to.deep.include({
                name: "morpheus" , 
                job: "zion resident"  
            });
            /* Asserting that the update at exists as well */
            expect(resident).to.have.property('updatedAt');
         
        })
    })
})