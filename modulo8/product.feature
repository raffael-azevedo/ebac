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
        And the size XS, 10 units, and clear the selection
        Then All options should go back to the default setting

    Scenario: Valid color, size, and amount
        When I select the color red
        And the size XL, and 10 units
        Then I should be able to add then to the cart

    Scenario Outline: Invalid amount, but valid color and size
        When I select the <color> color, size <size>, and <amount> pieces
        Then I shouldn't be able to add then to the cart
        And I should see an error message <message>

        Examples:
        | color  | size | amount | message                                             |
        | red    | XS   | 9      | Only 10 products can be bought, not more, not less. |
        | blue   | M    | 22     | Only 10 products can be bought, not more, not less. |
        | orange | XL   | 12     | Only 10 products can be bought, not more, not less. |
        |        | L    | 10     | Please choose a color.                              |
        | red    |      | 10     | Please choose a size.                               |

