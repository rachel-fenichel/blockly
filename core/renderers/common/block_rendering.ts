/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @fileoverview Namespace for block rendering functionality.
 */
'use strict';

/**
 * Namespace for block rendering functionality.
 * @namespace Blockly.blockRendering
 */


import * as debug from './debug';
import * as deprecation from '../../utils/deprecation';
import * as registry from '../../registry';
import {BottomRow} from '../measurables/bottom_row';
import {Connection} from '../measurables/connection';
import {ConstantProvider} from './constants';
import {Debug} from './debugger';
import {Drawer} from './drawer';
import {ExternalValueInput} from '../measurables/external_value_input';
import {Field} from '../measurables/field';
import {Hat} from '../measurables/hat';
import {IPathObject} from './i_path_object';
import {Icon} from '../measurables/icon';
import {InRowSpacer} from '../measurables/in_row_spacer';
import {InlineInput} from '../measurables/inline_input';
import {InputConnection} from '../measurables/input_connection';
import {InputRow} from '../measurables/input_row';
import {JaggedEdge} from '../measurables/jagged_edge';
import {MarkerSvg} from './marker_svg';
import {Measurable} from '../measurables/base';
import {NextConnection} from '../measurables/next_connection';
import {OutputConnection} from '../measurables/output_connection';
import {PathObject} from './path_object';
import {PreviousConnection} from '../measurables/previous_connection';
import {RenderInfo} from './info';
import {Renderer} from './renderer';
import {RoundCorner} from '../measurables/round_corner';
import {Row} from '../measurables/row';
import {SpacerRow} from '../measurables/spacer_row';
import {SquareCorner} from '../measurables/square_corner';
import {StatementInput} from '../measurables/statement_input';
/* eslint-disable-next-line no-unused-vars */
import type {Theme} from '../../theme';
import {TopRow} from '../measurables/top_row';
import {Types} from '../measurables/types';

/**
 * Returns whether the debugger is turned on.
 * @return {boolean} Whether the debugger is turned on.
 * @alias Blockly.blockRendering.isDebuggerEnabled
 * @package
 * @deprecated
 */
const isDebuggerEnabled = function() {
  deprecation.warn(
      'Blockly.blockRendering.isDebuggerEnabled()', 'September 2021',
      'September 2022',
      'the debug renderer in @blockly/dev-tools (See https://www.npmjs.com/package/@blockly/dev-tools.)');
  return debug.isDebuggerEnabled();
};
export {isDebuggerEnabled};

/**
 * Registers a new renderer.
 * @param {string} name The name of the renderer.
 * @param {!Function} rendererClass The new renderer class
 *     to register.
 * @throws {Error} if a renderer with the same name has already been registered.
 */
const register = function(name, rendererClass) {
  registry.register(registry.Type.RENDERER, name, rendererClass);
};
export {register};

/**
 * Unregisters the renderer registered with the given name.
 * @param {string} name The name of the renderer.
 * @alias Blockly.blockRendering.unregister
 */
const unregister = function(name) {
  registry.unregister(registry.Type.RENDERER, name);
};
export {unregister};

/**
 * Turn on the blocks debugger.
 * @package
 * @alias Blockly.blockRendering.startDebugger
 * @deprecated
 */
const startDebugger = function() {
  deprecation.warn(
      'Blockly.blockRendering.startDebugger()', 'September 2021',
      'September 2022',
      'the debug renderer in @blockly/dev-tools (See https://www.npmjs.com/package/@blockly/dev-tools.)');
  debug.startDebugger();
};
export {startDebugger};

/**
 * Turn off the blocks debugger.
 * @package
 * @alias Blockly.blockRendering.stopDebugger
 * @deprecated
 */
const stopDebugger = function() {
  deprecation.warn(
      'Blockly.blockRendering.stopDebugger()', 'September 2021',
      'September 2022',
      'the debug renderer in @blockly/dev-tools (See https://www.npmjs.com/package/@blockly/dev-tools.)');
  debug.stopDebugger();
};
export {stopDebugger};

/**
 * Initialize anything needed for rendering (constants, etc).
 * @param {!string} name Name of the renderer to initialize.
 * @param {!Theme} theme The workspace theme object.
 * @param {Object=} opt_rendererOverrides Rendering constant overrides.
 * @return {!Renderer} The new instance of a renderer.
 *     Already initialized.
 * @package
 * @alias Blockly.blockRendering.init
 */
const init = function(name, theme, opt_rendererOverrides) {
  const rendererClass = registry.getClass(registry.Type.RENDERER, name);
  const renderer = new rendererClass(name);
  renderer.init(theme, opt_rendererOverrides);
  return renderer;
};
export {init};

export {BottomRow};
export {Connection};
export {ConstantProvider};
export {Debug};
export {Drawer};
export {ExternalValueInput};
export {Field};
export {Hat};
export {Icon};
export {InRowSpacer};
export {InlineInput};
export {InputConnection};
export {InputRow};
export {IPathObject};
export {JaggedEdge};
export {MarkerSvg};
export {Measurable};
export {NextConnection};
export {OutputConnection};
export {PathObject};
export {PreviousConnection};
export {Renderer};
export {RenderInfo};
export {RoundCorner};
export {Row};
export {SpacerRow};
export {SquareCorner};
export {StatementInput};
export {TopRow};
export {Types};
export {debug};
