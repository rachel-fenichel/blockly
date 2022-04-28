
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @fileoverview Class representing the space a output connection takes up
 * during rendering.
 */

/**
 * Class representing the space a output connection takes up
 * during rendering.
 * @class
 */


import {Connection} from './connection';
/* eslint-disable-next-line no-unused-vars */
import type {ConstantProvider} from '../common/constants';
/* eslint-disable-next-line no-unused-vars */
import type {RenderedConnection} from '../../rendered_connection';
import {Types} from './types';


/**
 * An object containing information about the space an output connection takes
 * up during rendering.
 * @extends {Connection}
 * @struct
 * @alias Blockly.blockRendering.OutputConnection
 */
class OutputConnection extends Connection {
  /**
   * @param {!ConstantProvider} constants The rendering
   *   constants provider.
   * @param {!RenderedConnection} connectionModel The connection object on
   *     the block that this represents.
   * @package
   */
  constructor(constants, connectionModel) {
    super(constants, connectionModel);
    this.type |= Types.OUTPUT_CONNECTION;

    this.height = !this.isDynamicShape ? this.shape.height : 0;
    this.width = !this.isDynamicShape ? this.shape.width : 0;

    /** @type {number} */
    this.startX = this.width;

    /** @type {number} */
    this.connectionOffsetY = this.constants_.TAB_OFFSET_FROM_TOP;

    /** @type {number} */
    this.connectionOffsetX = 0;
  }
}

export {OutputConnection};
