Feature: Login functionality

  Scenario: Check recaptcha of login
    Given User is located on the main page
    When User enters credentials
    Then User should see an error message
