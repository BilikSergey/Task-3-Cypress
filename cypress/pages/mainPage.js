/// <reference types="cypress" />

class MainPage {
  visitMainPage() {
    cy.visit("/use-cases/ai-and-machine-learning");
  }
}

module.exports = new MainPage();
