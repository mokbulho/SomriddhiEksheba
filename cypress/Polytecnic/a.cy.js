describe('Job site automations', () => {
    it('Login', () => {
        cy.visit('https://polytechnic.aalo.xyz');
        cy.get('input[name="email"]').type('admin@gmail.com')
        cy.get('input[name="password"]').type('password');
        cy.get('button.common-submit-button-gradient').contains('Login').click();
     
        cy.get('#select2-institute_id-container').click('');
        cy.get('.select2-selection__rendered').type('MIST').type('{enter}');
    
        
        cy.get('.text-right > .btn').click();







    });

   /* it('Login', () => {

    });
    it('Login', () => {

    });
    it('Login', () => {

    });
    it('Login', () => {

    });
    */


})