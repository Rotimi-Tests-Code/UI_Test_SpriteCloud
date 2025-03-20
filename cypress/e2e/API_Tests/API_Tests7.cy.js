describe('Execute a parametrized delay request max 3 seconds. ', () => {
    it('excecutes a delayed API response', () => {
    /* AI helped me understand the consept of Date.now.
     I implemented this porition of the code myself  */
     /* Attached the date.now to the start */
        const start = Date.now();
        cy.request('GET', 'https://reqres.in/api/users?delay=3',
        ).then ((response) => {
            /* Attach the date now to an end constant */
            const end = Date.now();
            const duration = end - start;
            /* Validating that the response is a 200 */
            expect(response.status).to.equal(200);
            /* AI helped with this implementation of 3100 because I kept using 3000
            Now my expected duration should be below 3000 */
            expect(duration).to.be.lessThan(3100);

        })
    })
})