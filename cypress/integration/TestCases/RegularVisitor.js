/// <reference types="Cypress" />

import GuardprofilePage from '../../support/pageObjects/GuardprofilePage';

import RegularVisitorPage from '../../support/pageObjects/RegularVisitorPage';

describe('Regular Visitor fuctionality', function(){

    const guardPage = new GuardprofilePage()
    const regularVisitorPage = new RegularVisitorPage()
    
    
    beforeEach(function() {

        cy.fixture('example').then(function(data){

           this.data = data
        })
        

      })



    it('Regular Visitor', function(){

      cy.login(this.data.email, this.data.password);

      guardPage.getStaff().click()

      cy.wait(2000)

      regularVisitorPage.getRegularVisitorTab().click()

      cy.wait(2000)

      //type test in search box
      regularVisitorPage.getSearch().type('test', {force: true})

      cy.wait(2000)
      
      regularVisitorPage.getVisitorsDetails().click({force: true})

      cy.wait(2000)

      regularVisitorPage.getCloseVisitorsDetails().click()

      cy.wait(2000)

      //clear the search box after getting the results
      regularVisitorPage.getSearch().clear({force: true})

      cy.wait(2000)

      regularVisitorPage.getFilterButton().click({force: true})

      cy.wait(2000)

      //type verification code in search box
      regularVisitorPage.getFilterSearch().type('842184',{force: true})

      cy.wait(2000)

      regularVisitorPage.getFilter().click({force: true})

      cy.wait(2000)

      regularVisitorPage.getFilterButton().click({force: true})

      cy.wait(2000)

      regularVisitorPage.getFilterButton().click({force: true})

      regularVisitorPage.getFilterSearch().clear({force: true})

      cy.wait(2000)

      regularVisitorPage.getFilter().click()

      cy.wait(2000)


      regularVisitorPage.getFilterCategory().click({force: true})

      cy.wait(2000)

      regularVisitorPage.getFilterCategoryFilter().contains('Driver').click({force: true})


      regularVisitorPage.getFilter().click({force: true})



      
    });


    it('Regular Visitor with negative values', function(){

      
      cy.login(this.data.email, this.data.password);

      guardPage.getStaff().click()

      cy.wait(2000)

      regularVisitorPage.getRegularVisitorTab().click()

      cy.wait(2000)

      //type test in search box
      regularVisitorPage.getSearch().type('..0.0', {force: true})

      cy.wait(2000)
      

      //clear the search box after getting the results
      regularVisitorPage.getSearch().clear()

      cy.wait(2000)

      regularVisitorPage.getFilterButton().click({force: true})

      cy.wait(2000)

      //type verification code in search box
      regularVisitorPage.getFilterSearch().type('xoxo',{force: true})

      cy.wait(2000)

      regularVisitorPage.getFilter().click({force: true})

      cy.wait(2000)

      regularVisitorPage.getFilterButton().click({force: true})

      cy.wait(2000)

      regularVisitorPage.getFilterButton().click({force: true})

      regularVisitorPage.getFilterSearch().clear({force: true})

      cy.wait(2000)

      regularVisitorPage.getFilter().click()

      


      
    });

})