/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @fileoverview Class representing inputs with connections on a rendered block.
 */

/**
 * Class representing inputs with connections on a rendered block.
 * @class
 */


/* eslint-disable-next-line no-unused-vars */
import type {BlockSvg} from '../../block_svg';
import {Connection} from './connection';
/* eslint-disable-next-line no-unused-vars */
import type {ConstantProvider} from '../common/constants';
/* eslint-disable-next-line no-unused-vars */
import type {Input} from '../../input';
/* eslint-disable-next-line no-unused-vars */
import type {RenderedConnection} from '../../rendered_connection';
import {Types} from './types';


/**
 * The base class to represent an input that takes up space on a block
 * during rendering
 * @package
 * @extends {Connection}
 * @alias Blockly.blockRendering.InputConnection
 */
class InputConnection extends Connection {
  /**
   * @param {!ConstantProvider} constants The rendering
   *   constants provider.
   * @param {!Input} input The input to measure and store information for.
   */
  constructor(constants, input) {
    super(constants, /** @type {!RenderedConnection} */ (input.connection));

    this.type |= Types.INPUT;

    /** @type {!Input} */
    this.input = input;

    /** @type {number} */
    this.align = input.align;

    /** @type {BlockSvg} */
    this.connectedBlock = input.connection && input.connection.targetBlock() ?
        /** @type {BlockSvg} */ (input.connection.targetBlock()) :
        null;

    if (this.connectedBlock) {
      const bBox = this.connectedBlock.getHeightWidth();
      this.connectedBlockWidth = bBox.width;
      this.connectedBlockHeight = bBox.height;
    } else {
      this.connectedBlockWidth = 0;
      this.connectedBlockHeight = 0;
    }

    /** @type {number} */
    this.connectionOffsetX = 0;

    /** @type {number} */
    this.connectionOffsetY = 0;
  }
}

export {InputConnection};
