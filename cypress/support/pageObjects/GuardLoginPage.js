class GuardLoginPage{

    getGuardLogin() {


        return cy.get(':nth-child(3) > .sub-menu > :nth-child(2) > .side-nav-link-ref')
    }

    getSearch() {


        return  cy.get('div[class = "v-text-field__slot"] input')

    }

    getSearchText() {


        return  cy.get('tbody > tr > [aria-colindex="1"]')

    }
    getAppLogin() {


        return  cy.get('.addButton > span')

    }

    getSelectGuard() {


        return  cy.get('.v-select__selections')

    }

    getSelectGuardName() {


        return  cy.get('div[role ="listbox"] div:nth-child(2)')

    }

    getGateNumber() {


        return  cy.get('#input-213')

    }

    getUseName() {


        return  cy.get('#input-220')

    }

    getPassword() {


        return  cy.get('#input-223')
    }

    getTowerGuardLogin() {


        return  cy.get(':nth-child(2) > .checkSwitch > #customSwitchsizemd')
    }

    getSelectTower() {


        return  cy.get(':nth-child(4) > .col-12 > .v-input > .v-input__control > .v-input__slot > .v-select__slot > .v-select__selections')
    }

    getSelectTowerName(){
     return   cy.contains("Cascade")
    }

    getSubmit() {


        return  cy.get('#modal-apploginlist___BV_modal_body_ > :nth-child(2) > .col-12 > .btn')
    }

    getDeleteUser() {


        return  cy.get(':nth-child(1) > [aria-colindex="8"] > .list-inline > :nth-child(3) > .px-2')
    }

    geConfirmDelete() {


        return  cy.get('[data-index="0"]')
    }


}

export default GuardLoginPage;