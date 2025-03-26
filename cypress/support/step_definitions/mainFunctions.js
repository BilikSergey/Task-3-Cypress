import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
const mainPage = require("../../pages/mainPage");
const mainFunctionsPage = require("../../pages/mainFunctionsPage");

Given("User is on the start page", () => {
  mainPage.visitMainPage();
});

When("User visits the voice AI page", () => {
  mainFunctionsPage.openVoiceAIPage();
});

Then("All elements of the voice AI page is present", () => {
  mainFunctionsPage.voiceAIImage.should("exist");
  mainFunctionsPage.voiceAITitle.should("exist");
});

When("User visits the SMS API page", () => {
  mainFunctionsPage.openSMSAPIPage();
});

Then("All elements of the SMS API page is present", () => {
  mainFunctionsPage.imageSMSAPI.should("exist");
  mainFunctionsPage.titleSMSAPI.should("exist");
});

When("User opens AI assistant chat", () => {
  mainFunctionsPage.clickButtonChat();
});

Then("User sends message. After that, the assistant responds", () => {
  mainFunctionsPage.userMessageChat.should("exist");
  mainFunctionsPage.assistantMessageChat.should("have.length", 2);
});
