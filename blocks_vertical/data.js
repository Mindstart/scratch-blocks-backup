/**
 * @license
 * Visual Blocks Editor
 *
 * Copyright 2016 Massachusetts Institute of Technology
 * All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

'use strict';

goog.provide('Blockly.Blocks.data');
goog.provide('Blockly.Constants.Data');

goog.require('Blockly.Blocks');
goog.require('Blockly.Colours');
goog.require('Blockly.constants');
goog.require('Blockly.ScratchBlocks.VerticalExtensions');


Blockly.Blocks['data_variable'] = {
  /**
   * Block of Variables
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": "%1",
      "lastDummyAlign0": "CENTRE",
      "args0": [
        {
          "type": "field_variable_getter",
          "text": "",
          "name": "VARIABLE",
          "variableType": ""
        }
      ],
      "category": Blockly.Categories.data,
      "checkboxInFlyout": true,
      "colour": Blockly.Colours.data.primary,
      "colourSecondary": Blockly.Colours.data.secondary,
      "colourTertiary": Blockly.Colours.data.tertiary,
      "extensions": ["contextMenu_getVariableBlock", "output_string"]
    });
  }
};

Blockly.Blocks['data_strvariable'] = {
  /**
   * Block of Variables
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": "%1",
      "lastDummyAlign0": "CENTRE",
      "args0": [
        {
          "type": "field_variable_getter",
          "text": "hello",
          "name": "STR_VARIABLE",
          "variableType": "str"
        }
      ],
      "category": Blockly.Categories.data,
      "checkboxInFlyout": true,
      "colour": Blockly.Colours.data_string.primary,
      "colourSecondary": Blockly.Colours.data_string.secondary,
      "colourTertiary": Blockly.Colours.data_string.tertiary,
      "extensions": ["contextMenu_getStrVariableBlock", "output_string"]
    });
  }
};

Blockly.Blocks['data_booleanvariable'] = {
  /**
   * Block of Variables
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": "%1",
      "lastDummyAlign0": "CENTRE",
      "args0": [
        {
          "type": "field_variable_getter",
          "text": "true",
          "name": "BOOLEAN_VARIABLE",
          "variableType": "boolean"
        }
      ],
      "category": Blockly.Categories.data,
      "checkboxInFlyout": true,
      "colour": Blockly.Colours.data_booleans.primary,
      "colourSecondary": Blockly.Colours.data_booleans.secondary,
      "colourTertiary": Blockly.Colours.data_booleans.tertiary,
      "extensions": ["contextMenu_getBooleanVariableBlock", "output_string"]
    });
  }
};

Blockly.Blocks['data_arraynumvariable'] = {
  /**
   * Block of Variables
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": "%1",
      "lastDummyAlign0": "CENTRE",
      "args0": [
        {
          "type": "field_variable_getter",
          "text": '0',
          "name": "ARRAY_NUM_VARIABLE",
          "variableType": "str"
        }
      ],
      "category": Blockly.Categories.data,
      "checkboxInFlyout": true,
      "colour": Blockly.Colours.data_arraynum.primary,
      "colourSecondary": Blockly.Colours.data_arraynum.secondary,
      "colourTertiary": Blockly.Colours.data_arraynum.tertiary,
      "extensions": ["contextMenu_getARRAYNUMVariableBlock", "output_string"]
    });
  }
};

Blockly.Blocks['data_arraycharvariable'] = {
  /**
   * Block of Variables
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": "%1",
      "lastDummyAlign0": "CENTRE",
      "args0": [
        {
          "type": "field_variable_getter",
          "text": "a",
          "name": "ARRAY_CHAR_VARIABLE",
          "variableType": "str"
        }
      ],
      "category": Blockly.Categories.data,
      "checkboxInFlyout": true,
      "colour": Blockly.Colours.data_arraychar.primary,
      "colourSecondary": Blockly.Colours.data_arraychar.secondary,
      "colourTertiary": Blockly.Colours.data_arraychar.tertiary,
      "extensions": ["contextMenu_getARRAYCHARVariableBlock", "output_string"]
    });
  }
};


Blockly.Blocks['data_setvariableto'] = {
  /**
   * Block to set variable to a certain value
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.DATA_SETVARIABLETO,
      "args0": [
        {
          "type": "field_variable",
          "name": "VARIABLE"
        },
        {
          "type": "input_value",
          "name": "VALUE"
        }
      ],
      "category": Blockly.Categories.data,
      "extensions": ["colours_data", "shape_statement"]
    });
  }
};
Blockly.Blocks['data_setstrvariableto'] = {
  /**
   * Block to set string variable to a certain value
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.DATA_SETVARIABLETO,
      "args0": [
        {
          "type": "field_variable",
          "name": "STR_VARIABLE"
        },
        {
          "type": "input_value",
          "name": "VALUE"
        }
      ],
      "category": Blockly.Categories.data,
      "colour": Blockly.Colours.data_string.primary,
      "colourSecondary": Blockly.Colours.data_string.secondary,
      "colourTertiary": Blockly.Colours.data_string.tertiary,
      "extensions": ["shape_statement"]
    });
  }
};

Blockly.Blocks['data_setbooleanvariableto'] = {
  /**
   * Block to set string variable to a certain value
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.DATA_SETVARIABLETO,
      "args0": [
        {
          "type": "field_variable",
          "name": "BOOLEAN_VARIABLE"
        },
        {
          "type": "field_dropdown",
          "name": "VALUE",
           "value": "false",
          "options": [
            // ["1", "1"],
            [Blockly.Msg.DATA_INDEX_TRUE, "true"],
            [Blockly.Msg.DATA_INDEX_FALSE, "false"]
          ]
        }
      ],
      "category": Blockly.Categories.data,
      "colour": Blockly.Colours.data_booleans.primary,
      "colourSecondary": Blockly.Colours.data_booleans.secondary,
      "colourTertiary": Blockly.Colours.data_booleans.tertiary,
      "extensions": ["shape_statement"]
    });
  }
};

Blockly.Blocks['data_setarraynumvariableto'] = {
  /**
   * Block to set string variable to a certain value
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.DATA_SETVARIABLETO,
      "args0": [
        {
          "type": "field_variable",
          "name": "ARRAY_NUM_VARIABLE"
        },
        {
          "type": "input_value",
          "name": "VALUE"
        }
      ],
      "category": Blockly.Categories.data,
      "colour": Blockly.Colours.data_arraynum.primary,
      "colourSecondary": Blockly.Colours.data_arraynum.secondary,
      "colourTertiary": Blockly.Colours.data_arraynum.tertiary,
      "extensions": ["shape_statement"]
    });
  }
};

Blockly.Blocks['data_setarraycharvariableto'] = {
  /**
   * Block to set string variable to a certain value
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.DATA_SETVARIABLETO,
      "args0": [
        {
          "type": "field_variable",
          "name": "ARRAY_CHAR_VARIABLE"
        },
        {
          "type": "input_value",
          "name": "VALUE"
        }
      ],
      "category": Blockly.Categories.data,
      "colour": Blockly.Colours.data_arraychar.primary,
      "colourSecondary": Blockly.Colours.data_arraychar.secondary,
      "colourTertiary": Blockly.Colours.data_arraychar.tertiary,
      "extensions": ["shape_statement"]
    });
  }
};

Blockly.Blocks['data_changevariableby'] = {
  /**
   * Block to change variable by a certain value
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.DATA_CHANGEVARIABLEBY,
      "args0": [
        {
          "type": "field_variable",
          "name": "VARIABLE"
        },
        {
          "type": "input_value",
          "name": "VALUE"
        }
      ],
      "category": Blockly.Categories.data,
      "extensions": ["colours_data", "shape_statement"]
    });
  }
};

Blockly.Blocks['data_comparevariableby'] = {
  /**
   * Block to compare variable by a certain value
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.DATA_CHANGEVARIABLEBY,
      "args0": [
        {
          "type": "field_variable",
          "name": "VARIABLE"
        },
        {
          "type": "input_value",
          "name": "VALUE"
        },
        {
          "type": "input_value",
          "name": "VALUE2"
        },

      ],
      "category": Blockly.Categories.data,
      "extensions": ["colours_data", "output_boolean"]
    });
  }
};

Blockly.Blocks['data_togglevariableby'] = {
  /**
   * Block to change variable by a certain value
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.DATA_TOGGLEVARIABLEBY,
      "args0": [
        {
          "type": "field_variable",
          "name": "BOOLEAN_VARIABLE"
        }
      ],
      "category": Blockly.Categories.data,
      "colour": Blockly.Colours.data_booleans.primary,
      "colourSecondary": Blockly.Colours.data_booleans.secondary,
      "colourTertiary": Blockly.Colours.data_booleans.tertiary,
      "extensions": [ "shape_statement"]
    });
  }
};

Blockly.Blocks['data_showvariable'] = {
  /**
   * Block to show a variable
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.DATA_SHOWVARIABLE,
      "args0": [
        {
          "type": "field_variable",
          "name": "VARIABLE"
        }
      ],
      "previousStatement": null,
      "nextStatement": null,
      "category": Blockly.Categories.data,
      "colour": Blockly.Colours.data.primary,
      "colourSecondary": Blockly.Colours.data.secondary,
      "colourTertiary": Blockly.Colours.data.tertiary
    });
  }
};

Blockly.Blocks['data_hidevariable'] = {
  /**
   * Block to hide a variable
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.DATA_HIDEVARIABLE,
      "args0": [
        {
          "type": "field_variable",
          "name": "VARIABLE"
        }
      ],
      "previousStatement": null,
      "nextStatement": null,
      "category": Blockly.Categories.data,
      "colour": Blockly.Colours.data.primary,
      "colourSecondary": Blockly.Colours.data.secondary,
      "colourTertiary": Blockly.Colours.data.tertiary
    });
  }
};

Blockly.Blocks['data_listcontents'] = {
  /**
   * List reporter.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": "%1",
      "args0": [
        {
          "type": "field_variable_getter",
          "text": "",
          "name": "LIST",
          "variableType": Blockly.LIST_VARIABLE_TYPE
        }
      ],
      "category": Blockly.Categories.dataLists,
      "extensions": ["contextMenu_getListBlock", "colours_data_lists", "output_string"],
      "checkboxInFlyout": true
    });
  }
};

Blockly.Blocks['data_listindexall'] = {
  /**
   * List index menu, with all option.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": "%1",
      "args0": [
        {
          "type": "field_numberdropdown",
          "name": "INDEX",
          "value": "1",
          "min": 1,
          "precision": 1,
          "options": [
            ["1", "1"],
            [Blockly.Msg.DATA_INDEX_LAST, "last"],
            [Blockly.Msg.DATA_INDEX_ALL, "all"]
          ]
        }
      ],
      "category": Blockly.Categories.data,
      "extensions": ["colours_textfield", "output_string"]
    });
  }
};

Blockly.Blocks['data_listindexrandom'] = {
  /**
   * List index menu, with random option.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": "%1",
      "args0": [
        {
          "type": "field_numberdropdown",
          "name": "INDEX",
          "value": "1",
          "min": 1,
          "precision": 1,
          "options": [
            ["1", "1"],
            [Blockly.Msg.DATA_INDEX_LAST, "last"],
            [Blockly.Msg.DATA_INDEX_RANDOM, "random"]
          ]
        }
      ],
      "category": Blockly.Categories.data,
      "extensions": ["colours_textfield", "output_string"]
    });
  }
};

Blockly.Blocks['data_addtolist'] = {
  /**
   * Block to add item to list.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.DATA_ADDTOLIST,
      "args0": [
        {
          "type": "input_value",
          "name": "ITEM"
        },
        {
          "type": "field_variable",
          "name": "LIST",
          "variableTypes": [Blockly.LIST_VARIABLE_TYPE]
        }
      ],
      "category": Blockly.Categories.dataLists,
      "extensions": ["colours_data_lists", "shape_statement"]
    });
  }
};

Blockly.Blocks['data_deleteoflist'] = {
  /**
   * Block to delete item from list.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.DATA_DELETEOFLIST,
      "args0": [
        {
          "type": "input_value",
          "name": "INDEX"
        },
        {
          "type": "field_variable",
          "name": "LIST",
          "variableTypes": [Blockly.LIST_VARIABLE_TYPE]
        }
      ],
      "category": Blockly.Categories.dataLists,
      "extensions": ["colours_data_lists", "shape_statement"]
    });
  }
};

Blockly.Blocks['data_deletealloflist'] = {
  /**
   * Block to delete all items from list.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.DATA_DELETEALLOFLIST,
      "args0": [
        {
          "type": "field_variable",
          "name": "LIST",
          "variableTypes": [Blockly.LIST_VARIABLE_TYPE]
        }
      ],
      "category": Blockly.Categories.dataLists,
      "extensions": ["colours_data_lists", "shape_statement"]
    });
  }
};

Blockly.Blocks['data_insertatlist'] = {
  /**
   * Block to insert item to list.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.DATA_INSERTATLIST,
      "args0": [
        {
          "type": "input_value",
          "name": "ITEM"
        },
        {
          "type": "input_value",
          "name": "INDEX"
        },
        {
          "type": "field_variable",
          "name": "LIST",
          "variableTypes": [Blockly.LIST_VARIABLE_TYPE]
        }
      ],
      "category": Blockly.Categories.dataLists,
      "extensions": ["colours_data_lists", "shape_statement"]
    });
  }
};

Blockly.Blocks['data_replaceitemoflist'] = {
  /**
   * Block to insert item to list.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.DATA_REPLACEITEMOFLIST,
      "args0": [
        {
          "type": "input_value",
          "name": "INDEX"
        },
        {
          "type": "field_variable",
          "name": "LIST",
          "variableTypes": [Blockly.LIST_VARIABLE_TYPE]
        },
        {
          "type": "input_value",
          "name": "ITEM"
        }
      ],
      "category": Blockly.Categories.dataLists,
      "extensions": ["colours_data_lists", "shape_statement"]
    });
  }
};

Blockly.Blocks['data_itemoflist'] = {
  /**
   * Block for reporting item of list.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.DATA_ITEMOFLIST,
      "args0": [
        {
          "type": "input_value",
          "name": "INDEX"
        },
        {
          "type": "field_variable",
          "name": "LIST",
          "variableTypes": [Blockly.LIST_VARIABLE_TYPE]
        }
      ],
      "output": null,
      "category": Blockly.Categories.dataLists,
      "extensions": ["colours_data_lists"],
      "outputShape": Blockly.OUTPUT_SHAPE_ROUND
    });
  }
};

Blockly.Blocks['data_itemofarraynum'] = {
  /**
   * Block for reporting item of arraynum.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.DATA_ITEMOFARRAYNUM,
      "args0": [
        {
          "type": "input_value",
          "name": "INDEX"
        },
        {
          "type": "field_variable",
          "name": "ARRAY_NUM_VARIABLE",
          "variableTypes": [Blockly.STRING_VARIABLE_TYPE]
        }
      ],
      "output": null,
      "category": Blockly.Categories.data,
      "colour": Blockly.Colours.data_arraynum.primary,
      "colourSecondary": Blockly.Colours.data_arraynum.secondary,
      "colourTertiary": Blockly.Colours.data_arraynum.tertiary,
      // "extensions": ["colours_data"],
      "outputShape": Blockly.OUTPUT_SHAPE_ROUND
    });
  }
};

Blockly.Blocks['data_itemofarraychar'] = {
  /**
   * Block for reporting item of arraychar.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.DATA_ITEMOFARRAYCHAR,
      "args0": [
        {
          "type": "input_value",
          "name": "INDEX"
        },
        {
          "type": "field_variable",
          "name": "ARRAY_CHAR_VARIABLE",
          "variableTypes": [Blockly.STRING_VARIABLE_TYPE]
        }
      ],
      "output": null,
      "category": Blockly.Categories.data,
      "colour": Blockly.Colours.data_arraychar.primary,
      "colourSecondary": Blockly.Colours.data_arraychar.secondary,
      "colourTertiary": Blockly.Colours.data_arraychar.tertiary,
      // "extensions": ["colours_data_lists"],
      "outputShape": Blockly.OUTPUT_SHAPE_ROUND
    });
  }
};

Blockly.Blocks['data_itemnumoflist'] = {
  /**
   * Block for reporting the item # of a string in a list.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.DATA_ITEMNUMOFLIST,
      "args0": [
        {
          "type": "input_value",
          "name": "ITEM"
        },
        {
          "type": "field_variable",
          "name": "LIST",
          "variableTypes": [Blockly.LIST_VARIABLE_TYPE]
        }
      ],
      "output": null,
      "category": Blockly.Categories.dataLists,
      "extensions": ["colours_data_lists"],
      "outputShape": Blockly.OUTPUT_SHAPE_ROUND
    });
  }
};

Blockly.Blocks['data_lengthoflist'] = {
  /**
   * Block for reporting length of list.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.DATA_LENGTHOFLIST,
      "args0": [
        {
          "type": "field_variable",
          "name": "LIST",
          "variableTypes": [Blockly.LIST_VARIABLE_TYPE]
        }
      ],
      "category": Blockly.Categories.dataLists,
      "extensions": ["colours_data_lists", "output_number"]
    });
  }
};

Blockly.Blocks['data_lengthofarraynum'] = {
  /**
   * Block for reporting length of arraynum.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.DATA_LENGTHOFARRAY,
      "args0": [
        {
          "type": "field_variable",
          "name": "ARRAY_NUM_VARIABLE",
          "variableTypes": [Blockly.STRING_VARIABLE_TYPE]
        }
      ],
      "category": Blockly.Categories.data,
      "colour": Blockly.Colours.data_arraynum.primary,
      "colourSecondary": Blockly.Colours.data_arraynum.secondary,
      "colourTertiary": Blockly.Colours.data_arraynum.tertiary,
      "extensions": ["output_number"]
    });
  }
};

Blockly.Blocks['data_lengthofarraychar'] = {
  /**
   * Block for reporting length of arraychar.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.DATA_LENGTHOFARRAY,
      "args0": [
        {
          "type": "field_variable",
          "name": "ARRAY_CHAR_VARIABLE",
          "variableTypes": [Blockly.STRING_VARIABLE_TYPE]
        }
      ],
      "category": Blockly.Categories.data,
      "colour": Blockly.Colours.data_arraychar.primary,
      "colourSecondary": Blockly.Colours.data_arraychar.secondary,
      "colourTertiary": Blockly.Colours.data_arraychar.tertiary,
      "extensions": ["output_number"]
    });
  }
};

Blockly.Blocks['data_listcontainsitem'] = {
  /**
   * Block to report whether list contains item.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.DATA_LISTCONTAINSITEM,
      "args0": [
        {
          "type": "field_variable",
          "name": "LIST",
          "variableTypes": [Blockly.LIST_VARIABLE_TYPE]
        },
        {
          "type": "input_value",
          "name": "ITEM"
        }
      ],
      "category": Blockly.Categories.dataLists,
      "extensions": ["colours_data_lists", "output_boolean"]
    });
  }
};

Blockly.Blocks['data_showlist'] = {
  /**
   * Block to show a list.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.DATA_SHOWLIST,
      "args0": [
        {
          "type": "field_variable",
          "name": "LIST",
          "variableTypes": [Blockly.LIST_VARIABLE_TYPE]
        }
      ],
      "category": Blockly.Categories.dataLists,
      "extensions": ["colours_data_lists", "shape_statement"]
    });
  }
};

Blockly.Blocks['data_hidelist'] = {
  /**
   * Block to hide a list.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.DATA_HIDELIST,
      "args0": [
        {
          "type": "field_variable",
          "name": "LIST",
          "variableTypes": [Blockly.LIST_VARIABLE_TYPE]
        }
      ],
      "category": Blockly.Categories.dataLists,
      "extensions": ["colours_data_lists", "shape_statement"]
    });
  }
};

/**
 * Mixin to add a context menu for a data_variable block.  It adds one item for
 * each variable defined on the workspace.
 * @mixin
 * @augments Blockly.Block
 * @package
 * @readonly
 */
Blockly.Constants.Data.CUSTOM_CONTEXT_MENU_GET_VARIABLE_MIXIN = {
  /**
   * Add context menu option to change the selected variable.
   * @param {!Array} options List of menu options to add to.
   * @this Blockly.Block
   */
  customContextMenu: function(options) {
    var fieldName = 'VARIABLE';
    if (this.isCollapsed()) {
      return;
    }
    var currentVarName = this.getField(fieldName).text_;
    if (!this.isInFlyout) {
      var variablesList = this.workspace.getVariablesOfType('');
      variablesList.sort(function(a, b) {
        return Blockly.scratchBlocksUtils.compareStrings(a.name, b.name);
      });
      for (var i = 0; i < variablesList.length; i++) {
        var varName = variablesList[i].name;
        if (varName == currentVarName) continue;

        var option = {enabled: true};
        option.text = varName;

        option.callback =
            Blockly.Constants.Data.VARIABLE_OPTION_CALLBACK_FACTORY(this,
                variablesList[i].getId(), fieldName);
        options.push(option);
      }
    } else {
      var renameOption = {
        text: Blockly.Msg.RENAME_VARIABLE,
        enabled: true,
        callback: Blockly.Constants.Data.RENAME_OPTION_CALLBACK_FACTORY(this,
            fieldName)
      };
      var deleteOption = {
        text: Blockly.Msg.DELETE_VARIABLE.replace('%1', currentVarName),
        enabled: true,
        callback: Blockly.Constants.Data.DELETE_OPTION_CALLBACK_FACTORY(this,
            fieldName)
      };
      options.push(renameOption);
      options.push(deleteOption);
    }
  }
};

Blockly.Extensions.registerMixin('contextMenu_getVariableBlock',
    Blockly.Constants.Data.CUSTOM_CONTEXT_MENU_GET_VARIABLE_MIXIN);

Blockly.Constants.Data.CUSTOM_CONTEXT_MENU_GET_STRVARIABLE_MIXIN = {
  /**
   * Add context menu option to change the selected variable.
   * @param {!Array} options List of menu options to add to.
   * @this Blockly.Block
   */
  customContextMenu: function(options) {
    var fieldName = 'STR_VARIABLE';
    if (this.isCollapsed()) {
      return;
    }
    var currentVarName = this.getField(fieldName).text_;
    if (!this.isInFlyout) {
      var variablesList = this.workspace.getVariablesOfType('str');
      variablesList.sort(function(a, b) {
        return Blockly.scratchBlocksUtils.compareStrings(a.name, b.name);
      });
      for (var i = 0; i < variablesList.length; i++) {
        var varName = variablesList[i].name;
        if (varName == currentVarName) continue;

        var option = {enabled: true};
        option.text = varName;

        option.callback =
          Blockly.Constants.Data.VARIABLE_OPTION_CALLBACK_FACTORY(this,
            variablesList[i].getId(), fieldName);
        options.push(option);
      }
    } else {
      var renameOption = {
        text: Blockly.Msg.RENAME_STR_VARIABLE,
        enabled: true,
        callback: Blockly.Constants.Data.RENAME_OPTION_CALLBACK_FACTORY(this,
          fieldName)
      };
      var deleteOption = {
        text: Blockly.Msg.DELETE_STR_VARIABLE.replace('%1', currentVarName),
        enabled: true,
        callback: Blockly.Constants.Data.DELETE_OPTION_CALLBACK_FACTORY(this,
          fieldName)
      };
      options.push(renameOption);
      options.push(deleteOption);
    }
  }
};
Blockly.Extensions.registerMixin('contextMenu_getStrVariableBlock',  Blockly.Constants.Data.CUSTOM_CONTEXT_MENU_GET_STRVARIABLE_MIXIN);

Blockly.Constants.Data.CUSTOM_CONTEXT_MENU_GET_BOOLEANVARIABLE_MIXIN = {
customContextMenu: function(options) {
  var fieldName = 'BOOLEAN_VARIABLE';
  if (this.isCollapsed()) {
    return;
  }
  var currentVarName = this.getField(fieldName).text_;
  if (!this.isInFlyout) {
    var variablesList = this.workspace.getVariablesOfType('boolean');
    variablesList.sort(function(a, b) {
      return Blockly.scratchBlocksUtils.compareStrings(a.name, b.name);
    });
    for (var i = 0; i < variablesList.length; i++) {
      var varName = variablesList[i].name;
      if (varName == currentVarName) continue;

      var option = {enabled: true};
      option.text = varName;

      option.callback =
        Blockly.Constants.Data.VARIABLE_OPTION_CALLBACK_FACTORY(this,
          variablesList[i].getId(), fieldName);
      options.push(option);
    }
  } else {
    var renameOption = {
      text: Blockly.Msg.RENAME_BOOLEAN_VARIABLE,
      enabled: true,
      callback: Blockly.Constants.Data.RENAME_OPTION_CALLBACK_FACTORY(this,
        fieldName)
    };
    var deleteOption = {
      text: Blockly.Msg.DELETE_BOOLEAN_VARIABLE.replace('%1', currentVarName),
      enabled: true,
      callback: Blockly.Constants.Data.DELETE_OPTION_CALLBACK_FACTORY(this,
        fieldName)
    };
    options.push(renameOption);
    options.push(deleteOption);
  }
}
};
Blockly.Extensions.registerMixin('contextMenu_getBooleanVariableBlock',
  Blockly.Constants.Data.CUSTOM_CONTEXT_MENU_GET_BOOLEANVARIABLE_MIXIN);

Blockly.Constants.Data.CUSTOM_CONTEXT_MENU_GET_ARRAYNUMVARIABLE_MIXIN = {
  customContextMenu: function(options) {
    var fieldName = 'ARRAY_NUM_VARIABLE';
    if (this.isCollapsed()) {
      return;
    }
    var currentVarName = this.getField(fieldName).text_;
    if (!this.isInFlyout) {
      var variablesList = this.workspace.getVariablesOfType('array_num');
      variablesList.sort(function(a, b) {
        return Blockly.scratchBlocksUtils.compareStrings(a.name, b.name);
      });
      for (var i = 0; i < variablesList.length; i++) {
        var varName = variablesList[i].name;
        if (varName == currentVarName) continue;

        var option = {enabled: true};
        option.text = varName;

        option.callback =
          Blockly.Constants.Data.VARIABLE_OPTION_CALLBACK_FACTORY(this,
            variablesList[i].getId(), fieldName);
        options.push(option);
      }
    } else {
      var renameOption = {
        text: Blockly.Msg.RENAME_ARRAY_NUM_VARIABLE,
        enabled: true,
        callback: Blockly.Constants.Data.RENAME_OPTION_CALLBACK_FACTORY(this,
          fieldName)
      };
      var deleteOption = {
        text: Blockly.Msg.DELETE_ARRAY_NUM_VARIABLE.replace('%1', currentVarName),
        enabled: true,
        callback: Blockly.Constants.Data.DELETE_OPTION_CALLBACK_FACTORY(this,
          fieldName)
      };
      options.push(renameOption);
      options.push(deleteOption);
    }
  }
};
Blockly.Extensions.registerMixin('contextMenu_getARRAYNUMVariableBlock',
  Blockly.Constants.Data.CUSTOM_CONTEXT_MENU_GET_ARRAYNUMVARIABLE_MIXIN);

Blockly.Constants.Data.CUSTOM_CONTEXT_MENU_GET_ARRAYCHARVARIABLE_MIXIN = {
  customContextMenu: function(options) {
    var fieldName = 'ARRAY_CHAR_VARIABLE';
    if (this.isCollapsed()) {
      return;
    }
    var currentVarName = this.getField(fieldName).text_;
    if (!this.isInFlyout) {
      var variablesList = this.workspace.getVariablesOfType('array_char');
      variablesList.sort(function(a, b) {
        return Blockly.scratchBlocksUtils.compareStrings(a.name, b.name);
      });
      for (var i = 0; i < variablesList.length; i++) {
        var varName = variablesList[i].name;
        if (varName == currentVarName) continue;

        var option = {enabled: true};
        option.text = varName;

        option.callback =
          Blockly.Constants.Data.VARIABLE_OPTION_CALLBACK_FACTORY(this,
            variablesList[i].getId(), fieldName);
        options.push(option);
      }
    } else {
      var renameOption = {
        text: Blockly.Msg.RENAME_ARRAY_CHAR_VARIABLE,
        enabled: true,
        callback: Blockly.Constants.Data.RENAME_OPTION_CALLBACK_FACTORY(this,
          fieldName)
      };
      var deleteOption = {
        text: Blockly.Msg.DELETE_ARRAY_CHAR_VARIABLE.replace('%1', currentVarName),
        enabled: true,
        callback: Blockly.Constants.Data.DELETE_OPTION_CALLBACK_FACTORY(this,
          fieldName)
      };
      options.push(renameOption);
      options.push(deleteOption);
    }
  }
};
Blockly.Extensions.registerMixin('contextMenu_getARRAYCHARVariableBlock',
  Blockly.Constants.Data.CUSTOM_CONTEXT_MENU_GET_ARRAYCHARVARIABLE_MIXIN);

/**
 * Mixin to add a context menu for a data_listcontents block.  It adds one item for
 * each list defined on the workspace.
 * @mixin
 * @augments Blockly.Block
 * @package
 * @readonly
 */
Blockly.Constants.Data.CUSTOM_CONTEXT_MENU_GET_LIST_MIXIN = {
  /**
   * Add context menu option to change the selected list.
   * @param {!Array} options List of menu options to add to.
   * @this Blockly.Block
   */
  customContextMenu: function(options) {
    var fieldName = 'LIST';
    if (this.isCollapsed()) {
      return;
    }
    var currentVarName = this.getField(fieldName).text_;
    if (!this.isInFlyout) {
      var variablesList = this.workspace.getVariablesOfType('list');
      variablesList.sort(function(a, b) {
        return Blockly.scratchBlocksUtils.compareStrings(a.name, b.name);
      });
      for (var i = 0; i < variablesList.length; i++) {
        var varName = variablesList[i].name;
        if (varName == currentVarName) continue;

        var option = {enabled: true};
        option.text = varName;

        option.callback =
            Blockly.Constants.Data.VARIABLE_OPTION_CALLBACK_FACTORY(this,
                variablesList[i].getId(), fieldName);
        options.push(option);
      }
    } else {
      var renameOption = {
        text: Blockly.Msg.RENAME_LIST,
        enabled: true,
        callback: Blockly.Constants.Data.RENAME_OPTION_CALLBACK_FACTORY(this,
            fieldName)
      };
      var deleteOption = {
        text: Blockly.Msg.DELETE_LIST.replace('%1', currentVarName),
        enabled: true,
        callback: Blockly.Constants.Data.DELETE_OPTION_CALLBACK_FACTORY(this,
            fieldName)
      };
      options.push(renameOption);
      options.push(deleteOption);
    }
  }
};
Blockly.Extensions.registerMixin('contextMenu_getListBlock',
    Blockly.Constants.Data.CUSTOM_CONTEXT_MENU_GET_LIST_MIXIN);

/**
 * Callback factory for dropdown menu options associated with a variable getter
 * block.  Each variable on the workspace gets its own item in the dropdown
 * menu, and clicking on that item changes the text of the field on the source
 * block.
 * @param {!Blockly.Block} block The block to update.
 * @param {string} id The id of the variable to set on this block.
 * @param {string} fieldName The name of the field to update on the block.
 * @return {!function()} A function that updates the block with the new name.
 */
Blockly.Constants.Data.VARIABLE_OPTION_CALLBACK_FACTORY = function(block,
    id, fieldName) {
  return function() {
    var variableField = block.getField(fieldName);
    if (!variableField) {
      console.log("Tried to get a variable field on the wrong type of block.");
    }
    variableField.setValue(id);
  };
};

/**
 * Callback for rename variable dropdown menu option associated with a
 * variable getter block.
 * @param {!Blockly.Block} block The block with the variable to rename.
 * @param {string} fieldName The name of the field to inspect on the block.
 * @return {!function()} A function that renames the variable.
 */
Blockly.Constants.Data.RENAME_OPTION_CALLBACK_FACTORY = function(block,
    fieldName) {
  return function() {
    var workspace = block.workspace;
    var variable = block.getField(fieldName).getVariable();
    Blockly.Variables.renameVariable(workspace, variable);
  };
};

/**
 * Callback for delete variable dropdown menu option associated with a
 * variable getter block.
 * @param {!Blockly.Block} block The block with the variable to delete.
 * @param {string} fieldName The name of the field to inspect on the block.
 * @return {!function()} A function that deletes the variable.
 */
Blockly.Constants.Data.DELETE_OPTION_CALLBACK_FACTORY = function(block,
    fieldName) {
  return function() {
    var workspace = block.workspace;
    var variable = block.getField(fieldName).getVariable();
    workspace.deleteVariableById(variable.getId());
  };
};
