//import { userData } from '../fixtures/userConfig';
import { userData } from '../support/userConfig';


describe('Login and Form Submission Test', () => {
    it('should log in and submit the form with user data', () => {
        cy.visit('https://jobs.softbd.xyz/');
        cy.get('a.btn.me-2.text-primary').click();
        cy.get('input[name="phone_number"]').type(userData.phoneNumber);
        cy.get('input[name="password"]').type(userData.password);
        cy.get('input[type="submit"].btn.btn-primary.form-control').click();
        cy.get('a.btn.btn-primary.py-3.px-5').click();
        
        // Personal Information
        cy.get('input[name="full_name"]').type(userData.fullName);
        cy.get('input[name="father_name"]').type(userData.fatherName);
        cy.get('input[name="mother_name"]').type(userData.motherName);
        cy.get('input[name="nid"]').type(userData.nid);
        cy.get('input[name="email"]').type(userData.email);
        cy.get('input[name="dob"]').type(userData.dob);
        
        // Academic Qualifications
        cy.get('input[name="academic_qualifications[0][details]"]').type(userData.academicDetails.degree);
        cy.get('input[name="academic_qualifications[0][result]"]').type(userData.academicDetails.result);
        cy.get('input[name="academic_qualifications[0][document]"]').attachFile(userData.academicDetails.document);
        
        // Address Information
        cy.get('input[name="present_local_address"]').type(userData.addresses.present.address);
        cy.get('select[name="present_address_division_id"]').select(userData.addresses.present.division);
        cy.get('select[name="present_address_district_id"]').select(userData.addresses.present.district);
        cy.get('input[name="present_address_post_office"]').type(userData.addresses.present.postOffice);
        cy.get('input[name="permanent_local_address"]').type(userData.addresses.permanent.address);
        cy.get('select[name="permanent_address_division_id"]').select(userData.addresses.permanent.division);
        cy.get('select[name="permanent_address_district_id"]').select(userData.addresses.permanent.district);
        cy.get('select[name="permanent_address_upazilla_id"]').select(userData.addresses.permanent.upazila);
        cy.get('input[name="permanent_address_post_office"]').type(userData.addresses.permanent.postOffice);
        
        // Attachments
        cy.get('label.image-upload.square input[name="photo"]').attachFile(userData.photo);
        cy.get('label.image-upload.square input[name="signature"]').attachFile(userData.signature);
        
        // Work Experience
        const experience = userData.workExperience[0];
        cy.get('input[name="work_experiences[0][organization_name]"]').type(experience.organization);
        cy.get('input[name="work_experiences[0][work_experience_from]"]').type(experience.from);
        cy.get('input[name="work_experiences[0][work_experience_to]"]').type(experience.to);
        cy.get('input[name="work_experiences[0][year_of_work]"]').type(experience.yearsOfWork);
        cy.get('input[name="work_experiences[0][place_of_work]"]').type(experience.placeOfWork);
        cy.get('input[name="work_experiences[0][earning_salary]"]').clear().type(experience.salary);
        
        // CV Upload
        cy.get('input[name="cv"]').attachFile(userData.cv);
        
        // Submit the form if required
        // cy.get('input.btn.btn-primary.px-4.py-2.fw-medium').click();        
    });
});
