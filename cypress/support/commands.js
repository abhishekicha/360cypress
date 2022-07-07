// ***********************************************
import LoginPage from '../support/pageObjects/LoginPage'

const loginPage = new LoginPage()


// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
 Cypress.Commands.add('login', (email, password) => { 

    loginPage.getException();

    cy.visit('https://adminfontend.the360.in/')


    loginPage.getEmail().type(email).invoke('attr', 'placeholder').should('contain', 'Email address')

    loginPage.getPassword().type(password).invoke('attr', 'placeholder').should('contain', 'Password')
   
    loginPage.getSubmitButton().should('be.visible')
    loginPage.getSubmitButton().click()

    
    loginPage.getAlert().then($body => {
        if ($body.length > 0) {   
            //evaluates as true
            cy.wrap($body).click()
        }
    });


    loginPage.getLaunchDevServer().should('contain', 'Launch')

    loginPage.getLaunchDevServer().click()

  })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
