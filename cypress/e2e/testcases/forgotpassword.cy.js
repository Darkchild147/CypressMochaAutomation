 describe('forgot password',()=>{

     beforeEach(function(){
         cy.visit('http://automationpractice.com/index.php',{timeout:5000})
     })
 
     it.skip('As a user i want to reset password',()=>{

         //cy.visit('http://automationpractice.com/index.php',{timeout:5000})
         cy.get('.login').click()
         cy.get('.lost_password > a').click()
         cy.get('#email').type('laura@gmail.com')
         cy.get('.submit > .btn > span').click()
         cy.get('.alert').contains('A confirmation email has been sent to your address: laura@gmail.com')

     })


     it.skip('Check error message is dispayed when an incorrect email is use to set password',()=>{

//         //cy.visit('http://automationpractice.com/index.php',{timeout:5000})
        cy.get('.login').click()
        cy.get('.lost_password > a').click()
        cy.get('#email').type('croc@gmail.com')
        cy.get('.submit > .btn > span').click()
        cy.get('ol > li').contains('There is no account registered for this email address')
       

     })

     afterEach(function(){
    
         //cy.clearCookies()
     })
 })