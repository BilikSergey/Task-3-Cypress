/// <reference types="cypress" />

class MainPage {
  visitMainPage() {
    cy.visit("https://telnyx.com/");
  }
}

module.exports = new MainPage();
