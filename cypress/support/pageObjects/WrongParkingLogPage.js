class WrongParkingLogPage{

    getWrongParkingLog(){

        return cy.get('.mm-active > .sub-menu > :nth-child(4) > .side-nav-link-ref')
    }

    getSearch(){

        return cy.get('.v-input input')
    }

    getVerifySearch(){

        return cy.get('.tableRow > tr > [aria-colindex="1"]')
    }

    getVerifyVehicleOwnerType(){

        return cy.get('[aria-rowindex="1"] > [aria-colindex="4"]')
    }

    getFilter(){

        return cy.get('.text-end > :nth-child(2) > .btn')
    }

    getDate(){

        return cy.get('input[type="date"]')
    }

    getFilterSubmit(){

        return cy.get('.addButton')
    }

    getFilterReset(){

        return cy.get('.resetButton')
    }


}

export default WrongParkingLogPage;