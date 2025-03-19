
context('Sauce_Demo_UI_Test', () => {
    beforeEach(() => {
        cy.visit('https://www.saucedemo.com/')
    });



    //This Test is performed to validate that the final price is correct 

    describe('Checkout with the correct final price', () => {
        it('Should validate that the final price is correct', () => {
            /**Select the username entry. Fill in the user name */
            cy.get('[data-test="username"]').should('be.visible').type('standard_user');
            /**Select the password entry. Fill in the password */
            cy.get('[data-test="password"]').should('be.visible').type('secret_sauce');
            /**Click in the login button */
            cy.get('[data-test="login-button"]').should('be.visible').click();
            /**Assert that add to cart button for suace labs backpack exists.
             * Click on it 
             */
            cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').should('be.visible').click();
            /**Assert that add to cart button for suace labs bike light exists.
            * Click on it 
            */
            cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]').should('be.visible').click();
            /**Assert that shopping cart button exists.
            * Click on it 
            */
            cy.get('[data-test="shopping-cart-link"]').should('be.visible').click();
            /**Assert that checkout button exists.
              * Click on it 
              */
            cy.get('[data-test="checkout"]').should('be.visible').click();
            /**Assert that the first name text box exists.
            * Type in John 
            */
            cy.get('[data-test="firstName"]').should('be.visible').type("John");
            /**Assert that the last name text box exists.
            * Type in Gardner
            */
            cy.get('[data-test="lastName"]').should('be.visible').type("Gardner");
            /**Assert that the postal code text boc exists 
             * Type in 5431FK
             */
            cy.get('[data-test="postalCode"]').should('be.visible').type("5431FK");


            /**Assert that the continue button exists.
            * Click on it 
            */
            cy.get('[data-test="continue"]').should('be.visible').click();


            /**Get the Item Prices  */

            cy.get('[data-test="inventory-item-price"]').then(($prices) => {
                const itemPrices = [...$prices].map(item =>
                    parseFloat(item.innerText.replace('$', '').trim())
                );


                /**Get the sum of both prices  */

                const totalPrice = itemPrices.reduce((sum, price) => sum + price, 0);



                /**Get the displayed sub total */

                cy.get('[data-test="subtotal-label"]').invoke('text').then((text) => {
                    /** Turn the text to a float format
                     * This line below was Generated by AI */
                    const displayedSubTotal = parseFloat(text.replace(/[^0-9.]/g, ''));
                    /**Verify that the total price without tax
                     * matches the subtotal
                      */
                    expect(totalPrice).to.equal(displayedSubTotal);

                })


                /** Get hte tax label and parse it as a float  */
                cy.get('[data-test="tax-label"]').invoke('text').then((text) => {
                    /**Pass it as a float */
                    const taxPrice = parseFloat(text.replace(/[^0-9.]/g, ''));
                    /**Get the total price with tax using 
                     * the total price without tax + the tax price
                     */
                    const totalPriceWithTax = totalPrice + taxPrice;


                    /**Get the total cost with the tax label */
                    cy.get('[data-test="total-label"]').invoke('text').then((text) => {
                        /** Pass the text as a float */
                        /** This line below was Generated by AI */
                        const displayedTotal = parseFloat(text.replace(/[^0-9.]/g, ''));
                        /**Validate that the total price with tax matches 
                         * what is displayed 
                         */
                        expect(totalPriceWithTax).to.equal(displayedTotal);


                        /** Select the finish button */
                        cy.get('[data-test="finish"]').should('be.visible').click();


                        /** Select the "Back Home" button */
                        cy.get('[data-test="back-to-products"]').should("be.visible").click();


                    })

                })

            })



        })
    })
})
