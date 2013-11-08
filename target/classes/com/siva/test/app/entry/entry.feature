Feature: Logging into Salesforce

In order to work
As a sales person
I want to login

@entry
Scenario Outline: Logging in Salesforce

Given Runmode is "<Runmode>"
Given I go to "LoginURL" on "<Browser>"
And I enter "loginUsername" as "<UserName>"
And I enter "loginPassword" as "<Password>"
And I click on "loginButton"
Then login should be "<ExpectedResult>"


Examples:
|Runmode |Browser |UserName                 |Password|ExpectedResult|
|   Y    |firefox |siva123                  |hello123|failure       |
|   N    |firefox | siva.uk99@yahoo.com     |@monday1|success       |
|   Y    |chrome  | siva1                   |hello1  |failure       |
|   N    |chrome  | siva.uk99@yahoo.com     |@monday1|success       |
|   Y    |ie      | siva.uk99@yahoo.com     |@monday1|success       | 

