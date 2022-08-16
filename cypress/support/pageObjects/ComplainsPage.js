class ComplainsPage{

    getManageMent(){

      return  cy.get(':nth-child(5) > .is-parent')
    }

    getComplains(){

        return  cy.get('.mm-active > .sub-menu > :nth-child(2) > .side-nav-link-ref')
      }

    getSearch(){

        return cy.get('.card-body > .mb-0 > :nth-child(1) input')
    }

    getVerifySearchResults(){

        return cy.get('.tableRow > :nth-child(1) > [aria-colindex="2"]')
    }

    getFilter(){

        return cy.get('.text-end > :nth-child(1)')
    }

    getFilterField(){

        return cy.get('input[required="required"]')
    }

    getSearchByStatus(){

        return cy.get('div[role="option"]')
    }

    getOptions(){

        return cy.get('.v-list-item__title')
    }

    getApply(){

        return cy.get('.text-center > .addButton')
    }

    getReset(){

        return cy.get('.resetButton')
    }

    getAddComplain(){

        return cy.get('.addButton')

    }

    getAddComplaintCategory(){

        return cy.get('#__BVID__176 > :nth-child(1) > .v-input > .v-input__control > .v-input__slot')

    }

   getSelectUnit(){

    return cy.get('#__BVID__182 > :nth-child(1) > .v-input > .v-input__control > .v-input__slot')

   }

   getComplainTitle(){

    return cy.get('#__BVID__188 > :nth-child(1) > .v-input input')
   }

   getComplainDescription(){


        return cy.get('.material-input')

   }

   getForAllUsers(){

    return cy.get('input[type="checkbox"]')

   }

   getSubmit(){

    return cy.get('.text-center > .btn')

   }
}

export default ComplainsPage;