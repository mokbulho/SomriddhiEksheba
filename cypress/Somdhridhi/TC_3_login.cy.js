describe('User SignUp', () => {
  it('as a super admin', () => {
    cy.visit('https://somriddhi.eksheba.gov.bd/')
    cy.viewport(1920, 1080);
    cy.get('input.form-control.custom-fc[name="email"][placeholder="01XXXXXXXXX"]').type('admin@gmail.com')
    cy.get('input.form-control.custom-fc[placeholder="Enter password"][name="password"]').type('password')
    cy.get('button').contains('Log In').click()
  })

  it('as a master agent', () => {
    cy.visit('https://somriddhi.eksheba.gov.bd/')
    cy.viewport(1920, 1080);
    cy.get('input.form-control.custom-fc[name="email"][placeholder="01XXXXXXXXX"]').type('01407072349')
    cy.get('input.form-control.custom-fc[placeholder="Enter password"][name="password"]').type('Password')
    cy.get('button').contains('Log In').click()
  })

  it('as a agent', () => {
    cy.visit('https://somriddhi.eksheba.gov.bd/')
    cy.viewport(1920, 1080);
    cy.get('input.form-control.custom-fc[name="email"][placeholder="01XXXXXXXXX"]').type('01515656233')
    cy.get('input.form-control.custom-fc[placeholder="Enter password"][name="password"]').type('Password')
    cy.get('button').contains('Log In').click()
  })
})
