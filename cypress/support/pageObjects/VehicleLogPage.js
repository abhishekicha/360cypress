class VehicleLogPage {

    getVehicleLogs() {

        return cy.get('.mm-active > .sub-menu > :nth-child(3) > .side-nav-link-ref');
    }

    getFilter() {

        return cy.get('.toll > button')
    }

    getDate() {

        return cy.get("input[type='date']");
    }

    getFilterSubmit() {

        return cy.get('.addButton');
    }

    getSearch() {

        return cy.get('.v-input__slot input')
    }

    getVerifySearch() {

        return cy.get('[aria-rowindex="1"] > [aria-colindex="6"]')
    }

    getValidateResultText() {

        return cy.get('[role="alert"] > .text-center')
    }



    getGenerateReport() {

        return cy.get('.form-switch-lg #customSwitchsizemd');
    }

    getReset() {

        return cy.get('.resetButton');
    }


}

export default VehicleLogPage;