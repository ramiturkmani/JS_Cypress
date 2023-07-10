/// <reference types="cypress"/>

it('should be able to add a new todo to the list', () => {
    cy.visit('https://techglobal-training.com/') // Adding '?delay-new-todo=5000' to the end of the URL will delay the 'new-todo' element from appearing for 5 seconds

    // The {timeout: XXXX} parameter can be added as the second parameter in the 'get' method to increase the default timeout of 4 seconds
    cy.get('.navbar-brand > .active').click()
    cy.get('#mock-option').click()

    cy.get(':nth-child(2) > input').type('ramiturkmani')
    cy.get(':nth-child(4) > input').type('techglobal123')
    cy.get('button').click()
})