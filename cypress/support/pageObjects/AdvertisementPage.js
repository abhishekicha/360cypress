class AdvertisementPage{

    getAdvertisement(){

        return cy.get(':nth-child(5) > .sub-menu > :nth-child(5) > .side-nav-link-ref')
    }

    getSearch(){

        return cy.get('.v-input__slot input')
    }

    getVerifySearchResult(){

        return cy.get('.tableRow > :nth-child(1) > [aria-colindex="2"]')
    }

    getSetOrder(){
        
        return cy.get('.text-end > :nth-child(1)')
    }

    getFirstElementToDrop(){

        return cy.get('.dynamicTablesVisibleUL > span > :nth-child(1)')
    }

    getDropPlace(){

        return 'span > :nth-child(4)'
    }

    getSubmit(){

        return cy.get('.col-xl-12 > .btn')
    }

    getAddNewAddNewAdvertisement(){

        return cy.get('.addButton')
    }

    getAdvertisementTitle(){

        return cy.get('input[type="text"]')
    }

    getImage(){

        return cy.get('.dropzone-custom-content')
    }

    getCropImageButton(){

        return cy.get('.col-lg-12 > .btn')
    }

    getCroppedImageSubmit(){

        return cy.get('.submitButton')
    }

    getSubmitAdvertisement(){

        return cy.contains('Submit')
    }
}

export default AdvertisementPage;