Feature: Select booking dates and prices
    As a user
    I want to find the first available flight price from Vienna International
    to Malta International Airport

    Background: Open Air Malta website
        Given The Air Malta booking website is opened
    Scenario: Select first flight from calender
        When I select the departing airport
        And I select the destination airport
        And I click on departure date
        Then I should print the first available flight price from Vienna International to Malta International Airport