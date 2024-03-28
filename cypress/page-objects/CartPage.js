
export default class CartPage {
    static cartLoc = 'a.PageHeaderCart_sf-page-header-cart-button_____ER'
    static viewCartButton = 'button.DlsButton_dls-button__sy9wt btn-hero  btn-small' 
    static getDialogueBox = '.AddProductNotification_sf-add-product-notification-inner-name__zXWDw'
    static viewCartPage = 'div.Toastify__toast-body > div > div > div.AddProductNotification_sf-add-product-notification-actions__cYnUX > button.DlsButton_dls-button__sy9wt.btn-hero.btn-small'
    
    static viewCartDialogueBox(){
    
    cy.get(this.getDialogueBox).should('be.visible')
    cy.get('div.Toastify__toast-body > div > div > div.AddProductNotification_sf-add-product-notification-actions__cYnUX > button.DlsButton_dls-button__sy9wt.btn-hero.btn-small').click()
    cy.get("input[name=cart[3761233][qty]").contains('1')
    
    
    }
        
     }