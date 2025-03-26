Feature: Sign Up Tests

  Scenario: User fails signup due to Recaptcha
    Given User is on the main page
    When User signs up with valid credentials
    Then User should see a recaptcha error

  Scenario: User fails signup due to unchecked terms
    Given User is on the main page
    When User signs up without checking the terms
    Then User should see a terms agreement error

  Scenario: User fails signup due to invalid email
    Given User is on the main page
    When User signs up with an invalid email
    Then User should see a recaptcha error
