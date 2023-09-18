Feature: Register

    As an EBAC Shop customer
    I want to register
    To finish my purchases

    Background: Register
        Given I'm at EBAC Shop's portal
        And I'm not previously registered

        Scenario: Valid register
            When I type my Firstname "Sherlock", my Surname "Holmes", my Country "United Kingdom", 
            my Address "Baker St. 221b", my City "London", my Zip code "NW1 6XE", my Phone number "+44 7700 900253", and
            my Email "sherlock@holmes.co.uk"
            Then I should be able to finish my purchases

        Scenario: Missing mandatory info
            When I forgot to input mandatory data
            And I should see an alert message "Missing mandatory data"

        Scenario Outline: Invalid e-mail
            When I fill in all the data, but an invalid e-mail <email>
            Then I shouldn't be able to register, and see an alert message "Invalid e-mail address"

            Examples:
                | email     |
                | a.com     |
                | johndoe   |
                | !@#$%.com |
                | 123@a.com |
                | ""        |