$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("classpath:cucumberdatatable/calc.feature");
formatter.feature({
  "name": "cal test",
  "description": " calc functionality",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "Cricket bats",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "I have \"\u003cnumber\u003e\" cricket bats of",
  "keyword": "Given ",
  "rows": [
    {
      "cells": [
        "brand",
        "willow"
      ]
    },
    {
      "cells": [
        "Reebok",
        "ew"
      ]
    },
    {
      "cells": [
        "Spartan",
        "kw"
      ]
    },
    {
      "cells": [
        "SG",
        "ew"
      ]
    },
    {
      "cells": [
        "SS",
        "kw"
      ]
    }
  ]
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "number"
      ]
    },
    {
      "cells": [
        "2"
      ]
    },
    {
      "cells": [
        "3"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Cricket bats",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "I have \"2\" cricket bats of",
  "rows": [
    {
      "cells": [
        "brand",
        "willow"
      ]
    },
    {
      "cells": [
        "Reebok",
        "ew"
      ]
    },
    {
      "cells": [
        "Spartan",
        "kw"
      ]
    },
    {
      "cells": [
        "SG",
        "ew"
      ]
    },
    {
      "cells": [
        "SS",
        "kw"
      ]
    }
  ],
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinition.input(String,DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Cricket bats",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "I have \"3\" cricket bats of",
  "rows": [
    {
      "cells": [
        "brand",
        "willow"
      ]
    },
    {
      "cells": [
        "Reebok",
        "ew"
      ]
    },
    {
      "cells": [
        "Spartan",
        "kw"
      ]
    },
    {
      "cells": [
        "SG",
        "ew"
      ]
    },
    {
      "cells": [
        "SS",
        "kw"
      ]
    }
  ],
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinition.input(String,DataTable)"
});
formatter.result({
  "status": "passed"
});
});