import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
const shopPage = require("../../pages/shopPage");

Given("User is on the shop page", () => {
  shopPage.visitShopPage();
  shopPage.clickButtonShop();
});

When("User adds an item to the cart", () => {
  shopPage.addToCart();
});

Then("The item should appear in the cart", () => {
  shopPage.formOfWareAtCart.should("exist");
});

When("User sorts items by descending price", () => {
  shopPage.sortByPriceDescending();
  cy.wait(2000);
});

Then("Items should be sorted by descending price", () => {
  shopPage.priceList.should("have.length.greaterThan", 0).then(($prices) => {
    const priceArray = Cypress._.map($prices, (el) =>
      parseFloat(el.innerText.replace(/[^0-9.]/g, ""))
    );
    const sortedArray = [...priceArray].sort((a, b) => b - a);
    expect(priceArray).to.deep.equal(sortedArray);
  });
});

When("User sorts items by ascending price", () => {
  shopPage.sortByPriceAscending();
  cy.wait(2000);
});

Then("Items should be sorted by ascending price", () => {
  shopPage.priceList.should("have.length.greaterThan", 0).then(($prices) => {
    const priceArray = Cypress._.map($prices, (el) =>
      parseFloat(el.innerText.replace(/[^0-9.]/g, ""))
    );
    const sortedArray = [...priceArray].sort((a, b) => a - b);
    expect(priceArray).to.deep.equal(sortedArray);
  });
});

When("User sorts items by ascending title", () => {
  shopPage.sortByTitleAscending();
  cy.wait(2000);
});

Then("Items should be sorted by ascending title", () => {
  shopPage.titleList.should("have.length.greaterThan", 0).then(($titles) => {
    const titleArray = Cypress._.map($titles, (el) => el.innerText.trim());
    const sortedArray = [...titleArray].sort();
    expect(titleArray).to.deep.equal(sortedArray);
  });
});

When("User sorts items by descending title", () => {
  shopPage.sortByTitleDescending();
  cy.wait(2000);
});

Then("Items should be sorted by descending title", () => {
  shopPage.titleList.should("have.length.greaterThan", 0).then(($titles) => {
    const titleArray = Cypress._.map($titles, (el) => el.innerText.trim());
    const sortedArray = [...titleArray].sort().reverse();
    expect(titleArray).to.deep.equal(sortedArray);
  });
});

When("User clicks on Swag Alert", () => {
  shopPage.clickOnSwagAlert();
});

Then("Swag Alert item details should be visible", () => {
  shopPage.pictureOfWareSwagAlert.should("exist");
  shopPage.titleOfWareSwagAlert.should("exist");
  shopPage.priceOfWareSwagAlert.should("exist");
});

When("Type data in the search input", () => {
  shopPage.searchHat();
});

Then("Certain item appeared", () => {
  shopPage.wareHat.should("exist");
  shopPage.searchResult.should("contain.text", "1");
});

When("Add item to cart, then delete", () => {
  shopPage.deleteWareAtCart();
});

Then("The cart is empty", () => {
  shopPage.cartEmptyText.should("contain.text", "Your cart is empty");
  shopPage.buttonContinueShopping.should("exist");
});
