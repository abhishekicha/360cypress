/// <reference types="Cypress" />

import ComplainsPage from '../../support/pageObjects/ComplainsPage';

import NoticePage from '../../support/pageObjects/NoticePage';

describe('Notice fuctionality', function () {

    const noticePage = new NoticePage();

    const complainsPage = new ComplainsPage();



    beforeEach(function () {

        cy.fixture('example').then(function (data) {

            this.data = data

            cy.login(this.data.email, this.data.password);

        })


    })

    it('Notice Functionality', function () {

        //Notice Search

        complainsPage.getManageMent().click()

        cy.wait(2000);
         
        noticePage.getNotice().click()

        cy.wait(2000)

        noticePage.getSearch().type('test',{force: true})

        cy.wait(2000)

        noticePage.getSearch().clear()

        cy.wait(2000)

        noticePage.getViews().eq(1).click({force: true})

        cy.wait(2000)

        noticePage.closeViews().click({force: true})

        cy.wait(2000)

        noticePage.getMenu().eq(5).click({force: true})

        cy.wait(2000)

        noticePage.getNoticeHistory().click({force: true})

        cy.wait(2000)

        noticePage.getCloseNoticeHistory().click({force: true})

        cy.wait(2000)

        noticePage.getMenu().eq(5).click({force: true})

        cy.wait(2000)

        noticePage.getPinUnpin().eq(1).click({force: true})

       
    });


});