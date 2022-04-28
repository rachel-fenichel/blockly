/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @fileoverview Objects representing a spacer in a row of a rendered
 * block.
 */

/**
 * Objects representing a spacer in a row of a rendered
 * block.
 * @class
 */


/* eslint-disable-next-line no-unused-vars */
import type {ConstantProvider} from '../common/constants';
import {Measurable} from './base';
import {Types} from './types';


/**
 * An object containing information about a spacer between two elements on a
 * row.
 * @extends {Measurable}
 * @struct
 * @alias Blockly.blockRendering.InRowSpacer
 */
class InRowSpacer extends Measurable {
  /**
   * @param {!ConstantProvider} constants The rendering
   *   constants provider.
   * @param {number} width The width of the spacer.
   * @package
   */
  constructor(constants, width) {
    super(constants);
    this.type |= Types.SPACER | Types.IN_ROW_SPACER;
    this.width = width;
    this.height = this.constants_.SPACER_DEFAULT_HEIGHT;
  }
}

export {InRowSpacer};
