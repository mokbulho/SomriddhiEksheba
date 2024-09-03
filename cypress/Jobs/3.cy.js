describe('Jobs site full automation', () => {
    it('TC_1: Home page', () => {
        cy.visit('https://jobs.softbd.xyz/');
    });

    it('TC_2: Job section', () => {
        cy.visit('https://jobs.softbd.xyz/');
        cy.get('.col-md-6 h2.fw-bold').contains('নিয়োগ বিজ্ঞপ্তি').then(($el) => {
            $el.css('border', '2px solid red');
            $el.css('background-color', 'yellow');
        });
    });

    it('TC_3: Job details', () => {
        cy.visit('https://jobs.softbd.xyz/');
        cy.get(':nth-child(1) > .card > .d-flex > .mt-3 > .me-2').first().click();
    });

    it('TC_4: Apply', () => {
        cy.visit('https://jobs.softbd.xyz/');
        cy.get(':nth-child(1) > .card > .d-flex > .mt-3 > .me-2').first().click();
        cy.get('a.btn.btn-primary.fs-6').contains('আবেদন').click();
        // cy.contains('a', 'আবেদন');
        cy.get('.text-center.my-3.text-black-50').find('a').contains('নিবন্ধন করুন').click();
    });

    it('TC_5: Apply', () => {
        cy.visit('https://jobs.softbd.xyz/');
        cy.get(':nth-child(1) > .card > .d-flex > .mt-3 > .me-2').first().click();
        cy.get('a.btn.btn-primary.fs-6').contains('আবেদন').click();
        cy.get('.text-center.my-3.text-black-50').find('a').contains('নিবন্ধন করুন').click();
        cy.get('input[name="full_name"]').type('John Doe');
        cy.get('input[name="phone_number"]').type('01680881143');
        cy.get('input[name="password"]').type('password');
        cy.get('input[type="submit"].btn.btn-primary.form-control').click();

        const otpDigits = ['', '', '', '']; // Example OTP digits

        cy.get('#otp_546').within(() => {
            otpDigits.forEach((digit, index) => {
                cy.get(`#opt_input_${index}_546 .otp-content`).should('contain.text', digit);
            });
        });
        cy.get('input[type="submit"].btn.btn-primary.form-control.mt-4.fw-medium').click();
    });


    it('TC_5: Apply', () => {

    });

    it('TC_5: Apply', () => {
        
    });

    it('TC_5: Apply', () => {
        
    });

    it('TC_5: Apply', () => {
        
    });

});