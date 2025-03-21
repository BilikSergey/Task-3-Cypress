/// <reference types="cypress" />
import userData from "../fixtures/userData.json";

class LoginPage {
  get inputEmail() {
    return cy.get('[name="email"]');
  }

  get inputPassword() {
    return cy.get('[name="password"]');
  }

  get buttonSubmit() {
    return cy.get('button[type="submit"]').eq(1);
  }

  get errorMessageRecaptcha() {
    return cy.get(".MuiAlert-message.frontend-customer-portal-1xsto0d");
  }

  visitLoginPage() {
    cy.visit("https://portal.telnyx.com/#/login/sign-in");
  }

  login() {
    this.inputEmail.type(userData.email);
    this.inputPassword.type(userData.password);
    this.buttonSubmit.click();
  }
}

module.exports = new LoginPage();
