export class TGHomePage {

    navigate() {
        cy.visit('https://techglobal-training.com/') // Adding '?delay-new-todo=5000' to the end of the URL will delay the 'new-todo' element from appearing for 5 seconds
    }

    logoVisibility() {
        cy.get('.Header_headerContainer__kKEW0 > :nth-child(1) > #logo > img').should('be.visible')
        // The {timeout: XXXX} parameter can be added as the second parameter in the 'get' method to increase the default timeout of 4 seconds
    }

    addressValidation(expectedText) {
        cy.get('.has-text-centered > :nth-child(1) > p').should('be.visible')
        cy.get('.has-text-centered > :nth-child(1) > p').should('have.text', expectedText)
    }

    facebookLinkValidation() {
        cy.get('#Footer_facebook__UiT2a > path')
        cy.get('[href="https://www.facebook.com/techglobaleducation"]')
    }

    instagramLinkValidation() {
        cy.get('#Footer_instagram__0NXVy')
        cy.get('[href="https://www.instagram.com/techglobal.school/?hl=en"]')
    }

    copyrightValidation(expectedText) {
        cy.get('.has-text-centered > :nth-child(3) > p').should('be.visible')
        cy.get('.has-text-centered > :nth-child(3) > p').should('have.text', expectedText)
    }
    
}