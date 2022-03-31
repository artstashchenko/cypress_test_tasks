describe('24MX set of tests', function() {
    it('Visit the product page list', function() {

        cy.viewport('macbook-15')
        cy.visit('/')
  
        cy.get('.m-navigation-item__h').first().click()
        cy.wait(10000)
        cy.get('.m-navigation-sub-item').first().click()
        cy.wait(25000)
 
        cy.get('.o-productlist__wrapper').should('exist')
    })

    it('Check cookie dialog presents', function() {

        cy.viewport('macbook-15')
        cy.visit('/')    

        cy.wait(7000)
        cy.get('[id^=CybotCookiebotDialogBodyLevelButtonAccept]').click()
        cy.wait(7000)
 
        cy.get('[id^=CybotCookiebotDialog]').should('not.be.visible')        
    })

    it('Check add product to the basket e2e', function() {

        cy.viewport('macbook-15')
        cy.visit('https://www.24mx.ie/odziez-mx_c299/komplety-mx_c304/komplet-cross-raven-rival-czarny_pid-PP-4928473')

        cy.get('.o-variations .m-variation').first().click()
        cy.get('.m-select__container .a-select-item').first().click()
        cy.get('.o-variations .m-variation').eq(1).click()
        cy.get('.m-select--active .a-select-item').eq(1).click()
        cy.get('.qa-pdp-add-to-cart-btn').click()
        cy.wait(15000)
        cy.visit('https://www.24mx.ie/checkout')
        cy.wait(15000)

        cy.get('.m-checkout-list__item-content-text').should('be.visible')
    })

    it('Check Search functionality', function() {

            cy.viewport('macbook-15')  
            cy.visit('/')

            cy.get('[id^=search-desktop]').type('Raven{enter}')
            
            cy.get('.o-productlist__wrapper').should('exist')

        })

    it('Check Outlet page', function() {

            cy.viewport('macbook-15')
    
            cy.visit('https://www.24mx.ie/outlet')
            cy.get('.o-outlet-categories__container').eq(2).click()
            cy.wait(5000)
            cy.get('.icon-sb-mx-oil').click()
            cy.wait(5000)
      
            cy.get('.o-productlist__wrapper').should('exist')
        })
})