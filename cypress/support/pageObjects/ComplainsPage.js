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

        return cy.get('.text-end > .addButton')

    }

    getAddComplaintCategory(){

        return cy.contains('Complain Category')

    }

   getSelectUnit(){

    return cy.contains('Select Unit')

   }

   getComplainTitle(){

    return cy.get('.v-text-field__slot input')
   }

   getComplainDescription(){


        return cy.get('.material-input')

   }

   getForAllUsers(){

    return cy.get('input[type="checkbox"]')

   }

   getSubmit(){

    return cy.contains('Submit')

   }
}

export default ComplainsPage;