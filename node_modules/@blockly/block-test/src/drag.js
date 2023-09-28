/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
'use strict';

/**
 * @fileoverview Drag test blocks.
 * @author samelh@google.com (Sam El-Husseini)
 */


/**
 * The Drag category.
 */
export const category = {
  'kind': 'CATEGORY',
  'name': 'Drag',
  'contents': [
    {
      'kind': 'LABEL',
      'text': 'Drag each to the workspace',
    },
    {
      'kind': 'BLOCK',
      'blockxml': `
<block type="text_print">
  <value name="TEXT">
    <block type="text">
      <field name="TEXT">Drag me by this child</field>
    </block>
  </value>
</block>`,
    },
    {
      'kind': 'BLOCK',
      'blockxml': `
<block type="text_print">
  <value name="TEXT">
    <shadow type="text">
      <field name="TEXT">Drag me by this shadow</field>
    </shadow>
  </value>
</block>`,
    },
    {
      'kind': 'BLOCK',
      'blockxml': `
<block type="text_print">
  <value name="TEXT">
    <shadow type="text">
      <field name="TEXT">Shadow value</field>
    </shadow>
  </value>
  <next>
    <shadow type="text_print">
      <value name="TEXT">
        <shadow type="text">
          <field name="TEXT">Shadow statement</field>
        </shadow>
      </value>
    </shadow>
  </next>
</block>`,
    },
    {
      'kind': 'LABEL',
      'text': 'Multiple Variable Refs',
    },
    {
      'kind': 'BLOCK',
      'blockxml': `
<block type="text_print">
  <value name="TEXT">
    <block type="variables_get">
      <field name="VAR" id="item">item</field>
    </block>
  </value>
  <next>
    <block type="text_print">
      <value name="TEXT">
        <block type="variables_get">
          <field name="VAR" id="item">item</field>
        </block>
      </value>
    </block>
  </next>
</block>`,
    },
    {
      'kind': 'LABEL',
      'text': 'Procedure Definitions',
    },
    {
      'kind': 'BLOCK',
      'blockxml': `
<block type="procedures_defnoreturn">
  <field name="NAME">without arguments</field>
  <statement name="STACK">
    <block type="text_print">
      <value name="TEXT">
        <shadow type="text">
          <field name="TEXT">No argument reference.</field>
        </shadow>
      </value>
    </block>
  </statement>
</block>`,
    },
    {
      'kind': 'BLOCK',
      'blockxml': `
<block type="procedures_defnoreturn">
  <mutation><arg name="fnArgument"></arg></mutation>
  <field name="NAME">with one argument</field>
  <statement name="STACK">
    <block type="text_print">
      <value name="TEXT">
        <shadow type="text">
          <field name="TEXT">Expected an argument reference here.</field>
        </shadow>
        <block type="variables_get">
          <field name="VAR">fnArgument</field>
        </block>
      </value>
    </block>
  </statement>
</block>`,
    },
  ],
};

/**
 * Initialize this toolbox category.
 * @param {!Blockly.WorkspaceSvg} workspace The Blockly workspace.
 */
export function onInit(workspace) {
  // NOP
}
