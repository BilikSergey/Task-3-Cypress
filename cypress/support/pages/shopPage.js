/// <reference types="cypress" />

const elements = {
  buttonShop: () => cy.get("#HeaderMenu-shop"),
  buttonAddToCart: () =>
    cy.get(
      "#quick-add-template--14828910739534__product-grid6960027533390-submit"
    ),
  buttonCheckOut: () => cy.get("#CartDrawer-Checkout"),
  dropDownSort: () => cy.get("#SortBy"),
  priceList: () => cy.get(".price-item.price-item--sale.price-item--last"),
  titleList: () => cy.get(".card__heading.h5"),
  titleSwagAlert: () =>
    cy.get(".announcement-bar__link.link.link--text.focus-inset.animate-arrow"),
};

const visitShopPage = () => {
  cy.visit("https://shop.telnyx.com/");
};

const clickButtonShop = () => {
  elements.buttonShop().click();
};

const addToCart = () => {
  elements.buttonAddToCart().click();
  elements.buttonCheckOut().click();
};

const sortByPriceDescending = () => {
  elements.dropDownSort().select("price-descending");
};

const sortByPriceAscending = () => {
  elements.dropDownSort().select("price-ascending");
};

const sortByTitleAscending = () => {
  elements.dropDownSort().select("title-ascending");
};

const sortByTitleDescending = () => {
  elements.dropDownSort().select("title-descending");
};

const clickOnSwagAlert = () => {
  elements.titleSwagAlert().click();
};

export default {
  elements,
  visitShopPage,
  clickButtonShop,
  addToCart,
  sortByPriceDescending,
  sortByPriceAscending,
  sortByTitleAscending,
  sortByTitleDescending,
  clickOnSwagAlert,
};
