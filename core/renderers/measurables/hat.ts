/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @fileoverview Objects representing a hat in a row of a rendered
 * block.
 */

/**
 * Objects representing a hat in a row of a rendered
 * block.
 * @class
 */


/* eslint-disable-next-line no-unused-vars */
import type {ConstantProvider} from '../common/constants';
import {Measurable} from './base';
import {Types} from './types';


/**
 * An object containing information about the space a hat takes up during
 * rendering.
 * @struct
 * @extends {Measurable}
 * @alias Blockly.blockRendering.Hat
 */
class Hat extends Measurable {
  /**
   * @param {!ConstantProvider} constants The rendering
   *   constants provider.
   * @package
   */
  constructor(constants) {
    super(constants);
    this.type |= Types.HAT;

    this.height = this.constants_.START_HAT.height;
    this.width = this.constants_.START_HAT.width;

    /** @type {number} */
    this.ascenderHeight = this.height;
  }
}

export {Hat};
