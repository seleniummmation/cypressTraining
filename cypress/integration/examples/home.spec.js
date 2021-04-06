///<reference types="cypress"/>

Cypress.on('uncaught:exception', (err, Runnable) => {
    return false;
})

beforeEach(function(){

    cy.visit("https://www.ebuyer.com/")
    cy.get('.js-cookie-monster-accept').click()
    cy.title().should('eq', 'Cheap Laptops, Tablet PC, and Cheap LED TVs | Ebuyer.com')
    //cy.title().('contain', 'Cheap Laptops, Tablet PC, and Cheap LED TVs | Ebuyer.com')
    
    })

describe('Search Functionality', function(){

    beforeEach(function(){

        cy.fixture('example').then(function(data) {

            this.data = data
        })
        
        })

    it('Search for a single product - classic', function() {

        /**
         * Below code shows child objects (.type(), .click(), .should() ) 
         * chained to parent object (cy.get())
         * 
         * The type command passess a string argument into the search field once it receives the 
         * subject (DOM element) yielded from the parent command.  
         * 
         * The same applies to the  search button when the click command is in an actionable state
         * 
         * Should command?
         *   
         */
        //cy.get('.js-cookie-monster-accept').click()
        cy.get('#search-box').type('ram')
        cy.get('#search-button').click()
        cy.get('.filter-top > .listing-filter > .showing-container > .showing-count').should('have.text', 'Showing 1 - 24 of 999 results' )
    })

    it('Add single item to basket - index', function() {

        //cy.get('.js-cookie-monster-accept').click()
        cy.get('#search-box').type(this.data.batteries)
        cy.get('#search-button').click({force: true})
 
        //Parent child relationship used to iterate through list of elements returned
        cy.get('#grid-view').find('.js-listing-product').eq(2).contains('Add to Basket').click()
    })

    it.only('Add single item to basket - conditional statement', function() {

        //cy.get('.js-cookie-monster-accept').click()
        cy.get('#search-box').type(this.data.batteries)
        cy.get('#search-button').click({force: true})
        cy.get('.grid-item__title').each(function($ele, index, $list){

            if($ele.text().includes('Apple Watch Series 3 GPS, 38mm Space Grey Aluminium Case with')){
                cy.get('.grid-item__buttons').eq(0).click()
            }  
        })   
    })
})



