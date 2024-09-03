describe('Jobs site full automation', () => {
    it('Home page', () => {
        cy.visit('https://jobs.softbd.xyz/');
        cy.viewport(1920, 1080);
        cy.scrollTo('bottom');
        cy.wait(3000);
        cy.scrollTo('top');
        //cy.get('h2.fw-bold').contains('Job Circular').should('be.visible');
        cy.get('h2.fw-bold').contains('Job Circular').then(($el) => {
            // Apply CSS to highlight the element
            $el.css('border', '2px solid red');
            $el.css('background-color', 'yellow');
        });
    })
    
    it('View Job details', () => {
        cy.visit('https://jobs.softbd.xyz/');
        cy.viewport(1920, 1080);
        cy.get(':nth-child(1) > .card > .d-flex > .mt-3 > .me-2').first().click();
        cy.scrollTo('bottom');
        cy.wait(3000);
        cy.scrollTo('top');
        cy.get('a.btn.btn-primary.fs-6[href="https://jobs.softbd.xyz/login"]').click();
        cy.get('input[name="phone_number"]').type('01722354001');
        cy.get('input[type="password"]').type('Test@2024');
        cy.get('input[value="Login"]').click();
        cy.get('.p-3 > .btn-primary').click();
        cy.scrollTo('bottom');
        cy.get('.mt-5 > .btn-primary').click();
        cy.scrollTo('bottom');
        cy.get('.d-flex > .btn-primary').click();
    })

    it('View Job details', () => {
        cy.visit('https://jobs.softbd.xyz/');
        cy.viewport(1920, 1080);
        cy.get('.p-3 > .btn-primary').click();
        cy.scrollTo('bottom');
        cy.get('.mt-5 > .btn-primary').click();
        cy.scrollTo('bottom');
        cy.get('.d-flex > .btn-primary').click();
    })
})