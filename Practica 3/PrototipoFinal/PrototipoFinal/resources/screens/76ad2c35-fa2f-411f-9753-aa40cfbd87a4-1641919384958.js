jQuery("#simulation")
  .on("click", ".s-76ad2c35-fa2f-411f-9753-aa40cfbd87a4 .click", function(event, data) {
    var jEvent, jFirer, cases;
    if(jimUtil.isAlternateModeActive()) return;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Triangle")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/d12245cc-1680-458d-89dd-4f0d7fb22724"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-raised_Button_1")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-76ad2c35-fa2f-411f-9753-aa40cfbd87a4 #s-raised_Button_1" ],
                    "attributes": {
                      "filter": "drop-shadow(-3.061616997868383E-16px 5.0px 7.5px #999999)",
                      "text-shadow": "none"
                    }
                  },{
                    "target": [ "#s-76ad2c35-fa2f-411f-9753-aa40cfbd87a4 #s-raised_Button_1 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#3700B3"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-76ad2c35-fa2f-411f-9753-aa40cfbd87a4 #s-raised_Button_1" ],
                    "attributes": {
                      "filter": "drop-shadow(-1.2246467991473532E-16px 2.0px 2.5px #999999)",
                      "text-shadow": "none"
                    }
                  },{
                    "target": [ "#s-76ad2c35-fa2f-411f-9753-aa40cfbd87a4 #s-raised_Button_1 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#6200EE"
                    }
                  } ],
                  "exectype": "timed",
                  "delay": 200
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        },
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/89bfad90-d5d8-4d01-ac1b-7d2473c38680"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-raised_Button_2")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-76ad2c35-fa2f-411f-9753-aa40cfbd87a4 #s-raised_Button_2" ],
                    "attributes": {
                      "filter": "drop-shadow(-3.061616997868383E-16px 5.0px 7.5px #999999)",
                      "text-shadow": "none"
                    }
                  },{
                    "target": [ "#s-76ad2c35-fa2f-411f-9753-aa40cfbd87a4 #s-raised_Button_2 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#3700B3"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-76ad2c35-fa2f-411f-9753-aa40cfbd87a4 #s-raised_Button_2" ],
                    "attributes": {
                      "filter": "drop-shadow(-1.2246467991473532E-16px 2.0px 2.5px #999999)",
                      "text-shadow": "none"
                    }
                  },{
                    "target": [ "#s-76ad2c35-fa2f-411f-9753-aa40cfbd87a4 #s-raised_Button_2 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#6200EE"
                    }
                  } ],
                  "exectype": "timed",
                  "delay": 200
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        },
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/997eda43-3176-4bad-9fb7-45caa225b843"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    }
  });