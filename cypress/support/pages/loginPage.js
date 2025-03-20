/// <reference types="cypress" />

const elements = {
  inputEmail: () => cy.get('[name="email"]'),
  inputPassword: () => cy.get('[name="password"]'),
  buttonSubmit: () => cy.get('button[type="submit"]').eq(1),
};

const visitLoginPage = () => {
  cy.visit("https://portal.telnyx.com/#/login/sign-in");
};

const login = () => {
  cy.fixture("userData").then((userData) => {
    elements.inputEmail().type(userData.email);
    elements.inputPassword().type(userData.password);
  });
  elements.buttonSubmit().click();
};

export default {
  elements,
  visitLoginPage,
  login,
};
