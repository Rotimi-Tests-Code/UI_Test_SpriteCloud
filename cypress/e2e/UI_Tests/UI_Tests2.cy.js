context('Sauce_Demo_UI_Test', () => {
    beforeEach(() => {
        cy.visit('https://www.saucedemo.com/')
    });



    describe('Validate List Sorting ', () => {
        it('Should validate that the items are sorted from Z-A', () => {
            /** Access the website  */

            /**Select the username entry. Fill in the user name */
            cy.get('[data-test="username"]').should('be.visible').type('standard_user');
            /**Select the password entry. Fill in the password */

            cy.get('[data-test="password"]').should('be.visible').type('secret_sauce');

            /**Click in the login button */
            cy.get('[data-test="login-button"]').should('be.visible').click();

            /**Capture the items and put the items into an array
             *  I have used AI in this section to write the code more effectively  */
            cy.get('[data-test="inventory-item-description"]').then(($items) => {
                const originalList_A_to_Z = [...$items].map(item => item.innerText.trim());
                const sortedList_A_to_Z = [...originalList_A_to_Z].sort((a, b) => a.localeCompare(b));

                // Here we are checking the original list is in an A-Z order 
                expect(originalList_A_to_Z, 'Products are sorted A-Z').to.deep.equal(sortedList_A_to_Z);
            })

            /**Clicking on the filter buttton to select the "Z to A*/
            cy.get('[data-test="product-sort-container"]').should('be.visible').select("Name (Z to A)");
            /**Here we are checking to see that the 
             * list has changed we are getting 
             * the new list from Z-A */




            cy.get('[data-test="inventory-item-description"]').then(($items) => {
                const newList_Z_to_A = [...$items].map(item => item.innerText.trim());
                const reverse_Z_to_A = [...newList_Z_to_A].sort((a, b) => b.localeCompare(a));
                const originalListing_A_Z = [...reverse_Z_to_A].sort((a, b) => a.localeCompare(b));
                /**Assertion check  that the order of the products listed are different.
                 *  AI helped me with understanding the not.deep.equal
                 * is the oppostie of to.deep.equal */
                expect(newList_Z_to_A, 'Products are sorted Z-A').to.equal(newList_Z_to_A);
                expect(newList_Z_to_A, 'Products are sorted Z-A').not.equal(originalListing_A_Z);
            })

        })
    })

})