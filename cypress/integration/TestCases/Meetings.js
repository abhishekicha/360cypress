/// <reference types="Cypress" />

import AssetsPage from '../../support/pageObjects/AssetsPage';

import MeetingsPage from '../../support/pageObjects/MeetingsPage';


describe('Meetings fuctionality', function(){

    const assetsPage = new AssetsPage();

    const meetingPage = new MeetingsPage()

    
    beforeEach(function() {

        cy.fixture('example').then(function(data){

           this.data = data
        })
        

      })

      it('Add Meetings', function(){

        cy.login(this.data.email, this.data.password);
  
        assetsPage.getManagement().click()

        cy.wait(2000);

        meetingPage.getMeetingsTab().click()

        cy.wait(2000);

        meetingPage.getSearch().type('test', {force: true})

        cy.wait(2000);

        meetingPage.getVerifySearchData().should('contain', 'Test')

        cy.wait(2000);

        meetingPage.getSearch().clear()

        cy.wait(2000);

        meetingPage.getAddMeetingButton().click({force: true})

        //need to rework when manual test cases are ready

        cy.wait(2000);

        meetingPage.getTopic().type('Test', {force: true})

        cy.wait(2000);

        meetingPage.getDate().type('2022-07-20', { force: true })

        cy.wait(2000);

        meetingPage.getTime().type('10:40:00', {force: true})

        cy.wait(2000);

        meetingPage.getDuration().type('60 Minutes', {force: true})

        cy.wait(2000);

        meetingPage.getVenue().type('test venue', {force: true})

        cy.wait(2000);

        meetingPage.getNotes().type('test', {force: true})

        cy.wait(2000);

        meetingPage.getAgenda().type('test', {force: true})

        cy.wait(2000);

        meetingPage.getSubmit().click({force: true})

        cy.wait(2000);

  
    });

    it('Add Meetings Negative Values', function(){

        cy.login(this.data.email, this.data.password);
  
        assetsPage.getManagement().click()

        cy.wait(2000);

        meetingPage.getMeetingsTab().click()

        cy.wait(2000);

        meetingPage.getSearch().type('../..', {force: true})

        cy.wait(2000);

        meetingPage.getSearch().clear()

        cy.wait(2000);

        meetingPage.getAddMeetingButton().click({force: true})

        cy.wait(2000);

        meetingPage.getTopic().type('..0.//', {force: true})

        cy.wait(2000);

        meetingPage.getDate().type('2029-07-20', { force: true })

        cy.wait(2000);

        meetingPage.getTime().type('10:40:00', {force: true})

        cy.wait(2000);

        meetingPage.getDuration().type('  ', {force: true})

        cy.wait(2000);

        meetingPage.getVenue().type('../.. ', {force: true})

        cy.wait(2000);

        meetingPage.getNotes().type('.....', {force: true})

        cy.wait(2000);

        meetingPage.getAgenda().type('../', {force: true})

        cy.wait(2000);

        meetingPage.getSubmit().click({force: true})

        cy.wait(2000);

  
    });

});