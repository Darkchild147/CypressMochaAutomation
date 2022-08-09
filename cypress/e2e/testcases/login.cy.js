//MOCHA
    
import Home_Page from "./pages/homepage.cy.js"
import Signin_Page from "./pages/signinpage.cy.js"
import Account_Page from "./pages/accountpage.cy.js"

describe('Login Test',() =>{

    const homepage = new Home_Page;
    const signinpage = new Signin_Page;
    const accountpage = new Account_Page;

    it('Correct user can login successfully',() =>{
        cy.visit('/index.php')
        //cy.get('.login').click()
        homepage.clickSingin()
        signinpage.logIn("maxtesting6+2@gmail.com","Today01")
        //signinpage.enterEmailAddress()
        //signinpage.enterPassword()
        //signinpage.clickSigninBtn()
        accountpage.verifyMYAccount()
        accountpage.clickSignOutBtn()
        
        

        //cy.get('#email').type('maxtesting6+2@gmail.com')
        //cy.get('#passwd').type('Today01')
        //cy.get('#SubmitLogin > span').click()
        //cy.get('.account > span').contains('Mike Davies')
        //cy.get('.logout').click()

    })

     it('Check error message is displayed when user enters incorrect details',() =>{
           cy.visit('/index.php',{timeout:5000})
           homepage.clickSingin()
           signinpage.logIn("maxtesting7+1@gmail.com","Today01")



    //     cy.get('.login').click()
    //     cy.get('#email').type('maxtesting@aol.com')
    //     cy.get('#passwd').type('Today01')
    //     cy.get('#SubmitLogin > span').click()
           cy.get('#center_column > :nth-child(2) > p').contains('There is 1 error')
      

     })
})