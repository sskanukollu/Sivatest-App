Feature: Explore JUnit

In order to gain knowledge
As an Automation TestAnalyst
I want to become expert on Junit

@login
Scenario: Test login scenario on Firefox

Given I have launched the firefox browser
| industry | country |city  |
| IT       | India   |Blore |
| Auto     | Germany |Berlin|
|Pharma    | USA     |Texas |
When I submit the url
|Section|
|News   |
|Sport  |
|Money  |
|Arts   |
Then I want to see homepage
And want to see weather forecast
But the page not opened