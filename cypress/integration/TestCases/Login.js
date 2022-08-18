/// <reference types="Cypress" />

import LoginPage from '../../support/pageObjects/LoginPage'

describe('360 login fuctionality', function(){

    
    
    beforeEach(function() {

        cy.fixture('example').then(function(data){

           this.data = data
        })
        

      })

      const loginPage = new LoginPage()


    it('Login to 360dev server', function(){


        loginPage.getException();

       cy.visit('https://adminfontend.the360.in/')


       loginPage.getEmail().type(this.data.email).invoke('attr', 'type').should('contain', 'email')

       loginPage.getPassword().type(this.data.password).invoke('attr', 'type').should('contain', 'password')

       loginPage.getSubmitButton().should('be.visible')

       loginPage.getSubmitButton().click()

       //if alert exists then only click function
       loginPage.getAlert().then($body => {
        if ($body.length > 0) {   
            //evaluates as true
            cy.wrap($body).click()
        }
    });

       loginPage.getLaunchDevServer().should('contain', 'Launch')

       loginPage.getLaunchDevServer().click()

    })

    it('Login to 360dev server with wrong email ', function(){
        const loginPage = new LoginPage()


        loginPage.getException();

       cy.visit('https://adminfontend.the360.in/')


       loginPage.getEmail().type('abhi@yopmail.com').invoke('attr', 'type').should('contain', 'email')

       loginPage.getPassword().type(this.data.password).invoke('attr', 'type').should('contain', 'password')
      
       loginPage.getSubmitButton().should('be.visible')
       loginPage.getSubmitButton().click()


    })

    it('Login to 360dev server wrong password', function(){


        loginPage.getException();

       cy.visit('https://adminfontend.the360.in/')


       loginPage.getEmail().type(this.data.email)
       loginPage.getPassword().type('56888')
      
       loginPage.getSubmitButton().should('be.visible')
       loginPage.getSubmitButton().click()


    })
    //Login without Credential

    it('Login to 360dev server without any credential', function(){


        loginPage.getException();

       cy.visit('https://adminfontend.the360.in/')
 
       loginPage.getSubmitButton().click()

    })


   

})