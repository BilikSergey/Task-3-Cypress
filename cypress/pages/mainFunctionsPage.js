/// <reference types="cypress" />

class mainFunctions {
  get dropDownMainMenu() {
    return cy.get(".c-UazGY");
  }

  get dropDownProductsMenu() {
    return cy.get(".c-swQxl");
  }

  get buttonVoiceAI() {
    return cy.contains("Voice AI");
  }

  get voiceAIImage() {
    return cy.get(".c-fGHEql.c-fiJFTo.c-hihSaP.c-bjYQHG");
  }

  get voiceAITitle() {
    return cy.get(".c-PJLV.c-fGbiyG.c-PJLV-kmbBBS-dark-true.c-eZpJHu");
  }

  get buttonSMSAPI() {
    return cy.contains("SMS API");
  }

  get imageSMSAPI() {
    return cy.get(
      ".c-fGHEql.c-fiJFTo.c-hihSaP.c-fiJFTo-fRKYWh-contain-true.c-bjYQHG"
    );
  }

  get titleSMSAPI() {
    return cy.get(".c-PJLV.c-fGbiyG.c-PJLV-cHtIMp-dark-false.c-eZpJHu");
  }

  get buttonChat() {
    return cy.get(".c-bpNouX");
  }

  get textareaChat() {
    return cy.get(".c-fJsHXZ");
  }

  get userMessageChat() {
    return cy.get(".c-bCIlIy.c-bupPtx");
  }

  get assistantMessageChat() {
    return cy.get(".c-bCIlIy.c-khViZk");
  }

  get sendMessageButton() {
    return cy.get(".c-cODSYQ.c-gGVcDH");
  }

  openVoiceAIPage() {
    this.dropDownMainMenu.eq(1).click();
    this.dropDownProductsMenu.eq(0).click();
    this.buttonVoiceAI.click();
  }

  openSMSAPIPage() {
    this.dropDownMainMenu.eq(1).click();
    this.dropDownProductsMenu.eq(0).click();
    this.buttonSMSAPI.click();
  }

  clickButtonChat() {
    this.buttonChat.click();
    this.textareaChat.type(
      "Hello! I just want to test your site for improving my QA skills"
    );
    this.sendMessageButton.click();
  }
}

module.exports = new mainFunctions();
