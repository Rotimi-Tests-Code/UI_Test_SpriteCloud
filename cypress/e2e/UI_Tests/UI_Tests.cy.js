context('Sauce_Demo_UI_Test', () => {

})

// I am failing to login here
describe('Failed Login Attempt', () => {
    it('should have a failed login attempt', () => {
        cy.visit('https://www.saucedemo.com/');
        /**Select the username entry. Fill in the user name */
        cy.get('[data-test="username"]').should('be.visible').type('standard_user');
            cy.wait(4000);
         /**Select the password entry. Fill in the password */
            cy.get('[data-test="password"]').should('be.visible').type('secret_sce');
            cy.wait(4000);
        /**Get the login button and click on it */
            cy.get('[data-test="login-button"]').should('be.visible').click();
            cy.wait(4000);
            /**Validate that the test if visible */
            cy.get('[data-test="error"]').should('be.visible');
            cy.wait(4000);


    })

    describe('Validate List Sorting ', () => {
        it('Should validate that the items are sorted from Z-A', () => {
            /** Access the website  */
            cy.visit('https://www.saucedemo.com/');
            cy.wait(4000);
            /**Select the username entry. Fill in the user name */
            cy.get('[data-test="username"]').should('be.visible').type('standard_user');
            /**Select the password entry. Fill in the password */
            cy.wait(4000);
            cy.get('[data-test="password"]').should('be.visible').type('secret_sauce');
            cy.wait(4000);
            /**Click in the login button */
            cy.get('[data-test="login-button"]').should('be.visible').click();
            cy.wait(4000);
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
            cy.wait(4000);



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

        describe('Checkout with the correct final product', () => {
            it('Should validate that the final price is correct', () => {
                cy.visit('https://www.saucedemo.com/');
                cy.wait(4000);
                /**Select the username entry. Fill in the user name */
                cy.get('[data-test="username"]').should('be.visible').type('standard_user');
                /**Select the password entry. Fill in the password */
                cy.wait(4000);
                cy.get('[data-test="password"]').should('be.visible').type('secret_sauce');
                cy.wait(4000);
                /**Click in the login button */
                cy.get('[data-test="login-button"]').should('be.visible').click();
                cy.wait(4000);
                /**Assert that add to cart button for suace labs backpack exists.
                 * Click on it 
                 */
                cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').should('be.visible').click();
                cy.wait(4000);
                /**Assert that add to cart button for suace labs bike light exists.
                * Click on it 
                */
                cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]').should('be.visible').click();
                cy.wait(4000);
                /**Assert that shopping cart button exists.
                * Click on it 
                */
                cy.get('[data-test="shopping-cart-link"]').should('be.visible').click();
                cy.wait(4000);
                /**Assert that checkout button exists.
                  * Click on it 
                  */
                cy.get('[data-test="checkout"]').should('be.visible').click();
                cy.wait(4000);
                /**Assert that the first name text box exists.
                * Type in John 
                */
                cy.get('[data-test="firstName"]').should('be.visible').type("John");
                cy.wait(4000);
                /**Assert that the last name text box exists.
                * Type in Gardner
                */
                cy.get('[data-test="lastName"]').should('be.visible').type("Gardner");
                cy.wait(4000);
                /**Assert that the postal code text boc exists 
                 * Type in 5431FK
                 */
                cy.get('[data-test="postalCode"]').should('be.visible').type("5431FK");
                cy.wait(4000);

                /**Assert that the continue button exists.
                * Click on it 
                */
                cy.get('[data-test="continue"]').should('be.visible').click();
                cy.wait(4000);

                /**Get the Item Prices  */

                cy.get('[data-test="inventory-item-price"]').then(($prices) => {
                    const itemPrices = [...$prices].map(item =>
                        parseFloat(item.innerText.replace('$', '').trim())
                    );
                    cy.wait(4000);

                    /**Get the sum of both prices  */

                    const totalPrice = itemPrices.reduce((sum, price) => sum + price, 0);
                    cy.wait(4000);


                    /**Get the displayed sub total */

                    cy.get('[data-test="subtotal-label"]').invoke('text').then((text) => {
                        /** Turn the text to a float format
                         * This line below was Generated by AI */
                        const displayedSubTotal = parseFloat(text.replace(/[^0-9.]/g, ''));
                        /**Verify that the total price without tax
                         * matches the subtotal
                          */
                        expect(totalPrice).to.equal(displayedSubTotal);
                        cy.wait(4000);
                    })


                    /** Get hte tax label and parse it as a float  */
                    cy.get('[data-test="tax-label"]').invoke('text').then((text) => {
                        /**Pass it as a float */
                        const taxPrice = parseFloat(text.replace(/[^0-9.]/g, ''));
                        /**Get the total price with tax using 
                         * the total price without tax + the tax price
                         */
                        const totalPriceWithTax = totalPrice + taxPrice;
                        cy.wait(4000);

                        /**Get the total cost with the tax label */
                        cy.get('[data-test="total-label"]').invoke('text').then((text) => {
                            /** Pass the text as a float */
                            /** This line below was Generated by AI */
                            const displayedTotal = parseFloat(text.replace(/[^0-9.]/g, ''));
                            /**Validate that the total price with tax matches 
                             * what is displayed 
                             */
                            expect(totalPriceWithTax).to.equal(displayedTotal);
                            cy.wait(4000);

                            /** Select the finish button */
                            cy.get('[data-test="finish"]').should('be.visible').click();
                            cy.wait(4000)

                            /** Select the "Back Home" button */
                            cy.get('[data-test="back-to-products"]').should("be.visible").click();
                            cy.wait(4000)

                        })

                    })

                })



            })




        })

    })
})