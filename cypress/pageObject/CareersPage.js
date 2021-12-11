const selectors = {
    jobOfferTitle: '.job-offer__title',
    searchFld: '#search-job'
}

class CareersPage {
    getJobOffers() {
        return cy.get(`${selectors.jobOfferTitle}`);
    }

    getJobOffer(jobOfferTitle) {
        return cy.get(`${selectors.jobOfferTitle}:contains(${jobOfferTitle})`);
    }

    getSearchFld() {
        return cy.get(selectors.searchFld)
    }
}

export const careersPageObj = new CareersPage();