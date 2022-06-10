// afterEach('Launch site', ()=>{
//   // to view the diff mobile devices cy.viewport('ipad-mini')
//   cy.visit('http://localhost:4200/student-dashboard');
// })

it('navigates', () => {
  cy.visit('http://localhost:4200/student-dashboard')

  cy.get('#student-btn').click()

  cy.get('input[formControlName="name"]')
    .type('Maharshi')

  cy.get('input[formControlName="class"]')
    .type('Graduated')

  cy.get('input[formControlName="email"]')
    .type('harsha.123@gmail.com')

  cy.get('input[formcontrolName="password"]')
   .type('123456')

   cy.get('input[formcontrolName="address"]')
   .type('Hyderbad')

   cy.get('input[formcontrolName="city"]')
   .type('RangaReddy')

   cy.get('#reg-btn').click()

   cy.get('#close-btn').click()

   cy.get('#edit-btn').click()
   cy.get('input[formcontrolName="city"]')
   .type('Sangareddy')

   cy.get('#update-btn').click()


   cy.get('#close-btn').click()

})
