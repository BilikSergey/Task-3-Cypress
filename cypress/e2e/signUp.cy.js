import mainPage from "../support/pages/mainPage";
import signUpPage from "../support/pages/signUpPage";
import { faker } from "@faker-js/faker";

describe("Sign Up Test", () => {
  beforeEach(() => {
    mainPage.visitMainPage();
  });

  it("sign up recaptcha", () => {
    signUpPage.signUp({
      email: faker.internet.email(),
      firstName: faker.internet.username(),
      lastName: faker.internet.username(),
      password: "qQ1!qweqweqwe",
      check: true,
    });
    cy.get(".c-UUKrH.c-UUKrH-kDyeyw-type-error").should(
      "include.text",
      "your browser could not be authenticated via recaptcha"
    );
  });

  it("Verify registration unchecked checkBox", () => {
    signUpPage.signUp({
      email: faker.internet.email(),
      firstName: faker.internet.username(),
      lastName: faker.internet.username(),
      password: "qQ1!qweqweqwe",
      check: false,
    });
    cy.get("#terms_and_conditions_message").should(
      "include.text",
      "Please accept the terms and conditions"
    );
  });

  it("Verify registration invalid mail", () => {
    signUpPage.signUp({
      email: faker.internet.username(),
      firstName: faker.internet.username(),
      lastName: faker.internet.username(),
      password: "qQ1!qweqweqwe",
      check: true,
    });
    cy.get(".c-UUKrH.c-UUKrH-kDyeyw-type-error").should(
      "contain.text",
      "That email and password combination is not valid, or your browser could not be authenticated via recaptcha. Please try again."
    );
  });
});
