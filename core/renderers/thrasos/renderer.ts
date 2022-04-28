/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @fileoverview Thrasos renderer.
 */
'use strict';

/**
 * Thrasos renderer.
 * @class
 */


import * as blockRendering from '../common/block_rendering';
/* eslint-disable-next-line no-unused-vars */
import type {BlockSvg} from '../../block_svg';
import {RenderInfo} from './info';
import {Renderer as BaseRenderer} from '../common/renderer';


/**
 * The thrasos renderer.
 * @extends {BaseRenderer}
 * @alias Blockly.thrasos.Renderer
 */
class Renderer extends BaseRenderer {
  /**
   * @param {string} name The renderer name.
   * @package
   */
  constructor(name) {
    super(name);
  }

  /**
   * Create a new instance of the renderer's render info object.
   * @param {!BlockSvg} block The block to measure.
   * @return {!RenderInfo} The render info object.
   * @protected
   * @override
   */
  makeRenderInfo_(block) {
    return new RenderInfo(this, block);
  }
}

blockRendering.register('thrasos', Renderer);

export {Renderer};
