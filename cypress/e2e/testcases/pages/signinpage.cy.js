class Signin_Page{

    enterEmailAddress(){
        cy.get('#email').type('maxtesting6+2@gmail.com')
    }

    enterPassword(){
        cy.get('#passwd').type('Today01')   
     }

     clickSigninBtn(){
        cy.get('#SubmitLogin > span').click()   
     }

     //2nd Method does the three at the same time
     login(){
        cy.get('#email').type('maxtesting6+2@gmail.com')
        cy.get('#passwd').type('Today01') 
        cy.get('#SubmitLogin > span').click() 
     }


         //3rd Method is creating an argument for username and password instead of hardcoding it
         logIn(userName,password){
            cy.get('#email').type(userName)
            cy.get('#passwd').type(password) 
            cy.get('#SubmitLogin > span').click() 
    }

  
}



export default Signin_Page;