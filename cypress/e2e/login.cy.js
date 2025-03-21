import loginPage from "../pages/loginPage";
import testData from "../fixtures/testData.json";

describe("Login Test", () => {
  it("verify recaptcha of login", () => {
    loginPage.visitLoginPage();
    loginPage.login();
    loginPage.elements.errorMessageRecaptcha().should(
      "contain.text",
      testData.recaptcha
    );
  });
});
