/// <reference types="cypress"/>

import { TGHomePage } from '../page_objects/TGHomePage.js';

describe('home page verification', () => {
    const homePage = new TGHomePage()

    beforeEach(() => {
        homePage.navigate()
    })

    it('should be able to see TG Logo', () => {
        homePage.logoVisibility()
    })

    it('should be able to see TG Footer', () => {
        homePage.addressValidation('2860 S River Rd Suite 480, Des Plaines, IL 60018')
        homePage.facebookLinkValidation()
        homePage.instagramLinkValidation()
        homePage.copyrightValidation('© 2023 TechGlobal - All Rights Reserved')
    })
})