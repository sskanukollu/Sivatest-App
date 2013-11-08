Feature: Testing the top Menu

In to perform all operation after logging in
As a sales person
I want to check menu items

@menutest
Scenario Outline: Testing Top Menu


Given I am logged in "<BrowserType>"
Then all tabs on menu should be present
|productstab|
|leadtab    |
And I click on "<MenuTab>"
Then "<VerifcationObject>" element should be present


 Examples: 
 |BrowserType | MenuTab        | VerifcationObject     |
 |  chrome    | productstab    |   Products            |
 |  chrome    | leadtab        |      Leads            |
 