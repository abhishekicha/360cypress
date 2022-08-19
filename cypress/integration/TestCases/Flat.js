/// <reference types="Cypress" />

import FlatOwnersPage from '../../support/pageObjects/FlatOwnersPage';

import Flatspage from '../../support/pageObjects/Flatspage';


describe('Flats fuctionality', function () {

  const flatOwnersPage = new FlatOwnersPage();

  const flatspage = new Flatspage();



  beforeEach(function () {

    cy.fixture('example').then(function (data) {

      this.data = data

      cy.login(this.data.email, this.data.password);

    })


  })

  it('Flats Functionality', function () {

    flatOwnersPage.getProperty().click()

    cy.wait(2000);

    flatspage.getFlats().click()

    cy.wait(2000)

    flatspage.getSearch().type('1A', { force: true })

    cy.wait(2000)

    flatspage.getVerifySearchResults().should('contain', '1A')

    cy.wait(2000)

    flatspage.getSearch().clear()

    cy.wait(2000)

    flatspage.getSearch().type('Aspen', { force: true })

    cy.wait(2000)

    flatspage.getVerifyFlatSearch().should('contain', 'Aspen')

    cy.wait(2000)

    flatspage.getSearch().clear()

    cy.wait(2000)

    flatspage.getCreateFlat().click({ force: true })

    cy.wait(2000)

    flatspage.getFlatNo().type('1L', { force: true })

    cy.wait(2000)

    flatspage.getAreaInSqFt().type('1000', { force: true })

    cy.wait(2000)

    flatspage.getSelectFlatOwner().click({ force: true })

    cy.wait(2000)

    flatspage.getSelectFlatOwnername().eq(3).click({ force: true })

    cy.wait(2000)

    flatspage.getSelectBlock().click({ force: true })

    cy.wait(2000)

    flatspage.getSelectBlockName().eq(21).click({ force: true })

    cy.wait(1000)

    flatspage.getSelectFloor().click({ force: true })

    cy.wait(2000)

    flatspage.getSelectExtensionNumber().type('101', { force: true })

    cy.wait(2000)

    flatspage.getSelectUnderMaintainanceBilling().check({ force: true })

    cy.wait(2000)

    flatspage.getSelectKey().type('Test Flat', { force: true })

    cy.wait(2000)

    flatspage.getSelectSave().click({ force: true })

    cy.wait(2000)

    //Flats Functionality With Negative Values

    flatspage.getSearch().type('..0..', { force: true })

    cy.wait(2000)

    flatspage.getSearch().clear()

    cy.wait(2000)

    flatspage.getSearch().type('..//', { force: true })

    cy.wait(2000)

    flatspage.getSearch().clear()

    cy.wait(2000)

    flatspage.getCreateFlat().click({ force: true })

    cy.wait(2000)

    flatspage.getFlatNo().type('..@#$%%^&*IO.*.', { force: true })

    cy.wait(2000)

    flatspage.getAreaInSqFt().type('...,,..', { force: true })

    cy.wait(2000)

    flatspage.getSelectFlatOwner().click({ force: true })

    cy.wait(2000)

    flatspage.getSelectFlatOwnername().eq(3).click({ force: true })

    cy.wait(2000)

    flatspage.getSelectBlock().click({ force: true })

    cy.wait(2000)

    flatspage.getSelectBlockName().eq(21).click({ force: true })

    cy.wait(1000)

    flatspage.getSelectFloor().click({ force: true })

    cy.wait(2000)

    flatspage.getSelectExtensionNumber().type('..0..', { force: true })

    cy.wait(2000)

    flatspage.getSelectUnderMaintainanceBilling().check({ force: true })

    cy.wait(2000)

    flatspage.getSelectKey().type('..**..', { force: true })

    cy.wait(2000)

    flatspage.getSelectSave().click({ force: true })

    cy.wait(2000)

    flatspage.getSearch().type('..0..', { force: true })

    cy.wait(2000)

    flatspage.getSearch().clear()

    cy.wait(2000)

    flatspage.getSearch().type('..//', { force: true })

    cy.wait(2000)

    flatspage.getSearch().clear()

    cy.wait(2000)

    flatspage.getCreateFlat().click({ force: true })

    cy.wait(2000)

    flatspage.getFlatNo().type('..0.*.', { force: true })

    cy.wait(2000)

    flatspage.getAreaInSqFt().type('...,,..', { force: true })

    cy.wait(2000)

    flatspage.getSelectFlatOwner().click({ force: true })

    cy.wait(2000)

    flatspage.getSelectFlatOwnername().eq(3).click({ force: true })

    cy.wait(2000)

    flatspage.getSelectBlock().click({ force: true })

    cy.wait(2000)

    flatspage.getSelectBlockName().eq(21).click({ force: true })

    cy.wait(1000)

    flatspage.getSelectFloor().click({ force: true })

    cy.wait(2000)

    flatspage.getSelectExtensionNumber().type('..0..', { force: true })

    cy.wait(2000)

    flatspage.getSelectUnderMaintainanceBilling().check({ force: true })

    cy.wait(2000)

    flatspage.getSelectKey().type('..**..', { force: true })

    cy.wait(2000)

    flatspage.getSelectSave().click({ force: true })

    cy.wait(2000)


  });



});