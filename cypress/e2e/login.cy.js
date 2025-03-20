import loginPage from "../support/pages/loginPage";

describe("Login Test", () => {
  it("verify recaptcha of login", () => {
    loginPage.visitLoginPage();
    loginPage.login();
    cy.get(".MuiAlert-message.frontend-customer-portal-1xsto0d").should(
      "contain.text",
      "That email and password combination is not valid, or your browser could not be authenticated via recaptcha. Please try again."
    );
  });
});
