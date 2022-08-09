

 var faker = require('faker');
describe('Register Test',() =>{

      it.skip('Correct user can login successfully',() =>{
      cy.visit('http://automationpractice.com/index.php',{timeout:5000})
      cy.get('.login').click()
      cy.get('#email_create').type(faker.Internet.email())
      cy.get('#SubmitCreate > span').click()
      cy.get('#id_gender1').click()
      cy.get('#customer_firstname').type('Olu')
      cy.get('#customer_lastname').type('Ogunleye')
      cy.get('#passwd').type('Delete+71')
      cy.get('#days').select('7')
      cy.get('#months').select('July')
      cy.get('#years').select('1977')
      cy.get('#address1').type('172 Miller Ave,Brooklyn')
      cy.get('#city').type('Brooklyn')
      cy.get('#id_state').select('New York')
      cy.get('#postcode').type('11207')
      cy.get('#id_country').select('United States')
      cy.get('#phone_mobile').type('+13474223512')
      cy.get('#submitAccount > span').click()

  

     })

 })