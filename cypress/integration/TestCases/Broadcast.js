/// <reference types="Cypress" />

import ComplainsPage from '../../support/pageObjects/ComplainsPage';

import BroadcastPage from '../../support/pageObjects/BroadcastPage';

describe('Broadcast fuctionality', function () {

    const broadcastPage = new BroadcastPage();

    const complainsPage = new ComplainsPage();



    beforeEach(function () {

        cy.fixture('example').then(function (data) {

            this.data = data

            cy.login(this.data.email, this.data.password);

        })


    })

    it('Broadcast Functionality', function () {

        //Broadcast Search

        complainsPage.getManageMent().click()

        cy.wait(2000);

        broadcastPage.getBroadCast().click()

        cy.wait(2000)

        broadcastPage.getSearch().type('EMAIL', { force: true })

        cy.wait(2000)

        broadcastPage.getVerifySearch().should('contain', 'EMAIL')

        cy.wait(2000)

        broadcastPage.getSearch().clear()

        cy.wait(2000)

        broadcastPage.getTop().scrollIntoView()

        cy.wait(3000)

        broadcastPage.getSearch().type('NOTIFICATION', { force: true })

        cy.wait(2000)

        broadcastPage.getVerifySearch().should('contain', 'NOTIFICATION')

        cy.wait(2000)

        broadcastPage.getSearch().clear()

        cy.wait(2000)

        broadcastPage.getSearch().type('OWNER', { force: true })

        cy.wait(2000)

        broadcastPage.getVerifyOwnerSearch().should('contain', 'OWNER')

        cy.wait(2000)

        broadcastPage.getSearch().clear()

        cy.wait(2000)

        //Broadcast Filter

        broadcastPage.getFilter().click({ force: true })

        cy.wait(2000)

        broadcastPage.getInput().each(($ele, index) => {
            if (index === 1) {

                cy.wrap($ele).click({ force: true })

                broadcastPage.getInputType().each(($e1, index, $list) => {

                    if ($e1.text().trim(' ') === 'Email') {

                        cy.wrap($e1).click({ force: true })

                    }

                })

            } else if (index === 2) {

                cy.wrap($ele).click({ force: true })

                broadcastPage.getInputType().each(($e1, index, $list) => {

                    if ($e1.text().trim(' ') === 'Owners') {

                        cy.wrap($e1).click({ force: true })

                    }

                })

            } else if (index === 3) {

                cy.wrap($ele).click({ force: true })

                broadcastPage.getInputType().each(($e1, index, $list) => {

                    if ($e1.text().trim(' ') === 'High') {

                        cy.wrap($e1).click({ force: true })

                    }

                })

            }



        })

        broadcastPage.getApply().click({ force: true })

        cy.wait(3000)

        broadcastPage.getReset().click({ force: true })

        cy.wait(2000)

        //Create Email Broadcast

        const p = 'test.jpg'

        broadcastPage.getCreateBroadcast().click({ force: true })

        cy.wait(2000)

        broadcastPage.getOwners().eq(0).click({ force: true })

        cy.wait(2000)

        broadcastPage.getPriority().eq(0).click({ force: true })

        cy.wait(2000)

        broadcastPage.getReplyTo().click({ force: true })

        cy.wait(2000)

        broadcastPage.getReplyToName().each(($e1, index, $list) => {

            if ($e1.text().trim(' ') === 'Soumya Kanti Jana') {

                cy.wrap($e1).click({ force: true })

            }


        })

        cy.wait(2000)

        broadcastPage.getSubject().eq(1).type('test', { force: true })

        cy.wait(2000)

        broadcastPage.getImage().eq(0).attachFile(p)

        cy.wait(2000)

        broadcastPage.getEmailBody().type('test', { force: true })

        cy.wait(2000)

        broadcastPage.getCreateEmailBroadCast().type('test', { force: true })

        cy.wait(2000)

        //Create Notification Broadcast

        broadcastPage.getCreateBroadcast().click({ force: true })

        cy.wait(2000)

        broadcastPage.getNotificationBroadcast().click()

        cy.wait(2000)

        broadcastPage.getRecipientType().eq(1).click({ force: true })

        cy.wait(2000)

        broadcastPage.getPriorityNotification().eq(16).click()

        cy.wait(2000)

        broadcastPage.getSubject().eq(2).type('test', { force: true })

        cy.wait(2000)

        broadcastPage.getNotificationBody().type('test', { force: true })

        cy.wait(2000)

        broadcastPage.getCreateNotificationBroadcast().click({ force: true })

        cy.wait(2000)

    });


});