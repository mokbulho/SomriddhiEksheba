
describe('Job Application Site Test', () => {
    const userData = {
        phone_number: '01680881140',
        password: 'password',
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
        present_address: {
            local_address: '123 Present St.',
            division: 'Dhaka',
            district: 'Dhaka',
            post_office: '1207',
        },
        permanent_address: {
            local_address: '456 Permanent St.',
            division: 'Dhaka',
            district: 'Dhaka',
            upazilla: 'Dhaka north city corporation',
            post_office: '1207',
        },
        photo: 'ssc.jpg',
        signature: 'hsc.jpg',
        current_occupation: 'Sr. SQA',
        total_years_of_experience: '15',
        technical_qualification: 'Computer Engineer',
        certificate: 'experience_certificate.jpg',
        organization_name: 'Soft BD Ltd.',
        work_experience_from: '01/01/2023',
        year_of_work: '2',
        place_of_work: 'Bangla Motor, Dhaka',
        earning_salary: '20000',
        work_experiences: [{
            organization_name: 'Tappware Solution Ltd.',
            work_experience_from: '01/01/2010',
            work_experience_to: '01/01/2023',
            year_of_work: '13',
            place_of_work: 'Polton, Dhaka',
            earning_salary: '20000',
        }],
        cv: 'cv.pdf'
    };

    beforeEach(() => {
        cy.visit('https://jobs.softbd.xyz/');
        cy.get('a.btn.me-2.text-primary').click();
        cy.get('input[name="phone_number"]').type(userData.phone_number);
        cy.get('input[name="password"]').type(userData.password);
        cy.get('input[type="submit"].btn.btn-primary.form-control').click();
    });

    it('should fill out the personal information form', () => {
        cy.get('a.btn.btn-primary.py-3.px-5').click();

        cy.get('input[name="full_name"]').type(userData.full_name);
        cy.get('input[name="father_name"]').type(userData.father_name);
        cy.get('input[name="mother_name"]').type(userData.mother_name);
        cy.get('input[name="nid"]').type(userData.nid);
        cy.get('input[name="email"]').type(userData.email);
        cy.get('input[name="dob"]').type(userData.dob);

        cy.get('input[name="academic_qualifications[0][details]"]').type(userData.academic_qualifications.details);
        cy.get('input[name="academic_qualifications[0][result]"]').type(userData.academic_qualifications.result);
        cy.get('input[name="academic_qualifications[0][document]"]').attachFile(userData.academic_qualifications.document);

        cy.get('input[name="present_local_address"]').type(userData.present_address.local_address);
        cy.get('select[name="present_address_division_id"]').select(userData.present_address.division);
        cy.get('select[name="present_address_district_id"]').select(userData.present_address.district);
        cy.get('input[name="present_address_post_office"]').type(userData.present_address.post_office);

        cy.get('input[name="permanent_local_address"]').type(userData.permanent_address.local_address);
        cy.get('select[name="permanent_address_division_id"]').select(userData.permanent_address.division);
        cy.get('select[name="permanent_address_district_id"]').select(userData.permanent_address.district);
        cy.get('select[name="permanent_address_upazilla_id"]').select(userData.permanent_address.upazilla);
        cy.get('input[name="permanent_address_post_office"]').type(userData.permanent_address.post_office);

        cy.get('label.image-upload.square input[name="photo"]').attachFile(userData.photo);
        cy.get('label.image-upload.square input[name="signature"]').attachFile(userData.signature);
    });

    it('should fill out the professional information form', () => {
        cy.get('.p-3 > .btn-primary').click();
        cy.get('.opacity-75 > .flex-grow-1').click();

        cy.get('input[name="current_occupation"]').type(userData.current_occupation);
        cy.get('input[name="total_years_of_experience"]').type(userData.total_years_of_experience);
        cy.get('input[name="technical_qualification"]').type(userData.technical_qualification);
        cy.get('.form-control.file-upload input[name="certificate"]').attachFile(userData.certificate);

        cy.get('input[name="organization_name"]').type(userData.organization_name);
        cy.get('input[name="work_experience_from"]').type(userData.work_experience_from);       
        cy.get('input[name="year_of_work"]').type(userData.year_of_work);
        cy.get('input[name="place_of_work"]').type(userData.place_of_work);
        cy.get('input[name="earning_salary"]').clear().type(userData.earning_salary);

        userData.work_experiences.forEach((experience, index) => {
            cy.get(`input[name="work_experiences[${index}][organization_name]"]`).type(experience.organization_name);
            cy.get(`input[name="work_experiences[${index}][work_experience_from]"]`).type(experience.work_experience_from);
            cy.get(`input[name="work_experiences[${index}][work_experience_to]"]`).type(experience.work_experience_to);
            cy.get(`input[name="work_experiences[${index}][year_of_work]"]`).type(experience.year_of_work);
            cy.get(`input[name="work_experiences[${index}][place_of_work]"]`).type(experience.place_of_work);
            cy.get(`input[name="work_experiences[${index}][earning_salary]"]`).clear().type(experience.earning_salary);
        });

        cy.get('input[name="cv"]').attachFile(userData.cv);
    });
});
