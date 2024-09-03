describe('user_registration', () => {
    it('passes', () => {
        cy.visit('https://lams.dev.z8.softbd.xyz/');
        cy.get('.css-1yeg3l4').click();
        cy.get('#login-reg-button').click();
        cy.get(':nth-child(2) > a > .MuiPaper-root').click();

        cy.get('#username').type('admin');
        cy.get('#password').type('121212aA');
        cy.get('#kc-login').click('');
        cy.get('.HomePage-service > .MuiBox-root > img').click();
        cy.get('.HomePage-moduleItemText').contains('p', 'Human Resource').click();
        cy.get('.HomePage-moduleItemText').contains('p', 'User').click();

        cy.get('.MuiTable-root.css-p7vmom"').each(($row) => {
            cy.wrap($row).find('td').contains('Approve').then(($approveCell) => {
              if ($approveCell.length > 0) {
                // You can perform actions on this row
                cy.wrap($row).click(); // Example: Click the row
              }

              
            });
          });
          
        
        


    })
})