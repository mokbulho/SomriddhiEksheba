describe('Institute Onboarding', () => {
    it('Institute Onboarding', () => {
        cy.visit('https://polytechnic.aalo.xyz/');
        cy.viewport(1920, 1080);
        cy.get(':nth-child(2) > .input-group > .form-control').type('admin@gmail.com');
        cy.get(':nth-child(3) > .input-group > .form-control').type('password');
        cy.get('.common-submit-button-gradient').click();
        cy.get('input[placeholder="Select Rank"]').click()
        .get('#select2-institute_id-container').contains('Mokbul Polytechnic Institute').click();



    })
})