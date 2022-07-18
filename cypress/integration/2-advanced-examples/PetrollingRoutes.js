/// <reference types="Cypress" />

import GuardprofilePage from '../../support/pageObjects/GuardprofilePage';

import PetrollingRoutesPage from '../../support/pageObjects/PetrollingRoutesPage';

describe('PetrollinPoints fuctionality', function(){

    const guardPage = new GuardprofilePage();

    const petrollingRoutesPage = new PetrollingRoutesPage()

    beforeEach(function() {

        cy.fixture('example').then(function(data){

           this.data = data
        })
        

      })



    it('PetrollinPoints', function(){

      cy.login(this.data.email, this.data.password);

      guardPage.getStaff().click()

      cy.wait(2000)
        
      petrollingRoutesPage.getPetrollinRoutesTab().click()

      petrollingRoutesPage.getSearch().type('test',{force: true})

      cy.wait(2000)

      petrollingRoutesPage.getSearch().clear()

      cy.wait(2000)

      petrollingRoutesPage.getAddButton().click({force: true})

      petrollingRoutesPage.getRouteName().type('test',{force: true})

      petrollingRoutesPage.getTime().each(($ele, index) => {
        if (index === 0){

             //Do something with the third element
             cy.wrap($ele).click().type('10:20:00', {force:true})
        }else{
            cy.wrap($ele).click().type('22:20:00', {force:true})

        }
           
      })

      petrollingRoutesPage.getRouteFrequency().click();

      cy.wait(2000)

      petrollingRoutesPage.getRouteFrequencyValue().contains('20 Minutes').click({force: true})

      petrollingRoutesPage.getRouteDuration().click()

      cy.wait(2000)

      petrollingRoutesPage.getRouteDurationValue().each(($e1, index, $list) =>{
       
        if($e1.text().trim(' ') ==='30 Minutes'){

            cy.wrap($e1).click({force: true})
        }
    })

      petrollingRoutesPage.getAssignCheckPoints().click({force:true})

      petrollingRoutesPage.getSubmit().click()


    });

});