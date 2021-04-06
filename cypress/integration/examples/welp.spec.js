///<reference types="cypress"/>

Cypress.on('uncaught:exception', (err, Runnable) => {
    return false;
})

beforeEach(function () {

    cy.visit("https://www.ebuyer.com/")
    cy.get('.js-cookie-monster-accept').click()
    cy.title().should('eq', 'Cheap Laptops, Tablet PC, and Cheap LED TVs | Ebuyer.com')

})

describe('Search Functionality', function () {

    beforeEach(function () {

        cy.fixture('example').then(function (data) {

            this.data = data
        })
    })

    it('Search for a single product - JavaScript', function () {

        this.data.searchKeyword.forEach(function (element) {

            cy.searchForProduct(element)
            cy.verifySearchResult('Showing 1 - 24 of 199 results')
        })
    })
})