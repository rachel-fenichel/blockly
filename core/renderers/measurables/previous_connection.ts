/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @fileoverview Class representing the space a previous connection takes up
 * during rendering.
 */

/**
 * Class representing the space a previous connection takes up
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
 * An object containing information about the space a previous connection takes
 * up during rendering.
 * @extends {Connection}
 * @struct
 * @alias Blockly.blockRendering.PreviousConnection
 */
class PreviousConnection extends Connection {
  /**
   * @param {!ConstantProvider} constants The rendering
   *   constants provider.
   * @param {!RenderedConnection} connectionModel The connection object on
   *     the block that this represents.
   * @package
   */
  constructor(constants, connectionModel) {
    super(constants, connectionModel);
    this.type |= Types.PREVIOUS_CONNECTION;
    this.height = this.shape.height;
    this.width = this.shape.width;
  }
}

export {PreviousConnection};
