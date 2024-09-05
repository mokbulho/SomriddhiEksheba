describe('Login Button Test', () => {
    it('should find the login button using CSS selector', () => {
        cy.visit('https://jobs.softbd.xyz/');
        cy.get('a.btn.me-2.text-primary').should('exist').click();
        cy.get('input[name="phone_number"]').type('01680881140');
        cy.get('input[name="password"]').type('password');
        cy.get('input[type="submit"].btn.btn-primary.form-control').click();
        cy.get('.p-3 > .btn-primary').click();
        cy.get('.opacity-75 > .flex-grow-1').click();

        cy.get('input[name="current_occupation"]').type('Sr. SQA');
        cy.get('input[name="total_years_of_experience"]').type('15');
        cy.get('input[name="technical_qualification"]').type('Computer Engineer');
        cy.get('.form-control.file-upload input[name="certificate"]').attachFile('experience_certificate.jpg');
        cy.get('input[name="organization_name"]').type('Soft BD Ltd.');
        cy.get('input[name="work_experience_from"]').type('01/01/2023');       
         cy.get('label.form-control.user-select-none').click();     
        cy.get('input[name="year_of_work"]').type('2');
        cy.get('input[name="place_of_work"]').type('Bangla Motor, Dhaka');
        cy.get('input[name="earning_salary"]').clear().type('20000');
        cy.get('input[name="work_experiences[0][organization_name]"]').type('Tappware Solution Ltd.');
        cy.get('input[name="work_experiences[0][work_experience_from]"]').type('01/01/2010');
        cy.get('input[name="work_experiences[0][work_experience_to]"]').type('01/01/2023'); 
        cy.get('input[name="work_experiences[0][year_of_work]"]').type('13');
        cy.get('input[name="work_experiences[0][place_of_work]"]').type('Polton, Dhaka');
        cy.get('input[name="work_experiences[0][earning_salary]"]').clear().type('20000');
        cy.get('input[name="cv"]').attachFile('cv.pdf');
        //cy.get('input.btn.btn-primary.px-4.py-2.fw-medium').click();        

    });
});
