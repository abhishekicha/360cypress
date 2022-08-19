/// <reference types="Cypress" />

import AssetsPage from '../../support/pageObjects/AssetsPage';

describe('Assets fuctionality', function () {

  const assetsPage = new AssetsPage();


  beforeEach(function () {

    cy.fixture('example').then(function (data) {

      this.data = data

      cy.login(this.data.email, this.data.password);

    })


  })

  it('Assets Functionality', function () {

    //Assets Category

    assetsPage.getManagement().click()

    cy.wait(2000);

    assetsPage.getAssets().click()

    cy.wait(2000);

    assetsPage.getSearch().eq(0).type('test', { force: true })

    assetsPage.getVerifySearchResult().eq(1).should('contain', 'test')

    cy.wait(2000);

    assetsPage.getSearch().eq(0).clear()

    cy.wait(2000)

    assetsPage.getAddAssetCategory().click({ force: true })

    cy.wait(2000)

    assetsPage.getAssetCategoryName().eq(2).type('test', { force: true })

    cy.wait(2000)

    assetsPage.getAssetCategoryDescription().type('this is a test', { force: true })

    cy.wait(2000)

    assetsPage.getAddAssetCategoryActivate().click({ force: true })

    cy.wait(2000)

    assetsPage.getAssetCategorySubmit().eq(2).click({ force: true })

    cy.wait(2000)

    //Assets Category Negative Test Case


    assetsPage.getSearch().eq(0).type('//..', { force: true })

    cy.wait(2000);

    assetsPage.getSearch().eq(0).clear()

    cy.wait(2000)

    assetsPage.getAddAssetCategory().click({ force: true })

    cy.wait(2000)

    assetsPage.getAssetCategoryName().eq(2).type('..//..', { force: true })

    cy.wait(2000)

    assetsPage.getAssetCategoryDescription().type('...//##', { force: true })

    cy.wait(2000)

    assetsPage.getAssetCategorySubmit().eq(2).click({ force: true })

    cy.wait(2000)

    //Asset Registration

    assetsPage.getAssetRegistration().click({ force: true })

    cy.wait(2000);

    assetsPage.getSearchAssetRegistrations().eq(1).type('test', { force: true })

    cy.wait(2000);

    assetsPage.getVerifySearchAssetRegistrationResult().eq(40).should('contain', 'test')

    cy.wait(2000)

    assetsPage.getSearchAssetRegistrations().eq(1).clear()

    cy.wait(2000)

    assetsPage.getRegisterNewAsset().click({ force: true })

    assetsPage.getAssetRegistrationType().click()

    assetsPage.getAssetRegistrationTypeName().eq(0).click({ force: true })

    assetsPage.getSelectAssetCategory().click()

    assetsPage.getSelectAssetCategoryName().eq(15).click()

    assetsPage.getSelectVendorType().click({ force: true })

    assetsPage.getSelectVendorTypeName().each(($e1, index, $list) => {

      if ($e1.text().trim(' ') === 'VN004-Gardener 01') {

        cy.wrap($e1).click({ force: true })
      }
    })



    assetsPage.getAssetName().type('test Asset', { force: true })

    assetsPage.getAssesCode().type('test001', { force: true })

    assetsPage.getPurchasePrice().type('2000', { force: true })

    assetsPage.getPurchaseDate().type('2022-01-07', { force: true })

    assetsPage.getInstallationDate().type('2022-07-20', { force: true })

    assetsPage.getManufactureDate().type('2020-02-08', { force: true })

    assetsPage.getManufacturerName().type('test', { force: true })

    assetsPage.getModelNumber().type('test', { force: true })

    assetsPage.getSerialNumber().type('test007', { force: true })

    assetsPage.getStatus().eq(0).click({ force: true })

    assetsPage.getStatusName().each(($e1, index, $list) => {

      if ($e1.text().trim(' ') === 'Active') {

        cy.wrap($e1).click({ force: true })
      }
    })

    assetsPage.getWarrantyFrom().type('2022-01-07', { force: true })

    assetsPage.getWarrantyTo().type('2026-01-07', { force: true })

    assetsPage.getDescription().type('test', { force: true })

    assetsPage.getSubmit().click({ force: true })

    cy.wait(2000)

    //Asset Registration With Negative Values

    assetsPage.getAssetRegistration().click({ force: true })

    cy.wait(2000);

    assetsPage.getSearchAssetRegistrations().eq(1).type('.../.', { force: true })

    cy.wait(2000);

    assetsPage.getSearchAssetRegistrations().eq(1).clear()

    cy.wait(2000)

    assetsPage.getRegisterNewAsset().click({ force: true })

    assetsPage.getAssetRegistrationType().click()

    assetsPage.getAssetRegistrationTypeName().eq(0).click({ force: true })

    assetsPage.getSelectAssetCategory().click()

    assetsPage.getSelectAssetCategoryName().eq(15).click()

    assetsPage.getSelectVendorType().click({ force: true })

    assetsPage.getSelectVendorTypeName().each(($e1, index, $list) => {

      if ($e1.text().trim(' ') === 'VN004-Gardener 01') {

        cy.wrap($e1).click({ force: true })
      }
    })



    assetsPage.getAssetName().type('..//..//* Asset', { force: true })

    assetsPage.getAssesCode().type('.;,..,\\', { force: true })

    assetsPage.getPurchasePrice().type('//../', { force: true })

    assetsPage.getPurchaseDate().type('2022-01-07', { force: true })

    assetsPage.getInstallationDate().type('2022-07-20', { force: true })

    assetsPage.getManufactureDate().type('2020-02-08', { force: true })

    assetsPage.getManufacturerName().type('..//', { force: true })

    assetsPage.getModelNumber().type('..***-', { force: true })

    assetsPage.getSerialNumber().type('**--22111', { force: true })

    assetsPage.getStatus().eq(0).click({ force: true })

    assetsPage.getStatusName().each(($e1, index, $list) => {

      if ($e1.text().trim(' ') === 'Active') {

        cy.wrap($e1).click({ force: true })
      }
    })

    assetsPage.getWarrantyFrom().type('2022-01-07', { force: true })

    assetsPage.getWarrantyTo().type('2026-01-07', { force: true })

    assetsPage.getDescription().type('test', { force: true })

    assetsPage.getSubmit().click({ force: true })

    cy.wait(2000)

    //Update Assets Registrations

    assetsPage.getAssetRegistration().click({ force: true })

    cy.wait(2000);

    assetsPage.getProblemReporting().eq(1).click()

    assetsPage.getProblemCode().type('test001')

    cy.wait(2000);

    assetsPage.getProblemRecordDate().type("2022-01-08", { force: true })

    assetsPage.getObservedBy().type('tester', { force: true })

    assetsPage.getCheckBox().check()

    assetsPage.getProblemDetails().type('test')

    assetsPage.getAdditionalRemarks().type('test')

    assetsPage.getReportButton().click({ force: true })

    cy.wait(2000)


    //Update Assets Registrations With Negative Values

    assetsPage.getAssetRegistration().click({ force: true })

    cy.wait(2000);

    assetsPage.getProblemReporting().eq(1).click()

    assetsPage.getProblemCode().type('/-*--')

    cy.wait(2000);

    assetsPage.getProblemRecordDate().type("2029-01-08", { force: true })

    assetsPage.getObservedBy().type('..//../**', { force: true })

    assetsPage.getCheckBox().check()

    assetsPage.getProblemDetails().type('**--/**')

    assetsPage.getAdditionalRemarks().type('**-/--')

    assetsPage.getReportButton().click({ force: true })

    //Servicing Details

    cy.wait(2000);

    assetsPage.getAssetRegistration().click({ force: true })

    cy.wait(2000);

    assetsPage.getServicingDetails().click({ force: true })

    assetsPage.getServicingNumber().type('123test', { force: true })

    assetsPage.getServicingAgainsttDropdown().click({ force: true })

    assetsPage.getDropDownSelect().click({ force: true })

    assetsPage.getSelectReferenceCode().click({ force: true })


  });


});