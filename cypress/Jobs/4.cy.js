describe('Login Button Test', () => {
    it('should find the login button using CSS selector', () => {
        cy.visit('https://jobs.softbd.xyz/');
        cy.get('a.btn.me-2.text-primary').should('exist').click();
        cy.get('input[name="phone_number"]').type('01680881140');
        cy.get('input[name="password"]').type('password');
        cy.get('input[type="submit"].btn.btn-primary.form-control').click();
        cy.get('a.btn.btn-primary.py-3.px-5').click();

        cy.get('input[name="full_name"]').type('John Doe');
        cy.get('input[name="father_name"]').type('Father Name');
        cy.get('input[name="mother_name"]').type('Mother Name');
        cy.get('input[name="nid"]').type('1234567890');
        cy.get('input[name="email"]').type('john.doe@example.com');
        cy.get('input[name="dob"]').type('01/01/1990');
        cy.get('input[name="academic_qualifications[0][details]"]').type('Bachelor\'s Degree');
        cy.get('input[name="academic_qualifications[0][result]"]').type('First Class');
        
        // cy.get('label.form-control.file-upload').attachFile('');
        // cy.get('input[name="academic_qualifications[0][document]"]').click();

        //cy.get('#field-value file-upload', {includeShadowDom:true}).attachFile(['Hons.jpg']);


        cy.get('input[name="academic_qualifications[0][document]"]').attachFile('marksheet.pdf');




               

        // cy.get('input[name="present_local_address"]').type('123 Present St.');
        // cy.get('select[name="present_address_division_id"]').select('Dhaka');
        // cy.get('select[name="present_address_district_id"]').select('Dhaka');
        // cy.get('input[name="present_address_post_office"]').type('1207');

        // cy.get('input[name="permanent_local_address"]').type('456 Permanent St.');
        // cy.get('select[name="permanent_address_division_id"]').select('Dhaka');
        // cy.get('select[name="permanent_address_district_id"]').select('Dhaka');
        // cy.get('select[name="permanent_address_upazilla_id"]').select('Dhaka north city corporation');
        // cy.get('input[name="permanent_address_post_office"]').type('1207');

        // cy.get('label.image-upload.square input[name="photo"]').attachFile('ssc.jpg');
        // cy.get('label.image-upload.square input[name="signature"]').attachFile('hsc.jpg');

    });
});
