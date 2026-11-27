Feature: Add product to the cart

Scenario: A shopper add an item to the cart
Given the shopper is on the pliers item page
When the shopper clicks add to cart
Then the cart should indicate that the product has been added
