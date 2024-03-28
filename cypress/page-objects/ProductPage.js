
export default class ProductPage {

    static productUrl = "https://www.harveynorman.com.au/google-nest-cam-outdoor-or-indoor-battery-1-pack.html"
    static addToCart = 'div.CtaButtons_cta-buttons-row__gqMoi'
    
    static clickProductUrl(){
    
    cy.visit(this.productUrl)
    
    }
    static clickAddToCart(){
    
    cy.get(this.addToCart).click()
    
    }
    
    }