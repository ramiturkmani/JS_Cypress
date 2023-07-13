/// <reference types="cypress"/>

describe('mock interview functionality', () => {
    it('should be able to navigate to the mock interview page', () => {
        cy.visit('https://techglobal-training.com/')
    
        cy.get('.navbar-brand > .active').click()
        cy.get('#mock-option').click()
    })
    
    it('should be able to fill out mock interview form', () => {
        cy.get(':nth-child(2) > input').type('ramiturkmani')
        cy.get(':nth-child(4) > input').type('techglobal123')
        cy.get('button').click()
    }) 
})