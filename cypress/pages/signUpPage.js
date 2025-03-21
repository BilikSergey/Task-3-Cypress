/// <reference types="cypress" />

class SignUpPage {
  get buttonSignUp() {
    return cy.get('[href="/sign-up"]').first();
  }

  get inputEmail() {
    return cy.get("#email");
  }

  get inputFirstName() {
    return cy.get("#first_name");
  }

  get inputLastName() {
    return cy.get("#last_name");
  }

  get inputPassword() {
    return cy.get("#password");
  }

  get checkBox() {
    return cy.get("#terms_and_conditions");
  }

  get buttonSubmit() {
    return cy.get('button[type="submit"]').first();
  }

  get errorMessageRecaptcha() {
    return cy.get(".c-UUKrH.c-UUKrH-kDyeyw-type-error");
  }

  get errorMessageTerms() {
    return cy.get("#terms_and_conditions_message");
  }

  signUp({ email, firstName, lastName, password, check }) {
    this.buttonSignUp.click();
    this.inputEmail.type(email);
    this.inputFirstName.type(firstName);
    this.inputLastName.type(lastName);
    this.inputPassword.type(password);
    if (check) this.checkBox.check();
    this.buttonSubmit.click();
  }
}

module.exports = new SignUpPage();
