import shopPage from "../support/pages/shopPage";

describe("Shop Test", () => {
  beforeEach(() => {
    shopPage.visitShopPage();
    shopPage.clickButtonShop();
  });

  it("add ware to cart", () => {
    shopPage.addToCart();
    cy.get(
      "._1ip0g651._1ip0g650._1fragemlo._1fragem46._1fragem5z._1fragem2s"
    ).should("exist");
  });

  it("sort by descending price", () => {
    shopPage.sortByPriceDescending();
    cy.wait(2000);
    shopPage.elements
      .priceList()
      .should("have.length.greaterThan", 0)
      .then(($prices) => {
        const priceArray = Cypress._.map($prices, (el) =>
          parseFloat(el.innerText.replace(/[^0-9.]/g, ""))
        );
        const sortedArray = [...priceArray].sort((a, b) => b + a);
        expect(priceArray).to.deep.equal(sortedArray);
      });
  });

  it("sort by ascending price", () => {
    shopPage.sortByPriceAscending();
    cy.wait(2000);
    shopPage.elements
      .priceList()
      .should("have.length.greaterThan", 0)
      .then(($prices) => {
        const priceArray = Cypress._.map($prices, (el) =>
          parseFloat(el.innerText.replace(/[^0-9.]/g, ""))
        );
        const sortedArray = [...priceArray].sort((a, b) => a - b);
        expect(priceArray).to.deep.equal(sortedArray);
      });
  });

  it("sort by ascending title", () => {
    shopPage.sortByTitleAscending();
    cy.wait(2000);
    shopPage.elements
      .titleList()
      .should("have.length.greaterThan", 0)
      .then(($titles) => {
        const titleArray = Cypress._.map($titles, (el) => el.innerText.trim());
        const sortedArray = [...titleArray].sort();
        expect(titleArray).to.deep.equal(sortedArray);
      });
  });

  it("sort by descending title", () => {
    shopPage.sortByTitleDescending();
    cy.wait(2000);
    shopPage.elements
      .titleList()
      .should("have.length.greaterThan", 0)
      .then(($titles) => {
        const titleArray = Cypress._.map($titles, (el) => el.innerText.trim());
        const sortedArray = [...titleArray].sort().reverse();
        expect(titleArray).to.deep.equal(sortedArray);
      });
  });

  it("SWAG ALERT check", () => {
    shopPage.clickOnSwagAlert();
    cy.get(".product__media.media.media--transparent").should("exist");
    cy.get(".product__title").should("exist");
    cy.get("#price-template--14828910936142__main").should("exist");
  });
});
