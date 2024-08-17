describe('User SignUp', () => {
  it('SignUp', () => {
    cy.visit('https://somriddhi.eksheba.gov.bd/');
    cy.viewport(1920, 1080);

    // cy.contains("Sign Up").wait(1000).click()
    // cy.get('#name').should('have.attr', 'placeholder', 'Enter name').type("name");
    // cy.get('#phone').should('have.attr', 'placeholder', '01xxxxxxxxx').type("01748608637");
    // cy.contains("Register").wait(1000).click()

    cy.contains("Sign Up").click()
    cy.get('input.form-control.custom-fc[name="name"][id="name"][placeholder="Enter name"]').type('01407072349')
    cy.get('input.form-control.custom-fc[name="phone"][id="phone"][placeholder="01xxxxxxxxx"]').type('01748608637')
    //cy.contains("Register").click()
    cy.get('button').contains('Register').click();
  })
})