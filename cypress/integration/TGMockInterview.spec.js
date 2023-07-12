/// <reference types="cypress"/>

it('should be able to fill out mock interview form', () => {
    cy.visit('https://techglobal-training.com/') 

    cy.get('.navbar-brand > .active').click()
    cy.get('#mock-option').click()

    cy.get(':nth-child(2) > input').type('ramiturkmani')
    cy.get(':nth-child(4) > input').type('techglobal123')
    cy.get('button').click()
}) 