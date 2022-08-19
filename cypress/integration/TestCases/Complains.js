/// <reference types="Cypress" />

import ComplainsPage from '../../support/pageObjects/ComplainsPage';

describe('Complains fuctionality', function () {

    const complainsPage = new ComplainsPage();


    beforeEach(function () {

        cy.fixture('example').then(function (data) {

            this.data = data

            cy.login(this.data.email, this.data.password);

        })


    })

    it('Complains Functionality', function () {

        //Complains SearchBox

        complainsPage.getManageMent().click()

        cy.wait(2000);

        complainsPage.getComplains().click()

        cy.wait(2000);

        complainsPage.getSearch().type('Test', { force: true })

        cy.wait(2000);

        complainsPage.getVerifySearchResults().should('contain', 'test')

        cy.wait(2000);

        complainsPage.getSearch().clear({ force: true })

        cy.wait(2000);

        //Complains Filter

        complainsPage.getFilter().click({ force: true })

        cy.wait(2000);

        complainsPage.getFilterField().each(($ele, index) => {
            if (index === 0) {

                cy.wrap($ele).click({ force: true })

                complainsPage.getSearchByStatus().eq(0).click({ force: true })

            }
            else if (index === 1) {

                cy.wrap($ele).click({ force: true })

                complainsPage.getOptions().each(($e1, index, $list) => {

                    if ($e1.text().trim(' ') === 'Aspen-2A') {

                        cy.wrap($e1).click({ force: true })

                    }

                })



            } else if (index === 2) {


                cy.wrap($ele).click({ force: true })

                complainsPage.getOptions().each(($e1, index, $list) => {

                    if ($e1.text().trim(' ') === 'Civil') {

                        cy.wrap($e1).click({ force: true })

                    }

                })


            } else {

                cy.wrap($ele).click({ force: true })

                complainsPage.getOptions().each(($e1, index, $list) => {

                    if ($e1.text().trim(' ') === 'Soumya Kanti Jana') {

                        cy.wrap($e1).click({ force: true })

                    }

                })


            }



        })

        cy.wait(2000)

        complainsPage.getApply().click({ force: true })

        cy.wait(2000)

        complainsPage.getReset().click({ force: true })

        cy.wait(2000)

        //Add Complain

        complainsPage.getAddComplain().click({ force: true })

        complainsPage.getAddComplaintCategory().click({ force: true })

        cy.wait(2000)

        complainsPage.getOptions().each(($e1, index, $list) => {

            if ($e1.text().trim(' ') === 'Civil') {

                cy.wrap($e1).click({ force: true })

            }

        })

        cy.wait(2000)

        complainsPage.getSelectUnit().click({ force: true })

        cy.wait(2000)

        complainsPage.getOptions().each(($e1, index, $list) => {

            if ($e1.text().trim(' ') === 'Aspen-1A') {

                cy.wrap($e1).click({ force: true })

            }

        })

        cy.wait(2000)

        complainsPage.getComplainTitle().eq(1).type('test', { force: true })

        cy.wait(2000)

        complainsPage.getComplainDescription().type('test', { force: true })

        cy.wait(2000)

        complainsPage.getForAllUsers().check({ force: true })

        cy.wait(2000)

        complainsPage.getSubmit().click({ force: true })

        cy.wait(2000)

    });


});