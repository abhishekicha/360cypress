/// <reference types="Cypress" />


import GuardprofilePage from '../../support/pageObjects/GuardprofilePage'

describe('360 login fuctionality', function(){

    
    
    beforeEach(function() {

        cy.fixture('example').then(function(data){

           this.data = data
        })
        

      })

      const guardPage = new GuardprofilePage()


    it('Guard Profile', function(){

      cy.login(this.data.email, this.data.password);

       guardPage.getStaff().click()

       guardPage.getGuard().click()

       guardPage.getSearch().type('test', {force: true})
       
       guardPage.getAddGuardsButton().click({force: true})

       guardPage.getFirstName().type('raj2')
       
       guardPage.getLastName().type('test2')

       guardPage.getPhone().type('0082')

       guardPage.getSubmit().click()

       guardPage.getSearch().clear({force: true})

       guardPage.getRearrangeButton().click({force: true})


       guardPage.getGuardNameRemoveBtn().click({force: true})


       guardPage.getGuardNameSubmit().click()

       guardPage.getRearrangeButton().wait(1000).should('be.visible').click({force: true})
      
       guardPage.getGuardNameVisible().click({force: true})

       guardPage.getGuardNameSubmit().click({force: true} )


    })

    
    })


   

