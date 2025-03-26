import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { faker } from "@faker-js/faker";
const mainPage = require("../../pages/mainPage");
const signUpPage = require("../../pages/signUpPage");
import testData from "../../fixtures/testData.json";
import userData from "../../fixtures/userData.json";

Given("User is on the main page", () => {
  mainPage.visitMainPage();
});

When("User signs up with valid credentials", () => {
  signUpPage.signUp({
    email: faker.internet.email(),
    firstName: faker.internet.username(),
    lastName: faker.internet.username(),
    password: userData.password,
    check: true,
  });
});

When("User signs up without checking the terms", () => {
  signUpPage.signUp({
    email: faker.internet.email(),
    firstName: faker.internet.username(),
    lastName: faker.internet.username(),
    password: userData.password,
    check: false,
  });
});

When("User signs up with an invalid email", () => {
  signUpPage.signUp({
    email: faker.internet.username(),
    firstName: faker.internet.username(),
    lastName: faker.internet.username(),
    password: userData.password,
    check: true,
  });
});

Then("User should see a recaptcha error", () => {
  signUpPage.errorMessageRecaptcha.should("include.text", testData.recaptcha);
});

Then("User should see a terms agreement error", () => {
  signUpPage.errorMessageTerms.should("include.text", testData.terms);
});
