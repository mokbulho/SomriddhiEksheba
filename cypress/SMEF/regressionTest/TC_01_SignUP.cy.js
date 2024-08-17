describe('SMEF Loan User SignUp', () => {
    it('SignUp', () => {
      cy.visit('https://parabank.parasoft.com')
      cy.get("input[name='username']").type('sdfsd')
      cy.get("input[name='password']").type('qqqqqq')
      cy.get("input[value='Log In']").click()
      cy.get("a[href='activity.htm?id=23556']").click()
      cy.get("#month").select("June")
      cy.get("#transactionType").select("Credit")
      cy.get("input[value='Go']").click()
  
    })
  })
