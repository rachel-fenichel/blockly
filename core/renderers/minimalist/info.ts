/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @fileoverview Minimalist render info object.
 */
'use strict';

/**
 * Minimalist render info object.
 * @class
 */


/* eslint-disable-next-line no-unused-vars */
import type {BlockSvg} from '../../block_svg';
import {RenderInfo as BaseRenderInfo} from '../common/info';
/* eslint-disable-next-line no-unused-vars */
import type {Renderer} from './renderer';


/**
 * An object containing all sizing information needed to draw this block.
 *
 * This measure pass does not propagate changes to the block (although fields
 * may choose to rerender when getSize() is called).  However, calling it
 * repeatedly may be expensive.
 * @extends {BaseRenderInfo}
 * @alias Blockly.minimalist.RenderInfo
 */
class RenderInfo extends BaseRenderInfo {
  /**
   * @param {!Renderer} renderer The renderer in use.
   * @param {!BlockSvg} block The block to measure.
   * @package
   */
  constructor(renderer, block) {
    super(renderer, block);
  }

  /**
   * Get the block renderer in use.
   * @return {!Renderer} The block renderer in use.
   * @package
   */
  getRenderer() {
    return /** @type {!Renderer} */ (this.renderer_);
  }
}

export {RenderInfo};
