Feature: Register

    As an EBAC Shop customer
    I want to register
    To finish my purchases

    Background: Register
        Given I'm at EBAC Shop's portal
        And I'm not previously registered

        Scenario: Valid register
            When I type my Firstname "Sherlock"
            And my Surname "Holmes"
            And my Country "United Kingdom"
            And my Address "Baker St. 221b"
            And my City "London"
            And my Zip code "NW1 6XE"
            And my Phone number "+44 7700 900253"
            And my Email "sherlock@holmes.co.uk"
            Then I should be able to finish my purchases

        Scenario: Missing mandatory info
            When I type my Firstname "Sherlock"
            And my Surname "Holmes"
            And my Country ""
            And my Address "Baker St. 221b"
            And my City "London"
            And my Zip code ""
            And my Phone number "+44 7700 900253"
            And my Email ""
            Then I shouldn't be able to register
            And I should see an alert message "Missing mandatory data"

        Scenario Outline: Invalid e-mail
            When I type my Firstname "Sherlock"
            And my Surname "Holmes"
            And my Country "United Kingdom"
            And my Address "Baker St. 221b"
            And my City "London"
            And my Zip code "NW1 6XE"
            And my Phone number "+44 7700 900253"
            And my Email <email>
            Then I shouldn't be able to register
            And I should see an alert message "Invalid e-mail address"

            Examples:
                | email     |
                | a.com     |
                | johndoe   |
                | !@#$%.com |
                | 123@a.com |
                | ""        |