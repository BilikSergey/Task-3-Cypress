/// <reference types="cypress" />

const elements = {
  buttonSignUp: () => cy.get('[href="/sign-up"]').first(),
  inputEmail: () => cy.get("#email"),
  inputFirstName: () => cy.get("#first_name"),
  inputLastName: () => cy.get("#last_name"),
  inputPassword: () => cy.get("#password"),
  checkBox: () => cy.get("#terms_and_conditions"),
  buttonSubmit: () => cy.get('button[type="submit"]').first(),
  errorMessageRecaptcha: () => cy.get(".c-UUKrH.c-UUKrH-kDyeyw-type-error"),
  errorMessageTerms: () => cy.get("#terms_and_conditions_message")
};

const signUp = ({ email, firstName, lastName, password, check }) => {
  elements.buttonSignUp().click();
  elements.inputEmail().type(email);
  elements.inputFirstName().type(firstName);
  elements.inputLastName().type(lastName);
  elements.inputPassword().type(password);
  if (check) elements.checkBox().check();
  elements.buttonSubmit().click();
};

export default {
  elements,
  signUp,
};
