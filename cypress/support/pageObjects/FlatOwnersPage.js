class FlatOwnersPage{

    getProperty(){

        return cy.get(':nth-child(2) > .is-parent')
    }

    getFlatOwners(){

        return cy.get('.mm-active > .sub-menu > :nth-child(1) > .side-nav-link-ref')

    }

    getSearch(){

        return cy.get('.col-sm-4 input')
    }

    getVerifySearch(){

        return cy.get("span[style='font-size: 13px;']")
    }

    getVerifyPhoneSearch(){

        return cy.get("tr[tabindex='0'] td[aria-colindex='4']")
    }

    getVerifyMailSearch(){

        return cy.get('span span')
    }

    getEdit(){

        return cy.get('[aria-colindex="8"] > .list-inline > :nth-child(1) > .px-2 > .fas')
    }

    getEditClose(){

        return cy.get('.col-4 > .closeButton > .far')
    }

    getBuggyPage(){

        return cy.get('.tableRow > tr > [aria-colindex="7"]')
    }

    getRequestedUsers(){

        return cy.contains('Requested users')
    }

    getAllUsers(){

        return cy.contains('All users')

    }

    getAllUsersSearch(){

        return cy.get('.col-8 input')
    }

    getVerifyAllUsersSearchData(){

        return cy.get('span[style="font-weight: bold; font-size: 17px;"]')

    }
}

export default FlatOwnersPage;