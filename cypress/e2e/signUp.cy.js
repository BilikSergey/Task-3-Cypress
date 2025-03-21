const mainPage = require("../pages/mainPage");
const signUpPage = require("../pages/signUpPage");
import testData from "../fixtures/testData.json";
import userData from "../fixtures/userData.json";
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
      password: userData.password,
      check: true,
    });
    signUpPage.errorMessageRecaptcha.should("include.text", testData.recaptcha);
  });

  it("Verify registration unchecked checkBox", () => {
    signUpPage.signUp({
      email: faker.internet.email(),
      firstName: faker.internet.username(),
      lastName: faker.internet.username(),
      password: userData.password,
      check: false,
    });
    signUpPage.errorMessageTerms.should("include.text", testData.terms);
  });

  it("Verify registration invalid mail", () => {
    signUpPage.signUp({
      email: faker.internet.username(),
      firstName: faker.internet.username(),
      lastName: faker.internet.username(),
      password: userData.password,
      check: true,
    });
    signUpPage.errorMessageRecaptcha.should("contain.text", testData.recaptcha);
  });
});
