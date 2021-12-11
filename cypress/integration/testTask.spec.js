import { homePageObj } from "../pageObject/HomePage";
import { careersPageObj } from "../pageObject/CareersPage";

describe('Test task for QA automation position', () => {
    beforeEach('Preconditions', () => {
        // GIVEN a user is on the 10C home page
        cy.visit('/');
        // WHEN the user clicks Careers tab
        homePageObj.getMenuItem('careers').click();
        // THEN Careers page is open
        cy.url().should('equal', `${Cypress.config().baseUrl}/careers/`);
    })

    it('Scenario 1', () => {
        // AND the page contains exactly 1 'QA Automation Engineer (Cypress)' role open
        careersPageObj.getJobOffer('QA Automation Engineer (Cypress)')
            .its('length')
            .should('eq', 1);
    })

    it('Scenario 2', () => {
        // WHEN the user types 'Automation' in Search jobs input
        careersPageObj.getSearchFld().type('Automation');
        // THEN each result contains "Automation" in title
        careersPageObj.getJobOffers().each(($title) => {
            expect($title).contain('Automation');
        });
    });
})