/// <reference types="Cypress" />

import ComplainsPage from '../../support/pageObjects/ComplainsPage';

import AdvertisementPage from '../../support/pageObjects/AdvertisementPage';


describe('Advertisement fuctionality', function(){

    const complainsPage = new ComplainsPage();

    const advertisementPage = new AdvertisementPage();


    
    beforeEach(function() {

        cy.fixture('example').then(function(data){

           this.data = data
        })
        

      })

    it('Advertisement Search', function(){

        cy.login(this.data.email, this.data.password);
  
        complainsPage.getManageMent().click()
  
        cy.wait(2000);

        advertisementPage.getAdvertisement().click()

        cy.wait(2000)

        advertisementPage.getSearch().type('Test', {force: true})

        cy.wait(2000)

        advertisementPage.getVerifySearchResult().should('contain', 'Test')

        cy.wait(2000)

        advertisementPage.getSearch().clear()

    });

    it('Set Order', function(){

      cy.login(this.data.email, this.data.password);

      complainsPage.getManageMent().click()

      cy.wait(2000);

      advertisementPage.getAdvertisement().click()

      cy.wait(2000)

      advertisementPage.getSetOrder().click({force: true})

      cy.wait(2000)

      advertisementPage.getFirstElementToDrop().drag(advertisementPage.getDropPlace())

      cy.wait(2000)

      advertisementPage.getSubmit().click()

  });

  it('Add New Advertisement', function(){

    cy.login(this.data.email, this.data.password);

    const p = 'download.png'


    complainsPage.getManageMent().click()

    cy.wait(2000);

    advertisementPage.getAdvertisement().click()

    cy.wait(2000)

    advertisementPage.getAddNewAddNewAdvertisement().click({force: true})

    cy.wait(2000)

    advertisementPage.getAdvertisementTitle().eq(1).type('TestNew')

    cy.wait(2000)

    advertisementPage.getImage().attachFile(p, 
      {
          subjectType: 'drag-n-drop', events: ['dragenter', 'drop']
      })

    cy.wait(2000)

    advertisementPage.getCropImageButton().click({force: true})

    cy.wait(2000)

    advertisementPage.getCroppedImageSubmit().click({force: true})

    cy.wait(2000)

    advertisementPage.getSubmitAdvertisement().click({force: true})

    cy.wait(2000)


});



});