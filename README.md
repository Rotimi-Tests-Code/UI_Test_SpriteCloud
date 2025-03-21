# UI_&_API_Test_SpriteCloud

## Description: 
This project contains 3 sets of UI Tests and 7 set of API Tests. 

The UI Tests were written for Sauce Demo.
Sauce Demo is a web application for buying wearbles eg. clothes, shoes etc.
 The features that were tested are listed in the feature column below. 

Here is the link to the Sauce Demo Website: https://www.saucedemo.com/

The API Tests were writen for reqes. It's a platform where you can test your from end 
against real API. The features that were tested are listed in the feature column below. 

Here is the link to the Reqes website: https://reqres.in/

## Table of Contents 
 - Installation 
 - Usage 
 - Features
 - Tecnlogies Used 
 - Contributing 
 - License 
 - Reference
 - Contact


 ## Cloning the project
 - git clone https://github.com/Rotimi-Tests-Code/UI_Test_SpriteCloud.git
 - cd UI_Test_SpriteCloud 
 - npm install
 - npm start


 ## Installations 
 - Install Cypress : npm install cypress --save dev
 - Running Cypress on the GUI: npx cypress open 
 - Running Cypress on the terminal: npx cypress run
 - Running Cypress for a specific test file on the terminal: npx cypress run C:\Users\UI_tests.cy.js

## Features
- UI Test Cases 
1. UI_Tests Test case to write a full check out that contains at least, two items and validates the final price 
2. UI_Tests2 Test case that sorts the items by name Z-A and validate that the sorting is correct 
3. UI_Tests3 Test cases to write a validation for a failed login

- API Test Cases
1. API_Tests Test to retrieve a list of users
2. API_Tests_2 Test to perform a successful login
3. API_Tests_3 Test to perform an update
4. API_Tests_4 Test to perform a deletion
5. API_Tests_5 Test to execute Perform a user is not found
6. API_Tests_6 Test to perform an unsuccessful login
7. API_Tests_7 Execute a parameterized delayed request (max 3 seconds) and evaluate how long the request takes.

## Technologies Used 
- Javascript 
- Cypress 
- Node.js 

## Contributions
- Contributions are welcome!

# References 

- Browser Stack Guide: https://www.browserstack.com/guide/cypress-api-testing
- Reqes: https://reqres.in/
- Sauce Demo: https://www.saucedemo.com
- Test Grid: https://testgrid.io/blog/cypress-api-testing/



## License 
© 2025 Rotimi Adegoju 

## Contact Credits 
Made by Rotimi Adegoju 
