import shopPage from "../pages/shopPage";

describe("Shop Test", () => {
  beforeEach(() => {
    shopPage.visitShopPage();
    shopPage.clickButtonShop();
  });

  it("add ware to cart", () => {
    shopPage.addToCart();
    shopPage.elements.formOfWareAtCart().should("exist");
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
    shopPage.elements.pictureOfWareSwagAlert().should("exist");
    shopPage.elements.titleOfWareSwagAlert().should("exist");
    shopPage.elements.priceOfWareSwagAlert().should("exist");
  });
});
