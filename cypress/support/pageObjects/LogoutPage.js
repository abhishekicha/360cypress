class LogoutPage{

    getProfile(){

        return cy.get('button[aria-haspopup="menu"]')
    }

    getLogout(){

        return cy.contains('Logout')
    }

}

export default LogoutPage;