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

        return cy.get('.text-end > .addButton')
    }

    getOwners(){

        return cy.get('input[value="OWNER"]')
    }

    getPriority(){

        return cy.get('input[value="HIGH"]')
    }

    getReplyTo(){

        return cy.contains('Reply To')
    }

    getReplyToName(){

        return cy.get('.v-list-item__title')
    }

    getSubject(){

        return cy.get('.v-text-field__slot input')
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

        return cy.contains('Notification Broadcast')
    }

    getRecipientType(){

        return cy.get('input[value="ALL"]')
    }

    getPriorityNotification(){

        return cy.get('input[type="radio"]')
    }

    getNotificationBody(){

        return cy.get('.material-input')
    }

    getCreateNotificationBroadcast(){

        return cy.get(':nth-child(5) > .text-center > .btn')
    }
}

export default BroadcastPage;