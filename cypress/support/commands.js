// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
//
Cypress.Commands.add('searchForProduct', (searchKeyword) => {

    //cy.get('.js-cookie-monster-accept').click()
    cy.get('#search-box').type(searchKeyword)
    cy.get('#search-button').click()
})

//
//
Cypress.Commands.add('verifySearchResult', (expected) => {

    cy.get('.filter-top > .listing-filter > .showing-container > .showing-count').each(($ele) => {

        expect($ele).to.contain(expected)
    })

})

//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
