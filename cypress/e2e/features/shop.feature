Feature: Shop Page Tests

  Scenario: Adding an item to the cart
    Given User is on the shop page
    When User adds an item to the cart
    Then The item should appear in the cart

  Scenario: Sorting items by descending price
    Given User is on the shop page
    When User sorts items by descending price
    Then Items should be sorted by descending price

  Scenario: Sorting items by ascending price
    Given User is on the shop page
    When User sorts items by ascending price
    Then Items should be sorted by ascending price

  Scenario: Sorting items by ascending title
    Given User is on the shop page
    When User sorts items by ascending title
    Then Items should be sorted by ascending title

  Scenario: Sorting items by descending title
    Given User is on the shop page
    When User sorts items by descending title
    Then Items should be sorted by descending title

  Scenario: Checking Swag Alert item details
    Given User is on the shop page
    When User clicks on Swag Alert
    Then Swag Alert item details should be visible

  Scenario: Search item
      Given User is on the shop page
      When Type data in the search input
      Then Certain item appeared
  
  Scenario: Delete ware from cart
      Given User is on the shop page
      When Add item to cart, then delete
      Then The cart is empty