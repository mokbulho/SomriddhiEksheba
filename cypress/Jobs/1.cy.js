describe('Job site automations', () => {

    // it('View Job Home page', () => {
    //     cy.visit('https://jobs.softbd.xyz/');
    //     cy.scrollTo('bottom');
    //     cy.wait(1000);
    //     cy.scrollTo('top');
    // })

    // it('View Job Home page', () => {
    //     cy.visit('https://jobs.softbd.xyz/');
    //     cy.get(':nth-child(1) > .card > .d-flex > .mt-3 > .me-2').first().click();
    //     cy.scrollTo('bottom');
    //     cy.wait(1000);
    //     cy.scrollTo('top');
    // })

    // it('New Registration', () => {
    //     cy.visit('https://jobs.softbd.xyz/');
    //     cy.get('.text-end > .me-4').click();
    //     cy.get('input[name="full_name"]').type('Ariful Islam');
    //     cy.get('input[name="phone_number"]').type('01550703082');
    //     cy.get('input[name="password"]').type('password');
    //     cy.get('input[type="submit"].btn.btn-primary.form-control').click();
    // })

    it('Login', () => {
        cy.visit('https://jobs.softbd.xyz/');
        cy.get('a.btn.me-2.text-primary').click();
        cy.get('input[name="phone_number"]').type('01550703082');
        cy.get('input[name="password"]').type('password');
        cy.get('input[type="submit"].btn.btn-primary.form-control').click();
        cy.get('.d-flex > .btn').click();

        cy.get('input[name="full_name"]').type('Joddhn Doe');
        cy.get('input[name="father_name"]').type('Fatdher Name');
        cy.get('input[name="mother_name"]').type('Modther Name');
        cy.get('input[name="nid"]').type('1234467890');
        cy.get('input[name="email"]').type('john.doe@example.com');
        cy.get('input[name="dob"]').type('01/01/1990');
        cy.get('input[name="academic_qualifications[0][details]"]').type('Bachelor\'s Degree');
        cy.get('input[name="academic_qualifications[0][result]"]').type('First Class');
        cy.get('input[name="academic_qualifications[0][document]"]').attachFile('marksheet.pdf');
        cy.get('input[name="present_local_address"]').type('123 Present St.');
        cy.get('select[name="present_address_division_id"]').select('Dhaka');
        cy.get('select[name="present_address_district_id"]').select('Dhaka');
        cy.get('input[name="present_address_post_office"]').type('1207');
        cy.get('label.image-upload.square input[name="photo"]').attachFile('ssc.jpg');
        cy.get('label.image-upload.square input[name="signature"]').attachFile('hsc.jpg');
        cy.get('input.btn.btn-primary.px-4.py-2.fw-medium').click();   

    });

})