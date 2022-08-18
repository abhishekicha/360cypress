/// <reference types="Cypress" />


import RegularVisitorsLogPage from '../../support/pageObjects/RegularVisitorsLogPage';


describe('Regular visitors Log fuctionality', function () {


    const regularVisitorsLogPage = new RegularVisitorsLogPage();

    beforeEach(function () {

        cy.fixture('example').then(function (data) {

            this.data = data
        })


    })

    it('Regular Visitors Log Filter', function () {

        cy.login(this.data.email, this.data.password);

        regularVisitorsLogPage.getLogs().click()

        regularVisitorsLogPage.getRegularVisitorsLogs().click()

        cy.wait(2000);

        regularVisitorsLogPage.getFilter().click()

        cy.wait(2000)


        regularVisitorsLogPage.getDate().each(($ele, index) => {
            if (index === 0) {

                cy.wrap($ele).click().type('2022-01-07', { force: true })


            } else {

                cy.wrap($ele).click().type('2022-07-20', { force: true })

            }

        })


        regularVisitorsLogPage.getCategories().click()

        regularVisitorsLogPage.getCategoriesSelectOption().contains('Driver').click()

        regularVisitorsLogPage.getFilterSubmit().click()

        cy.wait(2000)

        regularVisitorsLogPage.getFilter().click({ force: true })

        cy.wait(2000)

        regularVisitorsLogPage.getIsInside().click({ force: true })

        cy.wait(2000)

        regularVisitorsLogPage.getFilterSubmit().click({ force: true })

        cy.wait(2000)

        regularVisitorsLogPage.getFilter().click({ force: true })

        cy.wait(2000)

        regularVisitorsLogPage.geResetFilter().click()

        cy.wait(2000)

        regularVisitorsLogPage.getFilter().click({ force: true })


    });

    it('Regular Visitors Log Filter With Negative Values', function () {

        cy.login(this.data.email, this.data.password);

        regularVisitorsLogPage.getLogs().click()

        regularVisitorsLogPage.getRegularVisitorsLogs().click()

        cy.wait(2000);

        regularVisitorsLogPage.getFilter().click()

        cy.wait(2000)


        regularVisitorsLogPage.getDate().each(($ele, index) => {
            if (index === 0) {

                cy.wrap($ele).click().type('2025-01-07', { force: true })


            } else {

                cy.wrap($ele).click().type('2019-07-20', { force: true })

            }

        })


        regularVisitorsLogPage.getCategories().click()

        regularVisitorsLogPage.getCategoriesSelectOption().contains('Driver').click()

        regularVisitorsLogPage.getFilterSubmit().click()

        cy.wait(2000)

       

    });

});