describe('Retrieve a list of users',() => {
    it('Gets the list of users',() => {

        cy.request('GET', 'https://reqres.in/api/users?page=2')
        .then ((response) => {
            expect(response.status).to.equal(200);

        const users = response.body.data;
        cy.log(JSON.stringify(users));
        console.log('User List:', users)
      
        expect(users).to.deep.include({
            id: 7,
            email: "michael.lawson@reqres.in",
            first_name: "Michael",
            last_name: "Lawson",
            avatar: "https://reqres.in/img/faces/7-image.jpg"
        });

    });
        
    });
});