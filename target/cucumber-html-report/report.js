$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("\u0027main\\resources\\com\\siva\\test\\app\\entry\\entry.feature\u0027");
formatter.feature({
  "id": "logging-into-salesforce",
  "description": "\r\nIn order to work\r\nAs a sales person\r\nI want to login",
  "name": "Logging into Salesforce",
  "keyword": "Feature",
  "line": 1
});
formatter.scenarioOutline({
  "id": "logging-into-salesforce;logging-in-salesforce",
  "tags": [
    {
      "name": "@entry",
      "line": 7
    }
  ],
  "description": "",
  "name": "Logging in Salesforce",
  "keyword": "Scenario Outline",
  "line": 8,
  "type": "scenario_outline"
});
formatter.step({
  "name": "Runmode is \"\u003cRunmode\u003e\"",
  "keyword": "Given ",
  "line": 10
});
formatter.step({
  "name": "I go to \"LoginURL\" on \"\u003cBrowser\u003e\"",
  "keyword": "Given ",
  "line": 11
});
formatter.step({
  "name": "I enter \"loginUsername\" as \"\u003cUserName\u003e\"",
  "keyword": "And ",
  "line": 12
});
formatter.step({
  "name": "I enter \"loginPassword\" as \"\u003cPassword\u003e\"",
  "keyword": "And ",
  "line": 13
});
formatter.step({
  "name": "I click on \"loginButton\"",
  "keyword": "And ",
  "line": 14
});
formatter.step({
  "name": "login should be \"\u003cExpectedResult\u003e\"",
  "keyword": "Then ",
  "line": 15
});
formatter.examples({
  "id": "logging-into-salesforce;logging-in-salesforce;",
  "description": "",
  "name": "",
  "keyword": "Examples",
  "line": 18,
  "rows": [
    {
      "id": "logging-into-salesforce;logging-in-salesforce;;1",
      "cells": [
        "Runmode",
        "Browser",
        "UserName",
        "Password",
        "ExpectedResult"
      ],
      "line": 19
    },
    {
      "id": "logging-into-salesforce;logging-in-salesforce;;2",
      "cells": [
        "Y",
        "firefox",
        "siva123",
        "hello123",
        "failure"
      ],
      "line": 20
    },
    {
      "id": "logging-into-salesforce;logging-in-salesforce;;3",
      "cells": [
        "N",
        "firefox",
        "siva.uk99@yahoo.com",
        "@monday1",
        "success"
      ],
      "line": 21
    },
    {
      "id": "logging-into-salesforce;logging-in-salesforce;;4",
      "cells": [
        "Y",
        "chrome",
        "siva1",
        "hello1",
        "failure"
      ],
      "line": 22
    },
    {
      "id": "logging-into-salesforce;logging-in-salesforce;;5",
      "cells": [
        "N",
        "chrome",
        "siva.uk99@yahoo.com",
        "@monday1",
        "success"
      ],
      "line": 23
    },
    {
      "id": "logging-into-salesforce;logging-in-salesforce;;6",
      "cells": [
        "Y",
        "ie",
        "siva.uk99@yahoo.com",
        "@monday1",
        "success"
      ],
      "line": 24
    }
  ]
});
formatter.scenario({
  "id": "logging-into-salesforce;logging-in-salesforce;;2",
  "tags": [
    {
      "name": "@entry",
      "line": 7
    }
  ],
  "description": "",
  "name": "Logging in Salesforce",
  "keyword": "Scenario Outline",
  "line": 20,
  "type": "scenario"
});
formatter.step({
  "name": "Runmode is \"Y\"",
  "keyword": "Given ",
  "line": 10,
  "matchedColumns": [
    0
  ]
});
formatter.step({
  "name": "I go to \"LoginURL\" on \"firefox\"",
  "keyword": "Given ",
  "line": 11,
  "matchedColumns": [
    1
  ]
});
formatter.step({
  "name": "I enter \"loginUsername\" as \"siva123\"",
  "keyword": "And ",
  "line": 12,
  "matchedColumns": [
    2
  ]
});
formatter.step({
  "name": "I enter \"loginPassword\" as \"hello123\"",
  "keyword": "And ",
  "line": 13,
  "matchedColumns": [
    3
  ]
});
formatter.step({
  "name": "I click on \"loginButton\"",
  "keyword": "And ",
  "line": 14
});
formatter.step({
  "name": "login should be \"failure\"",
  "keyword": "Then ",
  "line": 15,
  "matchedColumns": [
    4
  ]
});
formatter.match({
  "arguments": [
    {
      "val": "Y",
      "offset": 12
    }
  ],
  "location": "coomonutil.Runmode_is(String)"
});
formatter.result({
  "duration": 374599704,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "LoginURL",
      "offset": 9
    },
    {
      "val": "firefox",
      "offset": 23
    }
  ],
  "location": "Entry.I_Go_To_Salesforce(String,String)"
});
formatter.result({
  "duration": 15356679690,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "loginUsername",
      "offset": 9
    },
    {
      "val": "siva123",
      "offset": 28
    }
  ],
  "location": "coomonutil.I_enter(String,String)"
});
formatter.result({
  "duration": 220317596,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "loginPassword",
      "offset": 9
    },
    {
      "val": "hello123",
      "offset": 28
    }
  ],
  "location": "coomonutil.I_enter(String,String)"
});
formatter.result({
  "duration": 506521220,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "loginButton",
      "offset": 12
    }
  ],
  "location": "coomonutil.I_click_on(String)"
});
formatter.result({
  "duration": 146431320,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "failure",
      "offset": 17
    }
  ],
  "location": "Entry.login_should_be(String)"
});
formatter.result({
  "duration": 20212058446,
  "status": "passed"
});
formatter.scenario({
  "id": "logging-into-salesforce;logging-in-salesforce;;3",
  "tags": [
    {
      "name": "@entry",
      "line": 7
    }
  ],
  "description": "",
  "name": "Logging in Salesforce",
  "keyword": "Scenario Outline",
  "line": 21,
  "type": "scenario"
});
formatter.step({
  "name": "Runmode is \"N\"",
  "keyword": "Given ",
  "line": 10,
  "matchedColumns": [
    0
  ]
});
formatter.step({
  "name": "I go to \"LoginURL\" on \"firefox\"",
  "keyword": "Given ",
  "line": 11,
  "matchedColumns": [
    1
  ]
});
formatter.step({
  "name": "I enter \"loginUsername\" as \"siva.uk99@yahoo.com\"",
  "keyword": "And ",
  "line": 12,
  "matchedColumns": [
    2
  ]
});
formatter.step({
  "name": "I enter \"loginPassword\" as \"@monday1\"",
  "keyword": "And ",
  "line": 13,
  "matchedColumns": [
    3
  ]
});
formatter.step({
  "name": "I click on \"loginButton\"",
  "keyword": "And ",
  "line": 14
});
formatter.step({
  "name": "login should be \"success\"",
  "keyword": "Then ",
  "line": 15,
  "matchedColumns": [
    4
  ]
});
formatter.match({
  "arguments": [
    {
      "val": "N",
      "offset": 12
    }
  ],
  "location": "coomonutil.Runmode_is(String)"
});
formatter.result({
  "duration": 1079048,
  "status": "pending",
  "error_message": "cucumber.runtime.PendingException: Skipping the test as Runmode is No\r\n\tat com.siva.test.app.commonutil.coomonutil.Runmode_is(coomonutil.java:40)\r\n\tat ✽.Given Runmode is \"N\"(main\\resources\\com\\siva\\test\\app\\entry\\entry.feature:10)\r\n"
});
formatter.match({
  "arguments": [
    {
      "val": "LoginURL",
      "offset": 9
    },
    {
      "val": "firefox",
      "offset": 23
    }
  ],
  "location": "Entry.I_Go_To_Salesforce(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "loginUsername",
      "offset": 9
    },
    {
      "val": "siva.uk99@yahoo.com",
      "offset": 28
    }
  ],
  "location": "coomonutil.I_enter(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "loginPassword",
      "offset": 9
    },
    {
      "val": "@monday1",
      "offset": 28
    }
  ],
  "location": "coomonutil.I_enter(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "loginButton",
      "offset": 12
    }
  ],
  "location": "coomonutil.I_click_on(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "success",
      "offset": 17
    }
  ],
  "location": "Entry.login_should_be(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "id": "logging-into-salesforce;logging-in-salesforce;;4",
  "tags": [
    {
      "name": "@entry",
      "line": 7
    }
  ],
  "description": "",
  "name": "Logging in Salesforce",
  "keyword": "Scenario Outline",
  "line": 22,
  "type": "scenario"
});
formatter.step({
  "name": "Runmode is \"Y\"",
  "keyword": "Given ",
  "line": 10,
  "matchedColumns": [
    0
  ]
});
formatter.step({
  "name": "I go to \"LoginURL\" on \"chrome\"",
  "keyword": "Given ",
  "line": 11,
  "matchedColumns": [
    1
  ]
});
formatter.step({
  "name": "I enter \"loginUsername\" as \"siva1\"",
  "keyword": "And ",
  "line": 12,
  "matchedColumns": [
    2
  ]
});
formatter.step({
  "name": "I enter \"loginPassword\" as \"hello1\"",
  "keyword": "And ",
  "line": 13,
  "matchedColumns": [
    3
  ]
});
formatter.step({
  "name": "I click on \"loginButton\"",
  "keyword": "And ",
  "line": 14
});
formatter.step({
  "name": "login should be \"failure\"",
  "keyword": "Then ",
  "line": 15,
  "matchedColumns": [
    4
  ]
});
formatter.match({
  "arguments": [
    {
      "val": "Y",
      "offset": 12
    }
  ],
  "location": "coomonutil.Runmode_is(String)"
});
formatter.result({
  "duration": 225378,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "LoginURL",
      "offset": 9
    },
    {
      "val": "chrome",
      "offset": 23
    }
  ],
  "location": "Entry.I_Go_To_Salesforce(String,String)"
});
formatter.result({
  "duration": 8877300536,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "loginUsername",
      "offset": 9
    },
    {
      "val": "siva1",
      "offset": 28
    }
  ],
  "location": "coomonutil.I_enter(String,String)"
});
formatter.result({
  "duration": 216512992,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "loginPassword",
      "offset": 9
    },
    {
      "val": "hello1",
      "offset": 28
    }
  ],
  "location": "coomonutil.I_enter(String,String)"
});
formatter.result({
  "duration": 159461887,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "loginButton",
      "offset": 12
    }
  ],
  "location": "coomonutil.I_click_on(String)"
});
formatter.result({
  "duration": 826658626,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "failure",
      "offset": 17
    }
  ],
  "location": "Entry.login_should_be(String)"
});
formatter.result({
  "duration": 20027838594,
  "status": "passed"
});
formatter.scenario({
  "id": "logging-into-salesforce;logging-in-salesforce;;5",
  "tags": [
    {
      "name": "@entry",
      "line": 7
    }
  ],
  "description": "",
  "name": "Logging in Salesforce",
  "keyword": "Scenario Outline",
  "line": 23,
  "type": "scenario"
});
formatter.step({
  "name": "Runmode is \"N\"",
  "keyword": "Given ",
  "line": 10,
  "matchedColumns": [
    0
  ]
});
formatter.step({
  "name": "I go to \"LoginURL\" on \"chrome\"",
  "keyword": "Given ",
  "line": 11,
  "matchedColumns": [
    1
  ]
});
formatter.step({
  "name": "I enter \"loginUsername\" as \"siva.uk99@yahoo.com\"",
  "keyword": "And ",
  "line": 12,
  "matchedColumns": [
    2
  ]
});
formatter.step({
  "name": "I enter \"loginPassword\" as \"@monday1\"",
  "keyword": "And ",
  "line": 13,
  "matchedColumns": [
    3
  ]
});
formatter.step({
  "name": "I click on \"loginButton\"",
  "keyword": "And ",
  "line": 14
});
formatter.step({
  "name": "login should be \"success\"",
  "keyword": "Then ",
  "line": 15,
  "matchedColumns": [
    4
  ]
});
formatter.match({
  "arguments": [
    {
      "val": "N",
      "offset": 12
    }
  ],
  "location": "coomonutil.Runmode_is(String)"
});
formatter.result({
  "duration": 508444,
  "status": "pending",
  "error_message": "cucumber.runtime.PendingException: Skipping the test as Runmode is No\r\n\tat com.siva.test.app.commonutil.coomonutil.Runmode_is(coomonutil.java:40)\r\n\tat ✽.Given Runmode is \"N\"(main\\resources\\com\\siva\\test\\app\\entry\\entry.feature:10)\r\n"
});
formatter.match({
  "arguments": [
    {
      "val": "LoginURL",
      "offset": 9
    },
    {
      "val": "chrome",
      "offset": 23
    }
  ],
  "location": "Entry.I_Go_To_Salesforce(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "loginUsername",
      "offset": 9
    },
    {
      "val": "siva.uk99@yahoo.com",
      "offset": 28
    }
  ],
  "location": "coomonutil.I_enter(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "loginPassword",
      "offset": 9
    },
    {
      "val": "@monday1",
      "offset": 28
    }
  ],
  "location": "coomonutil.I_enter(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "loginButton",
      "offset": 12
    }
  ],
  "location": "coomonutil.I_click_on(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "success",
      "offset": 17
    }
  ],
  "location": "Entry.login_should_be(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "id": "logging-into-salesforce;logging-in-salesforce;;6",
  "tags": [
    {
      "name": "@entry",
      "line": 7
    }
  ],
  "description": "",
  "name": "Logging in Salesforce",
  "keyword": "Scenario Outline",
  "line": 24,
  "type": "scenario"
});
formatter.step({
  "name": "Runmode is \"Y\"",
  "keyword": "Given ",
  "line": 10,
  "matchedColumns": [
    0
  ]
});
formatter.step({
  "name": "I go to \"LoginURL\" on \"ie\"",
  "keyword": "Given ",
  "line": 11,
  "matchedColumns": [
    1
  ]
});
formatter.step({
  "name": "I enter \"loginUsername\" as \"siva.uk99@yahoo.com\"",
  "keyword": "And ",
  "line": 12,
  "matchedColumns": [
    2
  ]
});
formatter.step({
  "name": "I enter \"loginPassword\" as \"@monday1\"",
  "keyword": "And ",
  "line": 13,
  "matchedColumns": [
    3
  ]
});
formatter.step({
  "name": "I click on \"loginButton\"",
  "keyword": "And ",
  "line": 14
});
formatter.step({
  "name": "login should be \"success\"",
  "keyword": "Then ",
  "line": 15,
  "matchedColumns": [
    4
  ]
});
formatter.match({
  "arguments": [
    {
      "val": "Y",
      "offset": 12
    }
  ],
  "location": "coomonutil.Runmode_is(String)"
});
formatter.result({
  "duration": 201562,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "LoginURL",
      "offset": 9
    },
    {
      "val": "ie",
      "offset": 23
    }
  ],
  "location": "Entry.I_Go_To_Salesforce(String,String)"
});
formatter.result({
  "duration": 10803663175,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "loginUsername",
      "offset": 9
    },
    {
      "val": "siva.uk99@yahoo.com",
      "offset": 28
    }
  ],
  "location": "coomonutil.I_enter(String,String)"
});
formatter.result({
  "duration": 663914897,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "loginPassword",
      "offset": 9
    },
    {
      "val": "@monday1",
      "offset": 28
    }
  ],
  "location": "coomonutil.I_enter(String,String)"
});
formatter.result({
  "duration": 426838886,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "loginButton",
      "offset": 12
    }
  ],
  "location": "coomonutil.I_click_on(String)"
});
formatter.result({
  "duration": 8300715523,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "success",
      "offset": 17
    }
  ],
  "location": "Entry.login_should_be(String)"
});
formatter.result({
  "duration": 311051125,
  "status": "passed"
});
});