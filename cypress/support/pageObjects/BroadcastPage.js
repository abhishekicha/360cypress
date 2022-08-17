class BroadcastPage{

    getBroadCast(){

        return cy.get('.mm-active > .sub-menu > :nth-child(4) > .side-nav-link-ref')

    }

    getSearch(){

        return cy.get('#__BVID__126 input')

    }

    getVerifySearch(){

        return  cy.get('[aria-rowindex="1"] > [aria-colindex="1"]')

    }

    getVerifyOwnerSearch(){

        return cy.get('.tableRow > tr > [aria-colindex="3"]')

    }

    getTop(){

        return cy.get('.card-body > :nth-child(1) > .col')
    }

    getFilter(){

        return cy.get('[title="Filter"]')
    }

    getInput(){

        return  cy.get('input[type="text"]')

    }

    getInputType(){

        return cy.get('.v-list-item__title')
    }

    getApply(){

        return cy.get('.mt-1 > .text-center > :nth-child(1)')
    }

    getReset(){

        return cy.get('.resetButton')
    }

    getCreateBroadcast(){

        return cy.get('.addButton')
    }

    getOwners(){

        return cy.get('#__BVID__164_BV_option_2')
    }

    getPriority(){

        return cy.get('#__BVID__171_BV_option_0')
    }

    getReplyTo(){

        return cy.get('#__BVID__175 > :nth-child(1) > .v-input > .v-input__control > .v-input__slot')
    }

    getReplyToName(){

        return cy.get('.v-list-item__title')
    }

    getSubject(){

        return cy.get('#__BVID__181 > :nth-child(1) > .v-input input')
    }

    getImage(){

        return cy.get('input[type="file"]')
    }

    getEmailBody(){

        return cy.get('.ck-blurred')
    }

    getCreateEmailBroadCast(){

        return cy.get(':nth-child(4) > .text-center > .btn')
    }

    getNotificationBroadcast(){

        return cy.get('#__BVID__190___BV_tab_button__')
    }

    getRecipientType(){

        return cy.get('#__BVID__194_BV_option_2')
    }

    getPriorityNotification(){

        return cy.get('input[type="radio"]')
    }

    getSubjectNotification(){

        return cy.get('#__BVID__205 > :nth-child(1) > .v-input > .v-input__control > .v-input__slot input')
    }

    getNotificationBody(){

        return cy.get('.material-input')
    }

    getCreateNotificationBroadcast(){

        return cy.get(':nth-child(5) > .text-center > .btn')
    }
}

export default BroadcastPage;