describe('Execute a parametrized delay request max 3 seconds. ', () => {
    it('excecutes a delayed API response', () => {
  
  /* AI helped me with the understanding of let start and the implementation of 
  cy.window */
    let start;

   cy.window().then((win ) => {
    start = win.performance.now();
   })
   
        
     /* Attached the date.now to the start */
        cy.request('GET', 'https://reqres.in/api/users?delay=3',
        ).then ((response) => {
            /* Attach the date now to an end constant */
            cy.window().then((win) => { 
            const end = win.performance.now();
            const duration = end - start;
            /* Validating that the response is a 200 */
            expect(response.status).to.equal(200);
            /* AI helped with this implementation of 3100 because I kept using 3000
            Now my expected duration should be below 3000 */
            expect(parseFloat(duration)).to.be.lessThan(3300);

            cy.log(`Duration: ${parseFloat(duration).toFixed(2)}ms`);
        })

        })
    })
})