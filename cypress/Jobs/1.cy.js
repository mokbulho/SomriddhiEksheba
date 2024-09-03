describe('Jobs site full automation', () => {
    beforeEach(() => {
        cy.visit('https://jobs.softbd.xyz/');
        cy.viewport(1920, 1080);
    });

    it('Home page', () => {
        cy.window().then((win) => {
            const scrollHeight = win.document.body.scrollHeight;
            for (let i = 0; i <= scrollHeight; i += 200) { // Adjust the step size as needed
                cy.scrollTo(0, i).wait(100); // Adjust the wait time as needed
            }
        });
        cy.window().then((win) => {
            const scrollHeight = win.document.body.scrollHeight;

            // Start from the bottom of the page
            win.scrollTo(0, scrollHeight);

            for (let i = scrollHeight; i >= 0; i -= 200) { // Adjust the step size as needed
                cy.scrollTo(0, i).wait(100); // Adjust the wait time as needed
            }
        });
    });
   
    it('Job Circular', () => {
        cy.get('h2.fw-bold').contains('Job Circular').then(($el) => {
            $el.css('border', '2px solid red');
            $el.css('background-color', 'yellow');
        });
        cy.get('#job_cards_container .col-md-6.mb-4').first().find('a.btn-primary').contains('Details').click();
    });

    // it('Apply job for new user', () => {
    //     cy.contains('a', 'Apply').click();
    //     cy.contains('a', 'Register').click();

    //     // cy.get('input[name="full_name"]').type('John Doe');
    //     // cy.get('input[name="phone_number"]').type('01680881140');
    //     // cy.get('input[name="password"]').type('password');
    //     // cy.get('input[type="submit"].btn.btn-primary.form-control').click();

    // });

    it('View Job details and Login', () => {

    });

    it('View Job details and Login', () => {

    });
});
