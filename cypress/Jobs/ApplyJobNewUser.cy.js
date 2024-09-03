describe('Jobs site full automation', () => {
    beforeEach(() => {
        cy.visit('https://jobs.softbd.xyz/');
    });

    function scrollPage(direction = 'down', step = 200, waitTime = 10) {
        cy.window().then((win) => {
            const scrollHeight = win.document.body.scrollHeight;
            const scrollStep = direction === 'down' ? step : -step;

            for (let i = direction === 'down' ? 0 : scrollHeight; 
                 direction === 'down' ? i <= scrollHeight : i >= 0; 
                 i += scrollStep) {
                cy.scrollTo(0, i).wait(waitTime);
            }
        });
    }

    function applyForJob(fullName, phoneNumber, password, otpDigits) {
        cy.get(':nth-child(1) > .card > .d-flex > .mt-3 > .me-2').first().click();
        cy.get('a.btn.btn-primary.fs-6').contains('আবেদন').click();
        cy.get('.text-center.my-3.text-black-50').find('a').contains('নিবন্ধন করুন').click();

        cy.get('input[name="full_name"]').type(fullName);
        cy.get('input[name="phone_number"]').type(phoneNumber);
        cy.get('input[name="password"]').type(password);
        cy.get('input[type="submit"].btn.btn-primary.form-control').click();

        cy.get('#otp_546').within(() => {
            otpDigits.forEach((digit, index) => {
                cy.get(`#opt_input_${index}_546 .otp-content`).should('contain.text', digit).type('');
            });
        });
        cy.get('input[type="submit"].btn.btn-primary.form-control.mt-4.fw-medium').click();
    }

    it('Should display and interact with job sections and details', () => {
        // Scroll down and up
        scrollPage('down');
        scrollPage('up');

        cy.get('.col-md-6 h2.fw-bold')
          .contains('নিয়োগ বিজ্ঞপ্তি')
          .should('be.visible')
          .then(($el) => {
              $el.css('border', '2px solid red');
              $el.css('background-color', 'yellow');
          });

        cy.wait(2000); // Consider replacing with a more specific wait if necessary
        cy.get(':nth-child(1) > .card > .d-flex > .mt-3 > .me-2').first().click();
        scrollPage('down');
        scrollPage('up');
    });

    it('Should apply for a job', () => {
        applyForJob('John Doe', '01740060542', 'password', ['', '', '', '']);
    });
});
