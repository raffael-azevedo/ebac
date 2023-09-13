Feature: Product customization

    As an EBAC Shop customer
    I want to customize my products to fit my size and need
    To pay for them afterwards

    Background: Product customization
        Given I am logged in on EBAC Shop
        And I am on the Product page
        And I selected a product to customize

    Scenario: Clear selection
        When I select the color blue
        And the size XS
        And 10 pieces
        And I clear my selection
        Then All options should go back to the default setting

    Scenario: Valid color, size, and amount
        When I select the color red
        And the size XL
        And 10 pieces
        Then I should be able to add then to the cart

    Scenario: No color, but valid size, and amount
        When I don't select any color
        And I select the size S
        And 10 pieces
        Then I shouldn't be able to add then to the cart
        And I should see an error message: "Please choose a color"

    Scenario: Valid color and amount, but no size selected
        When I select the red color
        And I don't pick a size
        And I select 10 pieces
        Then I shouldn't be able to add then to the cart
        And I should see an error message: "Please choose a size"

    Scenario Outline: Invalid amount, but valid color and size
        When I select the <color> color
        And I select the size <size>
        And I select <amount> pieces
        Then I shouldn't be able to add then to the cart
        And I should see an error message: "Only 10 products can be bought, not more, not less."

        Examples:
        | color  | size | amount |
        | red    | XS   | 9      |
        | blue   | M    | 22     |
        | orange | XL   | 12     |

