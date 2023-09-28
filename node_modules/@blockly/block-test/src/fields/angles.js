/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
'use strict';

/**
 * @fileoverview Angle fields test blocks.
 * @author samelh@google.com (Sam El-Husseini)
 */

import * as Blockly from 'blockly/core';


Blockly.defineBlocksWithJsonArray([
  {
    'type': 'test_angles_protractor',
    'message0': 'protractor %1',
    'args0': [
      {
        'type': 'field_angle',
        'name': 'FIELDNAME',
        'angle': 0,
        'mode': 'protractor',
      },
    ],
    'style': 'math_blocks',
    'tooltip': 'test tooltip',
  },
  {
    'type': 'test_angles_compass',
    'message0': 'compass %1',
    'args0': [
      {
        'type': 'field_angle',
        'name': 'FIELDNAME',
        'angle': 0,
        'mode': 'compass',
      },
    ],
    'style': 'math_blocks',
    'tooltip': 'test tooltip',
  },
  {
    'type': 'test_angles_clockwise',
    'message0': 'clockwise %1',
    'args0': [
      {
        'type': 'field_angle',
        'name': 'FIELDNAME',
        'angle': 0,
        'clockwise': true,
      },
    ],
    'style': 'math_blocks',
    'tooltip': 'test tooltip',
  },
  {
    'type': 'test_angles_offset',
    'message0': 'offset 90 %1',
    'args0': [
      {
        'type': 'field_angle',
        'name': 'FIELDNAME',
        'angle': 0,
        'offset': 90,
      },
    ],
    'style': 'math_blocks',
    'tooltip': 'test tooltip',
  },
  {
    'type': 'test_angles_wrap',
    'message0': 'wrap %1',
    'args0': [
      {
        'type': 'field_angle',
        'name': 'FIELDNAME',
        'angle': 0,
        'wrap': 180,
      },
    ],
    'style': 'math_blocks',
    'tooltip': 'test tooltip',
  },
  {
    'type': 'test_angles_round_30',
    'message0': 'round 30 %1',
    'args0': [
      {
        'type': 'field_angle',
        'name': 'FIELDNAME',
        'angle': 0,
        'round': 30,
      },
    ],
    'style': 'math_blocks',
    'tooltip': 'test tooltip',
  },
  {
    'type': 'test_angles_round_0',
    'message0': 'no round %1',
    'args0': [
      {
        'type': 'field_angle',
        'name': 'FIELDNAME',
        'angle': 0,
        'round': 0,
      },
    ],
    'style': 'math_blocks',
    'tooltip': 'test tooltip',
  },
]);


/**
 * The Angle field category.
 */
export const category = {
  'kind': 'CATEGORY',
  'name': 'Angles',
  'contents': [
    {
      'kind': 'BLOCK',
      'type': 'test_angles_clockwise',
    },
    {
      'kind': 'BLOCK',
      'type': 'test_angles_offset',
    },
    {
      'kind': 'BLOCK',
      'type': 'test_angles_wrap',
    },
    {
      'kind': 'BLOCK',
      'type': 'test_angles_round_30',
    },
    {
      'kind': 'BLOCK',
      'type': 'test_angles_round_0',
    },
    {
      'kind': 'BLOCK',
      'type': 'test_angles_protractor',
    },
    {
      'kind': 'BLOCK',
      'type': 'test_angles_compass',
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
