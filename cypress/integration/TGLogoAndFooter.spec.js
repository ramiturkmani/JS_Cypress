/// <reference types="cypress"/>

describe('home page verification', () => {

    beforeEach(() => {
        cy.visit('https://techglobal-training.com/') // Adding '?delay-new-todo=5000' to the end of the URL will delay the 'new-todo' element from appearing for 5 seconds
    })

    it('should be able to see TG Logo', () => {
        cy.get('.Header_headerContainer__kKEW0 > :nth-child(1) > #logo > img').should('be.visible')
        // The {timeout: XXXX} parameter can be added as the second parameter in the 'get' method to increase the default timeout of 4 seconds
    })

    it('should be able to see TG Footer', () => {
        cy.get('.has-text-centered > :nth-child(1) > p').should('be.visible')
        cy.get('.has-text-centered > :nth-child(1) > p').should('have.text', '2860 S River Rd Suite 480, Des Plaines, IL 60018')

        cy.get('#Footer_facebook__UiT2a > path').should('be.visible')
        cy.get('[href="https://www.facebook.com/techglobaleducation"]').should('not.be.empty')

        cy.get('#Footer_instagram__0NXVy').should('be.visible')
        cy.get('[href="https://www.instagram.com/techglobal.school/?hl=en"]').should('not.be.empty')

        cy.get('.has-text-centered > :nth-child(3) > p').should('be.visible')
        cy.get('.has-text-centered > :nth-child(3) > p').should('have.text', '© 2023 TechGlobal - All Rights Reserved')
    })
})