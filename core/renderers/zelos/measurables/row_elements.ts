/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @fileoverview Zelos specific objects representing elements in a row of a
 * rendered block.
 */

/**
 * Zelos specific objects representing elements in a row of a
 * rendered block.
 * @class
 */


/* eslint-disable-next-line no-unused-vars */
import type {ConstantProvider} from '../../common/constants';
import {Measurable} from '../../measurables/base';
import {Types} from '../../measurables/types';


/**
 * An object containing information about the space a right connection shape
 * takes up during rendering.
 * @extends {Measurable}
 * @alias Blockly.zelos.RightConnectionShape
 */
class RightConnectionShape extends Measurable {
  /**
   * @param {!ConstantProvider} constants The rendering
   *   constants provider.
   * @package
   */
  constructor(constants) {
    super(constants);
    this.type |= Types.getType('RIGHT_CONNECTION');
    // Size is dynamic
    this.height = 0;
    this.width = 0;
  }
}

export {RightConnectionShape};
