$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("\u0027com\\siva\\test\\app\\menu\\menu.feature\u0027");
formatter.feature({
  "id": "testing-the-top-menu",
  "description": "\r\nIn to perform all operation after logging in\r\nAs a sales person\r\nI want to check menu items",
  "name": "Testing the top Menu",
  "keyword": "Feature",
  "line": 1
});
formatter.scenario({
  "id": "testing-the-top-menu;testing-top-menu;;2",
  "tags": [
    {
      "name": "@menutest",
      "line": 7
    }
  ],
  "description": "",
  "name": "Testing Top Menu",
  "keyword": "Scenario Outline",
  "line": 21,
  "type": "scenario"
});
formatter.step({
  "name": "I am logged in \"chrome\"",
  "keyword": "Given ",
  "line": 11,
  "matchedColumns": [
    0
  ]
});
formatter.step({
  "name": "all tabs on menu should be present",
  "keyword": "Then ",
  "line": 12,
  "rows": [
    {
      "cells": [
        "productstab"
      ],
      "line": 13
    },
    {
      "cells": [
        "leadtab"
      ],
      "line": 14
    }
  ]
});
formatter.step({
  "name": "I click on \"productstab\"",
  "keyword": "And ",
  "line": 15,
  "matchedColumns": [
    1
  ]
});
formatter.step({
  "name": "\"Products\" element should be present",
  "keyword": "Then ",
  "line": 16,
  "matchedColumns": [
    2
  ]
});
formatter.match({
  "arguments": [
    {
      "val": "chrome",
      "offset": 16
    }
  ],
  "location": "menu.I_am_logged_in(String)"
});
formatter.result({
  "duration": 35672328187,
  "status": "passed"
});
formatter.match({
  "location": "menu.all_tabs_on_menu_should_be_present(DataTable)"
});
formatter.result({
  "duration": 1852946813,
  "status": "passed"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "id": "testing-the-top-menu;testing-top-menu;;3",
  "tags": [
    {
      "name": "@menutest",
      "line": 7
    }
  ],
  "description": "",
  "name": "Testing Top Menu",
  "keyword": "Scenario Outline",
  "line": 22,
  "type": "scenario"
});
formatter.step({
  "name": "I am logged in \"chrome\"",
  "keyword": "Given ",
  "line": 11,
  "matchedColumns": [
    0
  ]
});
formatter.step({
  "name": "all tabs on menu should be present",
  "keyword": "Then ",
  "line": 12,
  "rows": [
    {
      "cells": [
        "productstab"
      ],
      "line": 13
    },
    {
      "cells": [
        "leadtab"
      ],
      "line": 14
    }
  ]
});
formatter.step({
  "name": "I click on \"leadtab\"",
  "keyword": "And ",
  "line": 15,
  "matchedColumns": [
    1
  ]
});
formatter.step({
  "name": "\"Leads\" element should be present",
  "keyword": "Then ",
  "line": 16,
  "matchedColumns": [
    2
  ]
});
formatter.match({
  "arguments": [
    {
      "val": "chrome",
      "offset": 16
    }
  ],
  "location": "menu.I_am_logged_in(String)"
});
formatter.result({
  "duration": 979140435,
  "status": "passed"
});
formatter.match({
  "location": "menu.all_tabs_on_menu_should_be_present(DataTable)"
});
formatter.result({
  "duration": 45196806,
  "status": "passed"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
});