context('Sauce_Demo_UI_Test', () => {
    beforeEach(() => {
        cy.visit('https://www.saucedemo.com/')
    })



    // I am failing to login here
    describe('Failed Login Attempt', () => {
        it('should have a failed login attempt', () => {
            /**Select the username entry. Fill in the user name */
            cy.get('[data-test="username"]').should('be.visible').type('standard_user');

            /**Select the password entry. Fill in the password */
            cy.get('[data-test="password"]').should('be.visible').type('secret_sce');

            /**Get the login button and click on it */
            cy.get('[data-test="login-button"]').should('be.visible').click();

            /**Validate that the test if visible */
            cy.get('[data-test="error"]').should('be.visible');



        })
    })

})

