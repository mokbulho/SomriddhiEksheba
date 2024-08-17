describe('User SignUp', () => {
  it('SignUp', () => {
    cy.visit('https://somriddhi.eksheba.gov.bd/')
    cy.viewport(1920, 1080);
    cy.get('input.form-control.custom-fc[name="email"][placeholder="01XXXXXXXXX"]').type('01515656233')
    cy.get('input.form-control.custom-fc[placeholder="Enter password"][name="password"]').type('Password')
    cy.get('button').contains('Log In').click()

    //By class name combination (most specific):
    cy.get('.nav-icon.fas.bx.bx-wallet').click()

    //By specific class (if targeting by a single unique class is sufficient):
    // cy.get('i.nav-icon.fas.bx.bx-wallet').click()

    //or
    // cy.get('.fas.bx-wallet').click()

    //By element type and class (if you want to ensure it's an <i> tag):
    // cy.get('.bx-wallet').click()

    //cy.get('.create-button.py-1.custom-bg-yellow.border-0.add-edit-payment-link-modal-btn').click()
    //cy.contains('a', 'Top Up Wallet').click()
    cy.get('a[href="https://somriddhi.eksheba.gov.bd/agent/wallets/create"]');



  })
})





