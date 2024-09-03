Cypress.Commands.add('visitJobSite', () => {
    cy.visit('https://jobs.softbd.xyz/');
});

Cypress.Commands.add('applyForJob', (fullName, phoneNumber, password, otpDigits) => {
    cy.get(':nth-child(1) > .card > .d-flex > .mt-3 > .me-2').first().click();
    cy.get('a.btn.btn-primary.fs-6').contains('আবেদন').click();
    cy.get('.text-center.my-3.text-black-50').find('a').contains('নিবন্ধন করুন').click();

    cy.get('input[name="full_name"]').type(fullName);
    cy.get('input[name="phone_number"]').type(phoneNumber);
    cy.get('input[name="password"]').type(password);
    cy.get('input[type="submit"].btn.btn-primary.form-control').click();

    cy.get('#otp_546').within(() => {
        otpDigits.forEach((digit, index) => {
            cy.get(`#opt_input_${index}_546 .otp-content`).should('contain.text', digit);
        });
    });
    cy.get('input[type="submit"].btn.btn-primary.form-control.mt-4.fw-medium').click();
});

// Optimized test suite
describe('Jobs site full automation', () => {
    beforeEach(() => {
        cy.visitJobSite();
    });

    it('Should display and interact with job sections and details', () => {
        // cy.scrollTo('bottom');
        // cy.wait(2000);
        // cy.scrollTo('top');
        // cy.wait(2000);
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
        cy.get('.col-md-6 h2.fw-bold')
          .contains('নিয়োগ বিজ্ঞপ্তি')
          .should('be.visible')
          .then(($el) => {
              $el.css('border', '2px solid red');
              $el.css('background-color', 'yellow');
          });
          cy.wait(2000);
        cy.get(':nth-child(1) > .card > .d-flex > .mt-3 > .me-2').first().click();
        // cy.scrollTo('bottom');
        // cy.wait(2000);
        // cy.scrollTo('top');
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

    it('Should apply for a job', () => {
        cy.applyForJob('John Doe', '01680881145', 'password', ['1', '2', '3', '4']);
    });
});
