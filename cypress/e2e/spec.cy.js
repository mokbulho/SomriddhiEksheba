/// <reference types="Cypress" />
describe('Launch The application', () => {
  it('passes', () => {
    cy.visit('https://www.saucedemo.com/')
  })
})