describe('Para bank Registraion', () => {
  it('passes', () => {
    cy.visit('https://parabank.parasoft.com')
    cy.get("#loginPanel > :nth-child(3) > a").click()
    cy.get('input[id="customer.firstName"]').type('sfddsa')
    cy.get('input[id="customer.lastName"]').type('sdf')
    cy.get('input[id="customer.address.street"]').type('dsf')
    cy.get('input[id="customer.address.city"]').type('dsfs')
    cy.get('input[id="customer.address.zipCode"]').type('sdf')
    cy.get('input[id="customer.address.state"]').type('sdf')
    cy.get('input[id="customer.phoneNumber"]').type('sdf')
    cy.get('input[id="customer.ssn"]').type('sdf')
    cy.get('input[id="customer.username"]').type('sdfsd')
    cy.get('input[id="customer.password"]').type('qqqqqq')
    cy.get('#repeatedPassword').type('qqqqqq')
    cy.get('input[value="Register"]').click()

  })
})