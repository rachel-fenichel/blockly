/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @fileoverview Objects representing inline inputs with connections on a
 * rendered block.
 */
'use strict';

/**
 * Objects representing inline inputs with connections on a
 * rendered block.
 * @class
 */


/* eslint-disable-next-line no-unused-vars */
import type {ConstantProvider as BaseConstantProvider} from '../../common/constants';
/* eslint-disable-next-line no-unused-vars */
import type {ConstantProvider as GerasConstantProvider} from '../constants';
import {InlineInput as BaseInlineInput} from '../../measurables/inline_input';
/* eslint-disable-next-line no-unused-vars */
import type {Input} from '../../../input';


/**
 * An object containing information about the space an inline input takes up
 * during rendering.
 * @extends {BaseInlineInput}
 * @alias Blockly.geras.InlineInput
 */
class InlineInput extends BaseInlineInput {
  /**
   * @param {!BaseConstantProvider} constants The rendering
   *   constants provider.
   * @param {!Input} input The inline input to measure and store
   *     information for.
   * @package
   */
  constructor(constants, input) {
    super(constants, input);

    /** @type {!GerasConstantProvider} */
    this.constants_;

    if (this.connectedBlock) {
      // We allow the dark path to show on the parent block so that the child
      // block looks embossed.  This takes up an extra pixel in both x and y.
      this.width += this.constants_.DARK_PATH_OFFSET;
      this.height += this.constants_.DARK_PATH_OFFSET;
    }
  }
}

export {InlineInput};
