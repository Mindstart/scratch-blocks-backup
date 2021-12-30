/**
 * @license
 * Visual Blocks Editor
 *
 * Copyright 2017 Google Inc.
 * https://developers.google.com/blockly/
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

/**
 * @fileoverview Data Flyout components including variable and list blocks.
 * @author marisaleung@google.com (Marisa Leung)
 */
'use strict';

/**
 * @name Blockly.DataCategory
 * @namespace
 **/
goog.provide('Blockly.DataCategory');

goog.require('Blockly.Blocks');
goog.require('Blockly.VariableModel');
goog.require('Blockly.Variables');
goog.require('Blockly.Workspace');

/**
 * Construct the blocks required by the flyout for the variable category.
 * @param {!Blockly.Workspace} workspace The workspace containing variables.
 * @return {!Array.<!Element>} Array of XML block elements.
 */
Blockly.DataCategory = function(workspace) {
  var variableModelList = workspace.getVariablesOfType('');
  variableModelList.sort(Blockly.VariableModel.compareByName);
  var xmlList = [];

  Blockly.DataCategory.addCreateButton(xmlList, workspace, 'VARIABLE');

  for (var i = 0; i < variableModelList.length; i++) {
    Blockly.DataCategory.addDataVariable(xmlList, variableModelList[i],0);
  }

  if (variableModelList.length > 0) {
    xmlList[xmlList.length - 1].setAttribute('gap', 24);
    var firstVariable = variableModelList[0];

    Blockly.DataCategory.addSetVariableTo(xmlList, firstVariable,0);
    Blockly.DataCategory.addChangeVariableBy(xmlList, firstVariable,0);
    // Blockly.DataCategory.addShowVariable(xmlList, firstVariable);
    // Blockly.DataCategory.addHideVariable(xmlList, firstVariable);
  }

  // Now add string variables to the flyout
  Blockly.DataCategory.addCreateButton(xmlList, workspace, 'STR_VARIABLE');
  variableModelList = workspace.getVariablesOfType(Blockly.STRING_VARIABLE_TYPE);
  variableModelList.sort(Blockly.VariableModel.compareByName);

  for (var i = 0; i < variableModelList.length; i++) {
    Blockly.DataCategory.addDataVariable(xmlList, variableModelList[i],1);
  }

  if (variableModelList.length > 0) {
    xmlList[xmlList.length - 1].setAttribute('gap', 24);
    var firstVariable = variableModelList[0];
    Blockly.DataCategory.addSetVariableTo(xmlList, firstVariable,1);
    //Blockly.DataCategory.addChangeVariableBy(xmlList, firstVariable,1);
  }

  // Now add boolean variables to the flyout
  Blockly.DataCategory.addCreateButton(xmlList, workspace, 'BOOLEAN_VARIABLE');
  variableModelList = workspace.getVariablesOfType(Blockly.BOOLEAN_VARIABLE_TYPE);
  variableModelList.sort(Blockly.VariableModel.compareByName);

  for (var i = 0; i < variableModelList.length; i++) {
    Blockly.DataCategory.addDataVariable(xmlList, variableModelList[i],2);
  }

  if (variableModelList.length > 0) {
    xmlList[xmlList.length - 1].setAttribute('gap', 24);
    var firstVariable = variableModelList[0];
    Blockly.DataCategory.addSetVariableTo(xmlList, firstVariable,2);
    Blockly.DataCategory.addToggleVariableBy(xmlList, firstVariable,2);
  }

  Blockly.DataCategory.addCreateButton(xmlList, workspace, 'ARRAY_NUM_VARIABLE');
  variableModelList = workspace.getVariablesOfType(Blockly.ARRAY_NUM_VARIABLE_TYPE);
  variableModelList.sort(Blockly.VariableModel.compareByName);
 // console.info("variableModelList.length2= ",variableModelList.length)
 //  for (var i = 0; i < variableModelList.length; i++) {
 //    Blockly.DataCategory.addDataVariable(xmlList, variableModelList[i],3);
 //
 //  }

  if (variableModelList.length > 0) {
    xmlList[xmlList.length - 1].setAttribute('gap', 24);
    var firstVariable = variableModelList[0];
    Blockly.DataCategory.addItemOfArray(xmlList, firstVariable,3);
    Blockly.DataCategory.addLengthOfArray(xmlList, firstVariable,3);
    Blockly.DataCategory.addSetVariableTo(xmlList, firstVariable,3);

  }

  Blockly.DataCategory.addCreateButton(xmlList, workspace, 'ARRAY_CHAR_VARIABLE');
  variableModelList = workspace.getVariablesOfType(Blockly.ARRAY_CHAR_VARIABLE_TYPE);
  variableModelList.sort(Blockly.VariableModel.compareByName);
 // console.info("variableModelList.length2= ",variableModelList.length)
 //  for (var i = 0; i < variableModelList.length; i++) {
 //    Blockly.DataCategory.addDataVariable(xmlList, variableModelList[i],4);
 //  }

  if (variableModelList.length > 0) {
    xmlList[xmlList.length - 1].setAttribute('gap', 24);
    var firstVariable = variableModelList[0];
    Blockly.DataCategory.addItemOfArray(xmlList, firstVariable,4);
    Blockly.DataCategory.addLengthOfArray(xmlList, firstVariable,4);
    Blockly.DataCategory.addSetVariableTo(xmlList, firstVariable,4);

  }

  //Blockly.DataCategory.addCreateButton(xmlList, workspace, 'LIST_VARIABLE');
  variableModelList = workspace.getVariablesOfType(Blockly.LIST_VARIABLE_TYPE);
  variableModelList.sort(Blockly.VariableModel.compareByName);
  for (var i = 0; i < variableModelList.length; i++) {
    Blockly.DataCategory.addDataList(xmlList, variableModelList[i]);
  }

  if (variableModelList.length > 0) {
    xmlList[xmlList.length - 1].setAttribute('gap', 24);
    var firstVariable = variableModelList[0];

    Blockly.DataCategory.addAddToList(xmlList, firstVariable);
    Blockly.DataCategory.addSep(xmlList);
    Blockly.DataCategory.addDeleteOfList(xmlList, firstVariable);
    Blockly.DataCategory.addDeleteAllOfList(xmlList, firstVariable);
    Blockly.DataCategory.addInsertAtList(xmlList, firstVariable);
    Blockly.DataCategory.addReplaceItemOfList(xmlList, firstVariable);
    Blockly.DataCategory.addSep(xmlList);
    Blockly.DataCategory.addItemOfList(xmlList, firstVariable);
    Blockly.DataCategory.addItemNumberOfList(xmlList, firstVariable);
    Blockly.DataCategory.addLengthOfList(xmlList, firstVariable);
    Blockly.DataCategory.addListContainsItem(xmlList, firstVariable);
    Blockly.DataCategory.addSep(xmlList);
    // Blockly.DataCategory.addShowList(xmlList, firstVariable);
    // Blockly.DataCategory.addHideList(xmlList, firstVariable);
  }

  return xmlList;
};

/**
 * Construct and add a data_variable block to xmlList.
 * @param {!Array.<!Element>} xmlList Array of XML block elements.
 * @param {?Blockly.VariableModel} variable Variable to select in the field.
 */
Blockly.DataCategory.addDataVariable = function(xmlList, variable,type) {
  // <block id="variableId" type="data_variable">
  //    <field name="VARIABLE">variablename</field>
  // </block>
  if(type == 0)
    Blockly.DataCategory.addBlock(xmlList, variable, 'data_variable', 'VARIABLE');
  else if(type == 1)
    Blockly.DataCategory.addBlock(xmlList, variable, 'data_strvariable', 'STR_VARIABLE');
  else if(type == 2)
    Blockly.DataCategory.addBlock(xmlList, variable, 'data_booleanvariable', 'BOOLEAN_VARIABLE');
  else if(type == 3)
    Blockly.DataCategory.addBlock(xmlList, variable, 'data_arraynumvariable', 'ARRAY_NUM_VARIABLE');
  else if(type == 4)
    Blockly.DataCategory.addBlock(xmlList, variable, 'data_arraycharvariable', 'ARRAY_CHAR_VARIABLE');
  // In the flyout, this ID must match variable ID for monitor syncing reasons
  xmlList[xmlList.length - 1].setAttribute('id', variable.getId());
};

/**
 * Construct and add a data_setvariableto block to xmlList.
 * @param {!Array.<!Element>} xmlList Array of XML block elements.
 * @param {?Blockly.VariableModel} variable Variable to select in the field.
 */
Blockly.DataCategory.addSetVariableTo = function(xmlList, variable,type) {
  // <block type="data_setvariableto" gap="20">
  //   <value name="VARIABLE">
  //    <shadow type="data_variablemenu"></shadow>
  //   </value>
  //   <value name="VALUE">
  //     <shadow type="text">
  //       <field name="TEXT">0</field>
  //     </shadow>
  //   </value>
  // </block>
  if(type == 0) {
    Blockly.DataCategory.addBlock(xmlList, variable, 'data_setvariableto', 'VARIABLE', ['VALUE', 'math_number', 0]);
  }else if(type == 1){
    Blockly.DataCategory.addBlock(xmlList, variable, 'data_setstrvariableto', 'STR_VARIABLE', ['VALUE', 'text', 'Hello']);
  }else if(type == 2){
    Blockly.DataCategory.addBlock(xmlList, variable, 'data_setbooleanvariableto', 'BOOLEAN_VARIABLE');
  }else if(type == 3){
    Blockly.DataCategory.addBlock(xmlList, variable, 'data_setarraynumvariableto', 'ARRAY_NUM_VARIABLE',['VALUE', 'math_arraynum', 0]);
  }else if(type == 4){
    Blockly.DataCategory.addBlock(xmlList, variable, 'data_setarraycharvariableto', 'ARRAY_CHAR_VARIABLE',['VALUE', 'math_arraychar', 'a']);
  }
};

/**
 * Construct and add a data_changevariableby block to xmlList.
 * @param {!Array.<!Element>} xmlList Array of XML block elements.
 * @param {?Blockly.VariableModel} variable Variable to select in the field.
 */
Blockly.DataCategory.addChangeVariableBy = function(xmlList, variable,type) {
  // <block type="data_changevariableby">
  //   <value name="VARIABLE">
  //    <shadow type="data_variablemenu"></shadow>
  //   </value>
  //   <value name="VALUE">
  //     <shadow type="math_number">
  //       <field name="NUM">1</field>
  //     </shadow>
  //   </value>
  // </block>
  if(type == 0)
    Blockly.DataCategory.addBlock(xmlList, variable, 'data_changevariableby',
      'VARIABLE', ['VALUE', 'math_number', 1]);
  else
    Blockly.DataCategory.addBlock(xmlList, variable, 'data_changevariableby',
      'STR_VARIABLE', ['VALUE', 'text', 'hello']);
};
Blockly.DataCategory.addToggleVariableBy = function(xmlList, variable,type) {

    Blockly.DataCategory.addBlock(xmlList, variable, 'data_togglevariableby',
      'BOOLEAN_VARIABLE');
};
/**
 * Construct and add a data_showVariable block to xmlList.
 * @param {!Array.<!Element>} xmlList Array of XML block elements.
 * @param {?Blockly.VariableModel} variable Variable to select in the field.
 */
Blockly.DataCategory.addShowVariable = function(xmlList, variable) {
  // <block type="data_showvariable">
  //   <value name="VARIABLE">
  //     <shadow type="data_variablemenu"></shadow>
  //   </value>
  // </block>
  Blockly.DataCategory.addBlock(xmlList, variable, 'data_showvariable',
      'VARIABLE');
};

/**
 * Construct and add a data_hideVariable block to xmlList.
 * @param {!Array.<!Element>} xmlList Array of XML block elements.
 * @param {?Blockly.VariableModel} variable Variable to select in the field.
 */
Blockly.DataCategory.addHideVariable = function(xmlList, variable) {
  // <block type="data_hidevariable">
  //   <value name="VARIABLE">
  //     <shadow type="data_variablemenu"></shadow>
  //   </value>
  // </block>
  Blockly.DataCategory.addBlock(xmlList, variable, 'data_hidevariable',
      'VARIABLE');
};

/**
 * Construct and add a data_listcontents block to xmlList.
 * @param {!Array.<!Element>} xmlList Array of XML block elements.
 * @param {?Blockly.VariableModel} variable Variable to select in the field.
 */
Blockly.DataCategory.addDataList = function(xmlList, variable) {
  // <block id="variableId" type="data_listcontents">
  //    <field name="LIST">variablename</field>
  // </block>
  Blockly.DataCategory.addBlock(xmlList, variable, 'data_listcontents', 'LIST');
  // In the flyout, this ID must match variable ID for monitor syncing reasons
  xmlList[xmlList.length - 1].setAttribute('id', variable.getId());
};

/**
 * Construct and add a data_addtolist block to xmlList.
 * @param {!Array.<!Element>} xmlList Array of XML block elements.
 * @param {?Blockly.VariableModel} variable Variable to select in the field.
 */
Blockly.DataCategory.addAddToList = function(xmlList, variable) {
  // <block type="data_addtolist">
  //   <field name="LIST" variabletype="list" id="">variablename</field>
  //   <value name="ITEM">
  //     <shadow type="text">
  //       <field name="TEXT">thing</field>
  //     </shadow>
  //   </value>
  // </block>
  Blockly.DataCategory.addBlock(xmlList, variable, 'data_addtolist', 'LIST',
      ['ITEM', 'text', Blockly.Msg.DEFAULT_LIST_ITEM]);
};

/**
 * Construct and add a data_deleteoflist block to xmlList.
 * @param {!Array.<!Element>} xmlList Array of XML block elements.
 * @param {?Blockly.VariableModel} variable Variable to select in the field.
 */
Blockly.DataCategory.addDeleteOfList = function(xmlList, variable) {
  // <block type="data_deleteoflist">
  //   <field name="LIST" variabletype="list" id="">variablename</field>
  //   <value name="INDEX">
  //     <shadow type="math_integer">
  //       <field name="NUM">1</field>
  //     </shadow>
  //   </value>
  // </block>
  Blockly.DataCategory.addBlock(xmlList, variable, 'data_deleteoflist', 'LIST',
      ['INDEX', 'math_integer', 1]);
};

/**
 * Construct and add a data_deleteoflist block to xmlList.
 * @param {!Array.<!Element>} xmlList Array of XML block elements.
 * @param {?Blockly.VariableModel} variable Variable to select in the field.
 */
Blockly.DataCategory.addDeleteAllOfList = function(xmlList, variable) {
  // <block type="data_deletealloflist">
  //   <field name="LIST" variabletype="list" id="">variablename</field>
  // </block>
  Blockly.DataCategory.addBlock(xmlList, variable, 'data_deletealloflist',
      'LIST');
};

/**
 * Construct and add a data_insertatlist block to xmlList.
 * @param {!Array.<!Element>} xmlList Array of XML block elements.
 * @param {?Blockly.VariableModel} variable Variable to select in the field.
 */
Blockly.DataCategory.addInsertAtList = function(xmlList, variable) {
  // <block type="data_insertatlist">
  //   <field name="LIST" variabletype="list" id="">variablename</field>
  //   <value name="INDEX">
  //     <shadow type="math_integer">
  //       <field name="NUM">1</field>
  //     </shadow>
  //   </value>
  //   <value name="ITEM">
  //     <shadow type="text">
  //       <field name="TEXT">thing</field>
  //     </shadow>
  //   </value>
  // </block>
  Blockly.DataCategory.addBlock(xmlList, variable, 'data_insertatlist', 'LIST',
      ['INDEX', 'math_integer', 1], ['ITEM', 'text', Blockly.Msg.DEFAULT_LIST_ITEM]);
};

/**
 * Construct and add a data_replaceitemoflist block to xmlList.
 * @param {!Array.<!Element>} xmlList Array of XML block elements.
 * @param {?Blockly.VariableModel} variable Variable to select in the field.
 */
Blockly.DataCategory.addReplaceItemOfList = function(xmlList, variable) {
  // <block type="data_replaceitemoflist">
  //   <field name="LIST" variabletype="list" id="">variablename</field>
  //   <value name="INDEX">
  //     <shadow type="math_integer">
  //       <field name="NUM">1</field>
  //     </shadow>
  //   </value>
  //   <value name="ITEM">
  //     <shadow type="text">
  //       <field name="TEXT">thing</field>
  //     </shadow>
  //   </value>
  // </block>
  Blockly.DataCategory.addBlock(xmlList, variable, 'data_replaceitemoflist',
      'LIST', ['INDEX', 'math_integer', 1], ['ITEM', 'text', Blockly.Msg.DEFAULT_LIST_ITEM]);
};

/**
 * Construct and add a data_itemoflist block to xmlList.
 * @param {!Array.<!Element>} xmlList Array of XML block elements.
 * @param {?Blockly.VariableModel} variable Variable to select in the field.
 */
Blockly.DataCategory.addItemOfList = function(xmlList, variable) {
  // <block type="data_itemoflist">
  //   <field name="LIST" variabletype="list" id="">variablename</field>
  //   <value name="INDEX">
  //     <shadow type="math_integer">
  //       <field name="NUM">1</field>
  //     </shadow>
  //   </value>
  // </block>
  Blockly.DataCategory.addBlock(xmlList, variable, 'data_itemoflist', 'LIST',
      ['INDEX', 'math_integer', 1]);
};

Blockly.DataCategory.addItemOfArray = function(xmlList, variable,type) {
  // <block type="data_itemoflist">
  //   <field name="LIST" variabletype="list" id="">variablename</field>
  //   <value name="INDEX">
  //     <shadow type="math_integer">
  //       <field name="NUM">1</field>
  //     </shadow>
  //   </value>
  // </block>
  if(type == 3)
    Blockly.DataCategory.addBlock(xmlList, variable, 'data_itemofarraynum', 'ARRAY_NUM_VARIABLE', ['INDEX', 'math_integer', 1]);
  else if(type == 4)
    Blockly.DataCategory.addBlock(xmlList, variable, 'data_itemofarraychar', 'ARRAY_CHAR_VARIABLE', ['INDEX', 'math_integer', 1]);
};

/** Construct and add a data_itemnumoflist block to xmlList.
 * @param {!Array.<!Element>} xmlList Array of XML block elements.
 * @param {?Blockly.VariableModel} variable Variable to select in the field.
 */
Blockly.DataCategory.addItemNumberOfList = function(xmlList, variable) {
  // <block type="data_itemnumoflist">
  //   <value name="ITEM">
  //     <shadow type="text">
  //       <field name="TEXT">thing</field>
  //     </shadow>
  //   </value>
  //   <field name="LIST" variabletype="list" id="">variablename</field>
  // </block>
  Blockly.DataCategory.addBlock(xmlList, variable, 'data_itemnumoflist',
      'LIST', ['ITEM', 'text', Blockly.Msg.DEFAULT_LIST_ITEM]);
};

/**
 * Construct and add a data_lengthoflist block to xmlList.
 * @param {!Array.<!Element>} xmlList Array of XML block elements.
 * @param {?Blockly.VariableModel} variable Variable to select in the field.
 */
Blockly.DataCategory.addLengthOfList = function(xmlList, variable) {
  // <block type="data_lengthoflist">
  //   <field name="LIST" variabletype="list" id="">variablename</field>
  // </block>
  Blockly.DataCategory.addBlock(xmlList, variable, 'data_lengthoflist', 'LIST');
};

Blockly.DataCategory.addLengthOfArray = function(xmlList, variable,type) {
  // <block type="data_lengthoflist">
  //   <field name="LIST" variabletype="list" id="">variablename</field>
  // </block>
  if(type == 3)
    Blockly.DataCategory.addBlock(xmlList, variable, 'data_lengthofarraynum', 'ARRAY_NUM_VARIABLE');
  else if(type == 4)
    Blockly.DataCategory.addBlock(xmlList, variable, 'data_lengthofarraychar', 'ARRAY_CHAR_VARIABLE');
};

/**
 * Construct and add a data_listcontainsitem block to xmlList.
 * @param {!Array.<!Element>} xmlList Array of XML block elements.
 * @param {?Blockly.VariableModel} variable Variable to select in the field.
 */
Blockly.DataCategory.addListContainsItem = function(xmlList, variable) {
  // <block type="data_listcontainsitem">
  //   <field name="LIST" variabletype="list" id="">variablename</field>
  //   <value name="ITEM">
  //     <shadow type="text">
  //       <field name="TEXT">thing</field>
  //     </shadow>
  //   </value>
  // </block>
  Blockly.DataCategory.addBlock(xmlList, variable, 'data_listcontainsitem',
      'LIST', ['ITEM', 'text', Blockly.Msg.DEFAULT_LIST_ITEM]);
};

/**
 * Construct and add a data_showlist block to xmlList.
 * @param {!Array.<!Element>} xmlList Array of XML block elements.
 * @param {?Blockly.VariableModel} variable Variable to select in the field.
 */
Blockly.DataCategory.addShowList = function(xmlList, variable) {
  // <block type="data_showlist">
  //   <field name="LIST" variabletype="list" id="">variablename</field>
  // </block>
  Blockly.DataCategory.addBlock(xmlList, variable, 'data_showlist', 'LIST');
};

/**
 * Construct and add a data_hidelist block to xmlList.
 * @param {!Array.<!Element>} xmlList Array of XML block elements.
 * @param {?Blockly.VariableModel} variable Variable to select in the field.
 */
Blockly.DataCategory.addHideList = function(xmlList, variable) {
  // <block type="data_hidelist">
  //   <field name="LIST" variabletype="list" id="">variablename</field>
  // </block>
  Blockly.DataCategory.addBlock(xmlList, variable, 'data_hidelist', 'LIST');
};

/**
 * Construct a create variable button and push it to the xmlList.
 * @param {!Array.<!Element>} xmlList Array of XML block elements.
 * @param {Blockly.Workspace} workspace Workspace to register callback to.
 * @param {string} type Type of variable this is for. For example, 'LIST' or
 *     'VARIABLE'.
 */
Blockly.DataCategory.addCreateButton = function(xmlList, workspace, type) {
  var button = goog.dom.createDom('button');
  // Set default msg, callbackKey, and callback values for type 'VARIABLE'
  if(type === 'VARIABLE') {
    var msg = Blockly.Msg.NEW_VARIABLE;
    var callbackKey = 'CREATE_VARIABLE';
    var callback = function (button) {Blockly.Variables.createVariable(button.getTargetWorkspace(), null, '');};
  }
  else if (type === 'STR_VARIABLE') {
    msg = Blockly.Msg.NEW_STR_VARIABLE;
    callbackKey = 'CREATE_STR_VARIABLE';
    callback = function (button) {Blockly.Variables.createVariable(button.getTargetWorkspace(), null, Blockly.STRING_VARIABLE_TYPE);};
  }else if (type === 'BOOLEAN_VARIABLE') {
    msg = Blockly.Msg.NEW_BOOLEAN_VARIABLE;
    callbackKey = 'CREATE_BOOLEAN_VARIABLE';
    callback = function (button) {Blockly.Variables.createVariable(button.getTargetWorkspace(), null, Blockly.BOOLEAN_VARIABLE_TYPE);};
  }else if (type === 'ARRAY_NUM_VARIABLE') {
    msg = Blockly.Msg.NEW_ARRAY_NUM;
    callbackKey = 'CREATE_ARRAY_NUM_VARIABLE';
    callback = function(button) {Blockly.Variables.createVariable(button.getTargetWorkspace(), null,Blockly.ARRAY_NUM_VARIABLE_TYPE);};
  }else if (type === 'ARRAY_CHAR_VARIABLE') {
    msg = Blockly.Msg.NEW_ARRAY_CHAR;
    callbackKey = 'CREATE_ARRAY_CHAR_VARIABLE';
    callback = function(button) {Blockly.Variables.createVariable(button.getTargetWorkspace(), null,Blockly.ARRAY_CHAR_VARIABLE_TYPE);};
  }else if (type === 'LIST') {
    msg = Blockly.Msg.NEW_LIST;
    callbackKey = 'CREATE_LIST';
    callback = function(button) {Blockly.Variables.createVariable(button.getTargetWorkspace(), null,Blockly.LIST_VARIABLE_TYPE);};
  }
  // if (type === 'VARIABLE')
  //   button.setAttribute('math_number', msg);
  // else
  button.setAttribute('text', msg);
  //console.info("msg=",msg,type)
  button.setAttribute('callbackKey', callbackKey);
  workspace.registerButtonCallback(callbackKey, callback);
  xmlList.push(button);
};

/**
 * Construct a variable block with the given variable, blockType, and optional
 *     value tags. Add the variable block to the given xmlList.
 * @param {!Array.<!Element>} xmlList Array of XML block elements.
 * @param {?Blockly.VariableModel} variable Variable to select in the field.
 * @param {string} blockType Type of block. For example, 'data_hidelist' or
 *     data_showlist'.
 * @param {string} fieldName Name of field in block. For example: 'VARIABLE' or
 *     'LIST'.
 * @param {?Array.<string>} opt_value Optional array containing the value name
 *     and shadow type of value tags.
 * @param {?Array.<string>} opt_secondValue Optional array containing the value
 *     name and shadow type of a second pair of value tags.
 */
Blockly.DataCategory.addBlock = function(xmlList, variable, blockType,
    fieldName, opt_value, opt_secondValue) {
 // Blockly.DataCategory.addBlock(xmlList, variable, 'data_setstrvariableto', 'VARIABLE', ['VALUE', 'text', 'hello']);
  if (Blockly.Blocks[blockType]) {
    var firstValueField;
    var secondValueField;
    if (opt_value) {
      firstValueField = Blockly.DataCategory.createValue(opt_value[0],
          opt_value[1], opt_value[2]);
    }
    if (opt_secondValue) {
      secondValueField = Blockly.DataCategory.createValue(opt_secondValue[0],
          opt_secondValue[1], opt_secondValue[2]);
    }

    var gap = 8;
    var blockText = '<xml>' +
        '<block type="' + blockType + '" gap="' + gap + '">' +
        Blockly.Variables.generateVariableFieldXml_(variable, fieldName) +
        firstValueField + secondValueField +
        '</block>' +
        '</xml>';
    var block = Blockly.Xml.textToDom(blockText).firstChild;
    xmlList.push(block);
  }
};

/**
 * Create the text representation of a value dom element with a shadow of the
 *     indicated type inside.
 * @param {string} valueName Name of the value tags.
 * @param {string} type The type of the shadow tags.
 * @param {string|number} value The default shadow value.
 * @return {string} The generated dom element in text.
 */
Blockly.DataCategory.createValue = function(valueName, type, value) {
  var fieldName;
  switch (valueName) {
    case 'ITEM':
      fieldName = 'TEXT';
      break;
    case 'INDEX':
      fieldName = 'NUM';
      break;
    case 'VALUE':
      if (type === 'math_number') {
        fieldName = 'NUM';
      }else if (type === 'array_num') {
        fieldName = 'NUM';
      }else {
        fieldName = 'TEXT';
      }
      break;
  }
  var valueField =
      '<value name="' + valueName + '">' +
      '<shadow type="' + type + '">' +
      '<field name="' + fieldName + '">' + value + '</field>' +
      '</shadow>' +
      '</value>';
  return valueField;
};

/**
 * Construct a block separator. Add the separator to the given xmlList.
 * @param {!Array.<!Element>} xmlList Array of XML block elements.
 */
Blockly.DataCategory.addSep = function(xmlList) {
  var gap = 36;
  var sepText = '<xml>' +
      '<sep gap="' + gap + '"/>' +
      '</xml>';
  var sep = Blockly.Xml.textToDom(sepText).firstChild;
  xmlList.push(sep);
};
