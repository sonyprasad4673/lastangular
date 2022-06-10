beforeEach('Launch site', ()=>{
  // to view the diff mobile devices cy.viewport('ipad-mini')
  cy.visit('http://localhost:4200/');
})

it('Interacting with text fields',()=>{
  cy.get('input[formControlName="fullname"]')
    .type('Maharshi')
    .should('have.value','Maharshi')
  cy.get('input[formControlName="username"]')
    .type('Harsha')
    .should('have.value','Harsha')
  cy.get('input[formcontrolName="email"]')
   .type('maharshi.harsha@gmail.com')
   .should('have.value','maharshi.harsha@gmail.com')
   cy.get('input[formcontrolName="password"]')
   .type('maharshi@harsha')
   .should('have.value','maharshi@harsha')
   cy.get('select[formcontrolName="city"]')
   .select('33')
   .should('have.value', '33')
   cy.get('[type="checkbox"]').check()

   cy.get('form').submit()
   cy.get('.reset-btn').click()
   cy.get('.fb-button').click().should("exist")
   // mocha
   cy.contains('Register Form').should("exist")




  //  cy.get('div')




})
