/// <reference types="Cypress" />

import GuardprofilePage from '../../support/pageObjects/GuardprofilePage';

import GuardLoginPage from '../../support/pageObjects/GuardLoginPage'


describe('Guard login fuctionality', function(){

    const guardPage = new GuardprofilePage()

    const guardLogin = new GuardLoginPage()
    
    
    beforeEach(function() {

        cy.fixture('example').then(function(data){

           this.data = data
        })
        

      })



    it('Guard Login', function(){

      cy.login(this.data.email, this.data.password);

      guardPage.getStaff().click()

      guardLogin.getGuardLogin().click()


      guardLogin.getSearch().type('test',{force: true});

      guardLogin.getSearchText().should('have.text', 'test')

      guardLogin.getSearch().clear()

      guardLogin.getAppLogin().click()

     guardLogin.getSelectGuard().click()

     guardLogin.getSelectGuardName().click()

     guardLogin.getGateNumber().type('10',{force: true})

     guardLogin.getUseName().type('surajnew2')

     guardLogin.getPassword().type('suraaaaa')

     guardLogin.getSubmit().click()

     cy.wait(2000)

     guardLogin.getDeleteUser().click({force: true})

     guardLogin.geConfirmDelete().click()

      
    });

    it('Guard Login with invalid username', function(){

      cy.login(this.data.email, this.data.password);

      guardPage.getStaff().click()

      guardLogin.getGuardLogin().click()


      guardLogin.getSearch().type('test',{force: true});

      guardLogin.getSearchText().should('have.text', 'test')

      guardLogin.getSearch().clear()

      guardLogin.getAppLogin().click()

     guardLogin.getSelectGuard().click()

     guardLogin.getSelectGuardName().click()

     guardLogin.getGateNumber().type('112',{force: true})

     guardLogin.getUseName().type('.......')

     guardLogin.getPassword().type('suraj123')

     guardLogin.getSubmit().click()


      
    });

    it('Guard Login with invalid password', function(){

      cy.login(this.data.email, this.data.password);

      guardPage.getStaff().click()

      guardLogin.getGuardLogin().click()


      guardLogin.getSearch().type('test',{force: true});

      guardLogin.getSearchText().should('have.text', 'test')

      guardLogin.getSearch().clear()

      guardLogin.getAppLogin().click()

     guardLogin.getSelectGuard().click()

     guardLogin.getSelectGuardName().click()

     guardLogin.getGateNumber().type('112',{force: true})

     guardLogin.getUseName().type('suraj')

     guardLogin.getPassword().type('ab')

     guardLogin.getSubmit().click()


      
    });


    })

    
    


   

