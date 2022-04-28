/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @fileoverview Minimalist rendering drawer.
 */
'use strict';

/**
 * Minimalist rendering drawer.
 * @class
 */


/* eslint-disable-next-line no-unused-vars */
import type {BlockSvg} from '../../block_svg';
import {Drawer as BaseDrawer} from '../common/drawer';
/* eslint-disable-next-line no-unused-vars */
import type {RenderInfo} from './info';


/**
 * An object that draws a block based on the given rendering information.
 * @extends {BaseDrawer}
 * @alias Blockly.minimalist.Drawer
 */
class Drawer extends BaseDrawer {
  /**
   * @param {!BlockSvg} block The block to render.
   * @param {!RenderInfo} info An object containing all
   *   information needed to render this block.
   * @package
   */
  constructor(block, info) {
    super(block, info);
  }
}

export {Drawer};
