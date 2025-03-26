import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
const loginPage = require("../../pages/loginPage");
import testData from "../../fixtures/testData.json";

Given("User is located on the main page", () => {
  loginPage.visitLoginPage();
});

When("User enters credentials", () => {
  loginPage.login();
});

Then("User should see an error message", () => {
  loginPage.errorMessageRecaptcha.should("contain.text", testData.recaptcha);
});
