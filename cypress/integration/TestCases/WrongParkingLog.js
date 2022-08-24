/// <reference types="Cypress" />

import WrongParkingLogPage from '../../support/pageObjects/WrongParkingLogPage';

import RegularVisitorsLogPage from '../../support/pageObjects/RegularVisitorsLogPage';


describe('Wrong Parking Logs fuctionality', function(){

    const wrongParkingLogPage = new WrongParkingLogPage();

    const regularVisitorsLogPage = new RegularVisitorsLogPage();


    
    beforeEach(function() {

        cy.fixture('example').then(function(data){

           this.data = data

           cy.login(this.data.email, this.data.password);

        })
        

      })



      it('Wrong Parking Logs', function(){
  
        regularVisitorsLogPage.getLogs().click()
  
        cy.wait(2000);

        wrongParkingLogPage.getWrongParkingLog().click({force: true})

        cy.wait(2000);

        //filter functionality

        wrongParkingLogPage.getFilter().click()

        cy.wait(2000);

        const dayjs = require('dayjs')

        //In test
        cy.log(dayjs().format('MM/DD/YYYY')) 
        
       wrongParkingLogPage.getDate().invoke('val').then((text) => {
        expect(dayjs().format('YYYY-MM-DD')).to.equal(text);
    });
       
        wrongParkingLogPage.getDate().each(($ele, index) => {
            if (index === 0) {
      
              cy.wrap($ele).click().type('2022-08-10', { force: true })
      
            } else {
      
              cy.wrap($ele).click().type('2022-08-23', { force: true })
      
            }
      
          })
      

          wrongParkingLogPage.getFilterSubmit().click({force: true})

          cy.wait(2000)


      //search functionality

       wrongParkingLogPage.getSearch().type('7890', {force: true})

        cy.wait(2000);

        wrongParkingLogPage.getVerifySearch().should('contain', '7890' )

        cy.wait(2000);

        wrongParkingLogPage.getSearch().clear()

        cy.wait(2000);

        wrongParkingLogPage.getSearch().type('VISITOR')

        cy.wait(2000);

        wrongParkingLogPage.getVerifyVehicleOwnerType().should('contain', 'VISITOR')

        cy.wait(2000);

        wrongParkingLogPage.getSearch().clear()

        cy.wait(2000);

        wrongParkingLogPage.getSearch().type('RESIDENT')

        cy.wait(2000);

        wrongParkingLogPage.getVerifyVehicleOwnerType().should('contain', 'RESIDENT')

        cy.wait(2000);

        wrongParkingLogPage.getSearch().clear()

        cy.wait(2000);


        // Filter Reset

         wrongParkingLogPage.getFilter().click()

          cy.wait(2000)

          wrongParkingLogPage.getFilterReset().click({force: true})

          cy.wait(2000)

          //Todays date should appear after reset
          
          wrongParkingLogPage.getDate().invoke('val').then((text) => {

            expect(dayjs().format('YYYY-MM-DD')).to.equal(text);
        });
    });

});