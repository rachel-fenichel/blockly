/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @fileoverview Objects representing a square corner in a row of a rendered
 * block.
 */

/**
 * Objects representing a square corner in a row of a rendered
 * block.
 * @class
 */


/* eslint-disable-next-line no-unused-vars */
import type {ConstantProvider} from '../common/constants';
import {Measurable} from './base';
import {Types} from './types';


/**
 * An object containing information about the space a square corner takes up
 * during rendering.
 * @extends {Measurable}
 * @struct
 * @alias Blockly.blockRendering.SquareCorner
 */
class SquareCorner extends Measurable {
  /**
   * @param {!ConstantProvider} constants The rendering
   *   constants provider.
   * @param {string=} opt_position The position of this corner.
   * @package
   */
  constructor(constants, opt_position) {
    super(constants);
    this.type = ((!opt_position || opt_position === 'left') ?
                     Types.LEFT_SQUARE_CORNER :
                     Types.RIGHT_SQUARE_CORNER) |
        Types.CORNER;
    this.height = this.constants_.NO_PADDING;
    this.width = this.constants_.NO_PADDING;
  }
}

export {SquareCorner};
