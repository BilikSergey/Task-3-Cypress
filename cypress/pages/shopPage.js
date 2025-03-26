/// <reference types="cypress" />

class ShopPage {
  get buttonShop() {
    return cy.get("#HeaderMenu-shop");
  }

  get buttonAddToCart() {
    return cy.get(
      "#quick-add-template--14828910739534__product-grid6960027533390-submit"
    );
  }

  get buttonCheckOut() {
    return cy.get("#CartDrawer-Checkout");
  }

  get dropDownSort() {
    return cy.get("#SortBy");
  }

  get priceList() {
    return cy.get(".price-item.price-item--sale.price-item--last");
  }

  get titleList() {
    return cy.get(".card__heading.h5");
  }

  get titleSwagAlert() {
    return cy.get(
      ".announcement-bar__link.link.link--text.focus-inset.animate-arrow"
    );
  }

  get formOfWareAtCart() {
    return cy.get(
      "._1ip0g651._1ip0g650._1fragemlt._1fragem46._1fragem5z._1fragem2s"
    );
  }

  get pictureOfWareSwagAlert() {
    return cy.get(".product__media.media.media--transparent");
  }

  get titleOfWareSwagAlert() {
    return cy.get(".product__title");
  }

  get priceOfWareSwagAlert() {
    return cy.get("#price-template--14828910936142__main");
  }

  get buttonSearch() {
    return cy.get(".modal__toggle-open.icon.icon-search");
  }

  get inputSearch() {
    return cy.get("#Search-In-Modal");
  }

  get wareHat() {
    return cy.get(
      '[href="/products/telnyx-classic-hat?_pos=1&_sid=49e3d99ce&_ss=r"]'
    );
  }

  get searchResult() {
    return cy.get("#ProductCountDesktop");
  }

  get cartDeleteButton() {
    return cy.get(".icon.icon-remove");
  }

  get cartEmptyText() {
    return cy.get(".cart__empty-text");
  }

  get buttonContinueShopping() {
    return cy.get(".drawer__close");
  }

  visitShopPage() {
    cy.visit("https://shop.telnyx.com/");
  }

  clickButtonShop() {
    this.buttonShop.click();
  }

  addToCart() {
    this.buttonAddToCart.click();
    this.buttonCheckOut.click();
  }

  sortByPriceDescending() {
    this.dropDownSort.select("price-descending");
  }

  sortByPriceAscending() {
    this.dropDownSort.select("price-ascending");
  }

  sortByTitleAscending() {
    this.dropDownSort.select("title-ascending");
  }

  sortByTitleDescending() {
    this.dropDownSort.select("title-descending");
  }

  clickOnSwagAlert() {
    this.titleSwagAlert.click();
  }

  deleteWareAtCart() {
    this.buttonAddToCart.click();
    this.cartDeleteButton.click();
  }

  searchHat() {
    this.buttonSearch.click();
    this.inputSearch.type("hat");
    this.inputSearch.type("{enter}");
  }
}

module.exports = new ShopPage();
