describe('Login and Form Submission Test', () => {
    before(() => {
        cy.visit('https://jobs.softbd.xyz/');
    });

    it('should log in and fill out the form', () => {
        // Log in
        cy.get('a.btn.me-2.text-primary').click();
        cy.get('input[name="phone_number"]').type('01680881140');
        cy.get('input[name="password"]').type('password');
        cy.get('input[type="submit"].btn.btn-primary.form-control').click();

        // Navigate to the form
        cy.get('a.btn.btn-primary.py-3.px-5').click();

        // Fill out the form
        const formData = {
            full_name: 'John Doe',
            father_name: 'Father Name',
            mother_name: 'Mother Name',
            nid: '1234567890',
            email: 'john.doe@example.com',
            dob: '01/01/1990',
            academic_qualifications: {
                details: "Bachelor's Degree",
                result: 'First Class',
                document: 'marksheet.pdf',
            },
            present_local_address: '123 Present St.',
            present_address_division_id: 'Dhaka',
            present_address_district_id: 'Dhaka',
            present_address_post_office: '1207',
            permanent_local_address: '456 Permanent St.',
            permanent_address_division_id: 'Dhaka',
            permanent_address_district_id: 'Dhaka',
            permanent_address_upazilla_id: 'Dhaka north city corporation',
            permanent_address_post_office: '1207',
            photo: 'ssc.jpg',
            signature: 'hsc.jpg',
        };

        cy.get('input[name="full_name"]').type(formData.full_name);
        cy.get('input[name="father_name"]').type(formData.father_name);
        cy.get('input[name="mother_name"]').type(formData.mother_name);
        cy.get('input[name="nid"]').type(formData.nid);
        cy.get('input[name="email"]').type(formData.email);
        cy.get('input[name="dob"]').type(formData.dob);

        cy.get('input[name="academic_qualifications[0][details]"]').type(formData.academic_qualifications.details);
        cy.get('input[name="academic_qualifications[0][result]"]').type(formData.academic_qualifications.result);
        cy.get('input[name="academic_qualifications[0][document]"]').attachFile(formData.academic_qualifications.document);

        cy.get('input[name="present_local_address"]').type(formData.present_local_address);
        cy.get('select[name="present_address_division_id"]').select(formData.present_address_division_id);
        cy.get('select[name="present_address_district_id"]').select(formData.present_address_district_id);
        cy.get('input[name="present_address_post_office"]').type(formData.present_address_post_office);

        // cy.get('input[name="permanent_local_address"]').type(formData.permanent_local_address);
        // cy.get('select[name="permanent_address_division_id"]').select(formData.permanent_address_division_id);
        // cy.get('select[name="permanent_address_district_id"]').select(formData.permanent_address_district_id);
        // cy.get('select[name="permanent_address_upazilla_id"]').select(formData.permanent_address_upazilla_id);
        // cy.get('input[name="permanent_address_post_office"]').type(formData.permanent_address_post_office);

        cy.get('label.image-upload.square input[name="photo"]').attachFile(formData.photo);
        cy.get('label.image-upload.square input[name="signature"]').attachFile(formData.signature);
        cy.get('input[value="সংরক্ষণ করুন"]').click();


    });
});
