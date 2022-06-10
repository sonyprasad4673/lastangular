context('Navigation', () => {
  it('can navigate around the website', () => {
    cy.visit('http://localhost:4200/home');
    cy.visit('http://localhost:4200/about-us');
    cy.visit('http://localhost:4200/contact-us');
    cy.visit('http://localhost:4200/');
    cy.visit('http://localhost:4200/parentC');
    cy.visit('http://localhost:4200/agngular-grid');
    cy.visit('http://localhost:4200/graphs');

  });
})
