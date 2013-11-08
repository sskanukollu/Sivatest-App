Feature: Create a new Lead

In order to verify the functionality
As a user
I want to create a new Lead

Background: 
Given I am logged in Salesforce on "chrome"
Given I am logged in Salesforce on "firefox"
Given I am logged in Salesforce on "ie"


@createlead
Scenario Outline: Create a new Lead

Given browser is "<BrowserType>"
And I click on "leadtab"
Then "Leads" element should be present
And I click on "newButton"
Then "NewLead" element should be present


Examples:
|BrowserType|
|chrome     |
|firefox    |
|ie         |