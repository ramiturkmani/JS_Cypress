/// <reference types="cypress"/>

it('should be able to see TG Logo', () => {
    cy.visit('https://techglobal-training.com/') // Adding '?delay-new-todo=5000' to the end of the URL will delay the 'new-todo' element from appearing for 5 seconds

     // The {timeout: XXXX} parameter can be added as the second parameter in the 'get' method to increase the default timeout of 4 seconds
    cy.get('.Header_headerContainer__kKEW0 > :nth-child(1) > #logo > img').should('not.be.hidden')
})

it('should be able to see TG Footer', () => {
    cy.visit('https://techglobal-training.com/')

    cy.get('.has-text-centered > :nth-child(1) > p').should('be.visible')
    cy.get('.has-text-centered > :nth-child(1) > p').should('have.text', '2860 S River Rd Suite 480, Des Plaines, IL 60018')

    cy.get('#Footer_facebook__UiT2a > path').should('be.visible')
})

/*
it('should be able to fill out mock interview form', () => {
    cy.visit('https://techglobal-training.com/') 

    cy.get('.navbar-brand > .active').click()
    cy.get('#mock-option').click()

    cy.get(':nth-child(2) > input').type('ramiturkmani')
    cy.get(':nth-child(4) > input').type('techglobal123')
    cy.get('button').click()
}) 
*/
