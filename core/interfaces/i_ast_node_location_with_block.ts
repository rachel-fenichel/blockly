/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @fileoverview The interface for an AST node location that has an associated
 * block.
 */

'use strict';

/**
 * The interface for an AST node location that has an associated
 * block.
 * @namespace Blockly.IASTNodeLocationWithBlock
 */


/* eslint-disable-next-line no-unused-vars */
import type {Block} from '../block';
/* eslint-disable-next-line no-unused-vars */
import {IASTNodeLocation} from './i_ast_node_location';


/**
 * An AST node location that has an associated block.
 * @interface
 * @extends {IASTNodeLocation}
 * @alias Blockly.IASTNodeLocationWithBlock
 */
const IASTNodeLocationWithBlock = function() {};

/**
 * Get the source block associated with this node.
 * @return {Block} The source block.
 */
IASTNodeLocationWithBlock.prototype.getSourceBlock;

export {IASTNodeLocationWithBlock};
