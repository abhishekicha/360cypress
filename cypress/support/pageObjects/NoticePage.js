class NoticePage{

    getNotice(){

        return cy.get(':nth-child(5) > .sub-menu > :nth-child(1) > .side-nav-link-ref')
    }

    getSearch(){

        return cy.get('input[type="text"]')
    }

    getViews(){

        return cy.get('div[style="cursor: pointer;"]')
    }

    closeViews(){

        return cy.get('.col-2 > .closeButton > .far')
    }

    getMenu(){

        return cy.get('button[type="button"]')
    }

    getNoticeHistory(){

        return cy.contains('Notice History')
    }

    getCloseNoticeHistory(){

        return cy.get('h4.headingText > .nuxt-link-active > .fas')
    }

    getPinUnpin(){

        return cy.get('a[role="menuitem"]')
    }
}

export default NoticePage;