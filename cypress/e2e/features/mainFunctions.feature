Feature: Main page functionality

  Scenario: Verify presence of elements on the Voice AI page
    Given User is on the start page
    When User visits the voice AI page
    Then All elements of the voice AI page is present

  Scenario: Verify presence of elements on the SMS API page
    Given User is on the start page
    When User visits the SMS API page
    Then All elements of the SMS API page is present
  
  Scenario: Verify AI assistant chat
    Given User is on the start page
    When User opens AI assistant chat
    Then User sends message. After that, the assistant responds

