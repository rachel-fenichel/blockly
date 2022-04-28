/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @fileoverview Objects representing a field in a row of a rendered
 * block.
 */

/**
 * Objects representing a field in a row of a rendered
 * block.
 * @class
 */


/* eslint-disable-next-line no-unused-vars */
import type {ConstantProvider} from '../common/constants';
/* eslint-disable-next-line no-unused-vars */
import type {Field as BlocklyField} from '../../field';
/* eslint-disable-next-line no-unused-vars */
import type {Input} from '../../input';
import {Measurable} from './base';
import {Types} from './types';


/**
 * An object containing information about the space a field takes up during
 * rendering
 * @struct
 * @extends {Measurable}
 * @alias Blockly.blockRendering.Field
 */
class Field extends Measurable {
  /**
   * @param {!ConstantProvider} constants The rendering
   *   constants provider.
   * @param {!BlocklyField} field The field to measure and store information
   *     for.
   * @param {!Input} parentInput The parent input for the field.
   * @package
   */
  constructor(constants, field, parentInput) {
    super(constants);

    /** @type {!BlocklyField} */
    this.field = field;

    /** @type {boolean} */
    this.isEditable = field.EDITABLE;

    /** @type {boolean} */
    this.flipRtl = field.getFlipRtl();
    this.type |= Types.FIELD;

    const size = this.field.getSize();

    /** @type {number} */
    this.height = size.height;

    /** @type {number} */
    this.width = size.width;

    /** @type {!Input} */
    this.parentInput = parentInput;
  }
}

export {Field};
