class Account_Page{

    verifyMYAccount(){
        cy.get('.account > span').contains('Mike Davies')
    }

    clickSignOutBtn(){
        cy.get('.logout').click()  
     }


}

export default Account_Page;