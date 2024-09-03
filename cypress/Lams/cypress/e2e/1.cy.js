describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://lams.dev.z8.softbd.xyz/');
    cy.get('.css-1yeg3l4').click();
    cy.get('[href="/registration"] > .MuiButtonBase-root').click();
    cy.get(':nth-child(2) > a > .MuiPaper-root').click();
    cy.get('#\\:r0\\:').type('000');
    cy.get('#\\:r1\\:').type('111');
    cy.get('#\\:r2\\:').type('222');
    cy.get('#\\:r3\\:').type('333');
    cy.get('#\\:r4\\:').type('444');
    cy.get('#\\:r5\\:').type('555');
    cy.get(':nth-child(7) > .css-tzsjye > .MuiAutocomplete-root > .MuiFormControl-root > .MuiInputBase-root > .MuiAutocomplete-endAdornment > .MuiButtonBase-root > [data-testid="ArrowDropDownIcon"] > path').click();
    cy.get('#\\:r6\\:').type('666');
    cy.get('#\\:r7\\:').type('777');
    cy.get('#\\:r8\\:').type('01011988');
    cy.get('#\\:rg\\:').type('01012024');
    cy.get('#\\:ri\\:').type('01012024');
    cy.get('#\\:rk\\:').type('pass');
    cy.get('#\\:r1\\:').type('pass');





  })
})