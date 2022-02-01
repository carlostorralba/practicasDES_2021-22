jQuery("#simulation")
  .on("click", ".s-74a9457e-7eeb-4012-bcb5-0478104a78a3 .click", function(event, data) {
    var jEvent, jFirer, cases;
    if(jimUtil.isAlternateModeActive()) return;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-raised_Button")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-74a9457e-7eeb-4012-bcb5-0478104a78a3 #s-raised_Button" ],
                    "attributes": {
                      "filter": "drop-shadow(-3.061616997868383E-16px 5.0px 7.5px #999999)",
                      "text-shadow": "none"
                    }
                  },{
                    "target": [ "#s-74a9457e-7eeb-4012-bcb5-0478104a78a3 #s-raised_Button > .backgroundLayer > .colorLayer" ],
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
                    "target": [ "#s-74a9457e-7eeb-4012-bcb5-0478104a78a3 #s-raised_Button" ],
                    "attributes": {
                      "filter": "drop-shadow(-1.2246467991473532E-16px 2.0px 2.5px #999999)",
                      "text-shadow": "none"
                    }
                  },{
                    "target": [ "#s-74a9457e-7eeb-4012-bcb5-0478104a78a3 #s-raised_Button > .backgroundLayer > .colorLayer" ],
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
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Image_71")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/23d59fd9-cc64-41fe-9c87-4a02f734d230"
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