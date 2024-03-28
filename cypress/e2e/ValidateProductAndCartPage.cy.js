/// <reference types = "cypress" />
import CartPage from "../page-objects/CartPage"
import ProductPage from "../page-objects/ProductPage"

it('Add product to cart' , function(){
  
  ProductPage.clickProductUrl()
  ProductPage.clickAddToCart()
  CartPage.viewCartDialogueBox()
  
})