jQuery("#simulation")
  .on("click", ".s-21e4d016-9de8-4a8f-ba61-74fc232bde77 .click", function(event, data) {
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
                    "target": [ "#s-21e4d016-9de8-4a8f-ba61-74fc232bde77 #s-raised_Button" ],
                    "attributes": {
                      "filter": "drop-shadow(-3.061616997868383E-16px 5.0px 7.5px #999999)",
                      "text-shadow": "none"
                    }
                  },{
                    "target": [ "#s-21e4d016-9de8-4a8f-ba61-74fc232bde77 #s-raised_Button > .backgroundLayer > .colorLayer" ],
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
                    "target": [ "#s-21e4d016-9de8-4a8f-ba61-74fc232bde77 #s-raised_Button" ],
                    "attributes": {
                      "filter": "drop-shadow(-1.2246467991473532E-16px 2.0px 2.5px #999999)",
                      "text-shadow": "none"
                    }
                  },{
                    "target": [ "#s-21e4d016-9de8-4a8f-ba61-74fc232bde77 #s-raised_Button > .backgroundLayer > .colorLayer" ],
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
    } else if(jFirer.is("#s-raised_Button_1")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-21e4d016-9de8-4a8f-ba61-74fc232bde77 #s-raised_Button_1" ],
                    "attributes": {
                      "filter": "drop-shadow(-3.061616997868383E-16px 5.0px 7.5px #999999)",
                      "text-shadow": "none"
                    }
                  },{
                    "target": [ "#s-21e4d016-9de8-4a8f-ba61-74fc232bde77 #s-raised_Button_1 > .backgroundLayer > .colorLayer" ],
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
                    "target": [ "#s-21e4d016-9de8-4a8f-ba61-74fc232bde77 #s-raised_Button_1" ],
                    "attributes": {
                      "filter": "drop-shadow(-1.2246467991473532E-16px 2.0px 2.5px #999999)",
                      "text-shadow": "none"
                    }
                  },{
                    "target": [ "#s-21e4d016-9de8-4a8f-ba61-74fc232bde77 #s-raised_Button_1 > .backgroundLayer > .colorLayer" ],
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
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Group_5" ]
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
                    "target": [ "#s-21e4d016-9de8-4a8f-ba61-74fc232bde77 #s-raised_Button_2" ],
                    "attributes": {
                      "filter": "drop-shadow(-3.061616997868383E-16px 5.0px 7.5px #999999)",
                      "text-shadow": "none"
                    }
                  },{
                    "target": [ "#s-21e4d016-9de8-4a8f-ba61-74fc232bde77 #s-raised_Button_2 > .backgroundLayer > .colorLayer" ],
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
                    "target": [ "#s-21e4d016-9de8-4a8f-ba61-74fc232bde77 #s-raised_Button_2" ],
                    "attributes": {
                      "filter": "drop-shadow(-1.2246467991473532E-16px 2.0px 2.5px #999999)",
                      "text-shadow": "none"
                    }
                  },{
                    "target": [ "#s-21e4d016-9de8-4a8f-ba61-74fc232bde77 #s-raised_Button_2 > .backgroundLayer > .colorLayer" ],
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
                    "target": "screens/10a27818-fda6-4673-828a-bdf720b35618"
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
    } else if(jFirer.is("#s-raised_Button_3")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-21e4d016-9de8-4a8f-ba61-74fc232bde77 #s-raised_Button_3" ],
                    "attributes": {
                      "filter": "drop-shadow(-3.061616997868383E-16px 5.0px 7.5px #999999)",
                      "text-shadow": "none"
                    }
                  },{
                    "target": [ "#s-21e4d016-9de8-4a8f-ba61-74fc232bde77 #s-raised_Button_3 > .backgroundLayer > .colorLayer" ],
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
                    "target": [ "#s-21e4d016-9de8-4a8f-ba61-74fc232bde77 #s-raised_Button_3" ],
                    "attributes": {
                      "filter": "drop-shadow(-1.2246467991473532E-16px 2.0px 2.5px #999999)",
                      "text-shadow": "none"
                    }
                  },{
                    "target": [ "#s-21e4d016-9de8-4a8f-ba61-74fc232bde77 #s-raised_Button_3 > .backgroundLayer > .colorLayer" ],
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
    } else if(jFirer.is("#s-Image_72")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/dd531f10-fe4d-4875-a0f4-3dbbd22d4847"
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
    } else if(jFirer.is("#s-Rectangle_3")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-Group_5" ]
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