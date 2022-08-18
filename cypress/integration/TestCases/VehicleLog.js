/// <reference types="Cypress" />

import RegularVisitorsLogPage from '../../support/pageObjects/RegularVisitorsLogPage';

import VehicleLogPage from '../../support/pageObjects/VehicleLogPage';


describe('Vehicle Log fuctionality', function(){


    const regularVisitorsLogPage = new RegularVisitorsLogPage();

    const vehicleLogPage = new VehicleLogPage();


    
    beforeEach(function() {

        cy.fixture('example').then(function(data){

           this.data = data
        })
        

      })

      it('Vehicle Logs', function(){

        cy.login(this.data.email, this.data.password);
  
        regularVisitorsLogPage.getLogs().click()
  
        cy.wait(2000);

        vehicleLogPage.getVehicleLogs().click()

        cy.wait(2000)

        vehicleLogPage.getFilter().click();

        cy.wait(2000)

        vehicleLogPage.getDate().each(($ele, index) => {
            if (index === 0) {

                cy.wrap($ele).click().type('2022-01-05', { force: true })


            } else {

                cy.wrap($ele).click().type('2022-07-25', { force: true })

            }

        })

        cy.wait(2000)

        vehicleLogPage.getFilterSubmit().click({force: true});

        cy.wait(2000)

        vehicleLogPage.getSearch().type('ola',{force: true});

        cy.wait(2000)

        vehicleLogPage.getVerifySearch().should('have.text', 'OLA')

        cy.wait(2000)

        vehicleLogPage.getGenerateReport().eq(1).click({force: true});
       
        cy.wait(2000)

        vehicleLogPage.getFilterSubmit().click({force: true});

        cy.wait(2000)

        vehicleLogPage.getReset().click({force: true})
     
        cy.wait(2000)


    });

    it('Vehicle Logs With Negative Values', function(){

        cy.login(this.data.email, this.data.password);
  
        regularVisitorsLogPage.getLogs().click()
  
        cy.wait(2000);

        vehicleLogPage.getVehicleLogs().click()

        cy.wait(2000)

        vehicleLogPage.getFilter().click();

        cy.wait(2000)

        vehicleLogPage.getDate().each(($ele, index) => {
            if (index === 0) {

                cy.wrap($ele).click().type('2029-01-05', { force: true })


            } else {

                cy.wrap($ele).click().type('2042-07-25', { force: true })

            }

        })

        cy.wait(2000)

        vehicleLogPage.getValidateResultText().should('have.text', 'There are no records to show')

        vehicleLogPage.getFilterSubmit().click();

        cy.wait(2000)

        vehicleLogPage.getSearch().type('....',{force: true});
       
        cy.wait(2000)

        vehicleLogPage.getValidateResultText().should('have.text', 'There are no records to show')

        cy.wait(2000)

        vehicleLogPage.getGenerateReport().eq(1).click({force: true})
        
        cy.wait(2000)

        vehicleLogPage.getFilterSubmit().click({force: true});

        cy.wait(2000)

        vehicleLogPage.getReset().click({force: true})

        cy.wait(2000)

    });


});