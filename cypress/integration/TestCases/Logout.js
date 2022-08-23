/// <reference types="Cypress" />

import LogoutPage from '../../support/pageObjects/LogoutPage';

describe('Logout fuctionality', function(){

    const logoutPage = new LogoutPage();

    
    beforeEach(function() {

        cy.fixture('example').then(function(data){

           this.data = data

           cy.login(this.data.email, this.data.password);

        })
        

      })

      it('Logout', function(){  

        logoutPage.getProfile().eq(1).click({force: true})
        
        cy.wait(2000);

        logoutPage.getLogout().click({force: true})

        cy.wait(2000)

    });

});