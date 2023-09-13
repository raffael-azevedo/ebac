Feature: Login

    As an EBAC Shop customer
    I want to authenticate in the platform
    To see my orders

    Background: Login
        Given I access EBAC's Shop portal

    Scenario: Registered user, valid username and password
        Given I enter my e-mail "foo@bar.com"
        And my password "foobar123"
        Then I should be redirected to the checkout screen

    Scenario: Unregistered user
        Given I enter my e-mail "john.doe@foobar.com"
        And my password "foobar123"
        Then I should see an error message: "Invalid username or password"

    Scenario Outline: Registered user, invalid credentials
        Given I enter my email <email>
        And my password <password>
        Then I should see an error message: "Invalid username or password"

        Examples:
            | email                 | password   |
            | johndoe@foobar.com    | foobar123  |
            | steve.jobs@apple.com  | 321raboof  |
            | deyvin@chorume.com    | 1foo23bar  |