/**
 * @license
 * Copyright 2011 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @fileoverview The top level namespace used to access the Blockly library.
 */
'use strict';

/**
 * The top level namespace used to access the Blockly library.
 * @namespace Blockly
 */

// TODO(tsConversion): Delete or reenable.
//goog.module.declareLegacyNamespace();

import * as ContextMenu from './contextmenu';
import * as ContextMenuItems from './contextmenu_items';
import * as Css from './css';
import * as Events from './events/events';
import * as Extensions from './extensions';
import * as Procedures from './procedures';
import * as ShortcutItems from './shortcut_items';
import * as Themes from './theme/themes';
import * as Tooltip from './tooltip';
import * as Touch from './touch';
import * as Variables from './variables';
import * as VariablesDynamic from './variables_dynamic';
import * as WidgetDiv from './widgetdiv';
import * as Xml from './xml';
import * as blockAnimations from './block_animations';
import * as blockRendering from './renderers/common/block_rendering';
import * as browserEvents from './browser_events';
import * as bumpObjects from './bump_objects';
import * as clipboard from './clipboard';
import * as colour from './utils/colour';
import * as common from './common';
import * as constants from './constants';
import * as deprecation from './utils/deprecation';
import * as dialog from './dialog';
import * as dropDownDiv from './dropdowndiv';
import * as fieldRegistry from './field_registry';
import * as geras from './renderers/geras/geras';
import * as internalConstants from './internal_constants';
import * as minimalist from './renderers/minimalist/minimalist';
import * as registry from './registry';
import * as serializationBlocks from './serialization/blocks';
import * as serializationExceptions from './serialization/exceptions';
import * as serializationPriorities from './serialization/priorities';
import * as serializationRegistry from './serialization/registry';
import * as serializationVariables from './serialization/variables';
import * as serializationWorkspaces from './serialization/workspaces';
import * as svgMath from './utils/svg_math';
import * as thrasos from './renderers/thrasos/thrasos';
import * as toolbox from './utils/toolbox';
import * as uiPosition from './positionable_helpers';
import * as utils from './utils';
import * as zelos from './renderers/zelos/zelos';
import {Align, Input} from './input';
import {ASTNode} from './keyboard_nav/ast_node';
import {BasicCursor} from './keyboard_nav/basic_cursor';
import {BlockDragSurfaceSvg} from './block_drag_surface';
import {BlockDragger} from './block_dragger';
import {BlockSvg} from './block_svg';
import {BlocklyOptions} from './blockly_options';
import {Blocks} from './blocks';
import {Block} from './block';
import {BubbleDragger} from './bubble_dragger';
import {Bubble} from './bubble';
import {CollapsibleToolboxCategory} from './toolbox/collapsible_category';
import {Comment} from './comment';
import {ComponentManager} from './component_manager';
import {config} from './config';
import {ConnectionChecker} from './connection_checker';
import {ConnectionDB} from './connection_db';
import {ConnectionType} from './connection_type';
import {Connection} from './connection';
import {ContextMenuRegistry} from './contextmenu_registry';
import {Cursor} from './keyboard_nav/cursor';
import {DeleteArea} from './delete_area';
import {DragTarget} from './drag_target';
import {FieldAngle} from './field_angle';
import {FieldCheckbox} from './field_checkbox';
import {FieldColour} from './field_colour';
import {FieldDropdown} from './field_dropdown';
import {FieldImage} from './field_image';
import {FieldLabelSerializable} from './field_label_serializable';
import {FieldLabel} from './field_label';
import {FieldMultilineInput} from './field_multilineinput';
import {FieldNumber} from './field_number';
import {FieldTextInput} from './field_textinput';
import {FieldVariable} from './field_variable';
import {Field} from './field';
import {FlyoutButton} from './flyout_button';
import {FlyoutMetricsManager} from './flyout_metrics_manager';
import {Flyout} from './flyout_base';
import {Generator} from './generator';
import {Gesture} from './gesture';
import {Grid} from './grid';
import {HorizontalFlyout} from './flyout_horizontal';
import {IASTNodeLocationSvg} from './interfaces/i_ast_node_location_svg';
import {IASTNodeLocationWithBlock} from './interfaces/i_ast_node_location_with_block';
import {IASTNodeLocation} from './interfaces/i_ast_node_location';
import {IAutoHideable} from './interfaces/i_autohideable';
import {IBlockDragger} from './interfaces/i_block_dragger';
import {IBoundedElement} from './interfaces/i_bounded_element';
import {IBubble} from './interfaces/i_bubble';
import {ICollapsibleToolboxItem} from './interfaces/i_collapsible_toolbox_item';
import {IComponent} from './interfaces/i_component';
import {IConnectionChecker} from './interfaces/i_connection_checker';
import {IContextMenu} from './interfaces/i_contextmenu';
import {ICopyable} from './interfaces/i_copyable';
import {IDeletable} from './interfaces/i_deletable';
import {IDeleteArea} from './interfaces/i_delete_area';
import {IDragTarget} from './interfaces/i_drag_target';
import {IDraggable} from './interfaces/i_draggable';
import {IFlyout} from './interfaces/i_flyout';
import {IKeyboardAccessible} from './interfaces/i_keyboard_accessible';
import {IMetricsManager} from './interfaces/i_metrics_manager';
import {IMovable} from './interfaces/i_movable';
import {IPositionable} from './interfaces/i_positionable';
import {IRegistrableField} from './interfaces/i_registrable_field';
import {IRegistrable} from './interfaces/i_registrable';
import {ISelectableToolboxItem} from './interfaces/i_selectable_toolbox_item';
import {ISelectable} from './interfaces/i_selectable';
import {ISerializer} from './interfaces/i_serializer';
import {IStyleable} from './interfaces/i_styleable';
import {IToolboxItem} from './interfaces/i_toolbox_item';
import {IToolbox} from './interfaces/i_toolbox';
import {Icon} from './icon';
import {InsertionMarkerManager} from './insertion_marker_manager';
import {Marker} from './keyboard_nav/marker';
import {MarkerManager} from './marker_manager';
import {MenuItem} from './menuitem';
import {Menu} from './menu';
import {MetricsManager} from './metrics_manager';
import {Mutator} from './mutator';
import {Msg} from './msg';
import {Names} from './names';
import {Options} from './options';
import {RenderedConnection} from './rendered_connection';
import {ScrollbarPair} from './scrollbar_pair';
import {Scrollbar} from './scrollbar';
import {ShortcutRegistry} from './shortcut_registry';
import {TabNavigateCursor} from './keyboard_nav/tab_navigate_cursor';
import {ThemeManager} from './theme_manager';
import {Theme} from './theme';
import {ToolboxCategory} from './toolbox/category';
import {ToolboxItem} from './toolbox/toolbox_item';
import {ToolboxSeparator} from './toolbox/separator';
import {Toolbox} from './toolbox/toolbox';
import {TouchGesture} from './touch_gesture';
import {Trashcan} from './trashcan';
import {VariableMap} from './variable_map';
import {VariableModel} from './variable_model';
import {VerticalFlyout} from './flyout_vertical';
import {Warning} from './warning';
import {WorkspaceAudio} from './workspace_audio';
import {WorkspaceCommentSvg} from './workspace_comment_svg';
import {WorkspaceComment} from './workspace_comment';
import {WorkspaceDragSurfaceSvg} from './workspace_drag_surface_svg';
import {WorkspaceDragger} from './workspace_dragger';
import {WorkspaceSvg, resizeSvgContents} from './workspace_svg';
import {Workspace} from './workspace';
import {ZoomControls} from './zoom_controls';
import {globalThis} from './utils/global';
import {inject} from './inject';
import {inputTypes} from './input_types';
/** @suppress {extraRequire} */
import './events/events_block_create';
/** @suppress {extraRequire} */
import './events/workspace_events';
/** @suppress {extraRequire} */
import './events/events_ui';
/** @suppress {extraRequire} */
import './events/events_ui_base';
/** @suppress {extraRequire} */
import './events/events_var_create';


/**
 * Blockly core version.
 * This constant is overridden by the build script (npm run build) to the value
 * of the version in package.json. This is done by the Closure Compiler in the
 * buildCompressed gulp task.
 * For local builds, you can pass --define='Blockly.VERSION=X.Y.Z' to the
 * compiler to override this constant.
 * @define {string}
 * @alias Blockly.VERSION
 */
const VERSION = 'uncompiled';
export { VERSION };

/*
 * Top-level functions and properties on the Blockly namespace.
 * These are used only in external code. Do not reference these
 * from internal code as importing from this file can cause circular
 * dependencies. Do not add new functions here. There is probably a better
 * namespace to put new functions on.
 */

/*
 * Aliases for input alignments used in block defintions.
 */

/**
 * @see Blockly.Input.Align.LEFT
 * @alias Blockly.ALIGN_LEFT
 */
const ALIGN_LEFT = Align.LEFT;
export {ALIGN_LEFT};

/**
 * @see Blockly.Input.Align.CENTRE
 * @alias Blockly.ALIGN_CENTRE
 */
const ALIGN_CENTRE = Align.CENTRE;
export {ALIGN_CENTRE};

/**
 * @see Blockly.Input.Align.RIGHT
 * @alias Blockly.ALIGN_RIGHT
 */
const ALIGN_RIGHT = Align.RIGHT;
export {ALIGN_RIGHT};

/*
 * Aliases for constants used for connection and input types.
 */

/**
 * @see ConnectionType.INPUT_VALUE
 * @alias Blockly.INPUT_VALUE
 */
exports.INPUT_VALUE = ConnectionType.INPUT_VALUE;

/**
 * @see ConnectionType.OUTPUT_VALUE
 * @alias Blockly.OUTPUT_VALUE
 */
exports.OUTPUT_VALUE = ConnectionType.OUTPUT_VALUE;

/**
 * @see ConnectionType.NEXT_STATEMENT
 * @alias Blockly.NEXT_STATEMENT
 */
exports.NEXT_STATEMENT = ConnectionType.NEXT_STATEMENT;

/**
 * @see ConnectionType.PREVIOUS_STATEMENT
 * @alias Blockly.PREVIOUS_STATEMENT
 */
exports.PREVIOUS_STATEMENT = ConnectionType.PREVIOUS_STATEMENT;

/**
 * @see inputTypes.DUMMY_INPUT
 * @alias Blockly.DUMMY_INPUT
 */
exports.DUMMY_INPUT = inputTypes.DUMMY;

/**
 * Aliases for toolbox positions.
 */

/**
 * @see toolbox.Position.TOP
 * @alias Blockly.TOOLBOX_AT_TOP
 */
exports.TOOLBOX_AT_TOP = toolbox.Position.TOP;

/**
 * @see toolbox.Position.BOTTOM
 * @alias Blockly.TOOLBOX_AT_BOTTOM
 */
exports.TOOLBOX_AT_BOTTOM = toolbox.Position.BOTTOM;

/**
 * @see toolbox.Position.LEFT
 * @alias Blockly.TOOLBOX_AT_LEFT
 */
exports.TOOLBOX_AT_LEFT = toolbox.Position.LEFT;

/**
 * @see toolbox.Position.RIGHT
 * @alias Blockly.TOOLBOX_AT_RIGHT
 */
exports.TOOLBOX_AT_RIGHT = toolbox.Position.RIGHT;

/*
 * Other aliased functions.
 */

/**
 * Size the SVG image to completely fill its container. Call this when the view
 * actually changes sizes (e.g. on a window resize/device orientation change).
 * See workspace.resizeContents to resize the workspace when the contents
 * change (e.g. when a block is added or removed).
 * Record the height/width of the SVG image.
 * @param {!WorkspaceSvg} workspace Any workspace in the SVG.
 * @see Blockly.common.svgResize
 * @alias Blockly.svgResize
 */
// export { svgResize } from './common.js';

/**
 * Close tooltips, context menus, dropdown selections, etc.
 * @param {boolean=} opt_onlyClosePopups Whether only popups should be closed.
 * @see Blockly.WorkspaceSvg.hideChaff
 * @alias Blockly.hideChaff
 */
const hideChaff = function(opt_onlyClosePopups) {
  /** @type {!WorkspaceSvg} */ (common.getMainWorkspace())
      .hideChaff(opt_onlyClosePopups);
};
export {hideChaff};

export {svgResize, getMainWorkspace, defineBlocksWithJsonArray, setParentContainer} from './common';

// /**
//  * Returns the main workspace.  Returns the last used main workspace (based on
//  * focus).  Try not to use this function, particularly if there are multiple
//  * Blockly instances on a page.
//  * @return {!Workspace} The main workspace.
//  * @see Blockly.common.getMainWorkspace
//  * @alias Blockly.getMainWorkspace
//  */
// export { common.getMainWorkspace as getMainWorkspace };

// /**
//  * Define blocks from an array of JSON block definitions, as might be generated
//  * by the Blockly Developer Tools.
//  * @param {!Array<!Object>} jsonArray An array of JSON block definitions.
//  * @see Blockly.common.defineBlocksWithJsonArray
//  * @alias Blockly.defineBlocksWithJsonArray
//  */
// export { common.defineBlocksWithJsonArray as defineBlocksWithJsonArray };

// /**
//  * Set the parent container.  This is the container element that the WidgetDiv,
//  * dropDownDiv, and Tooltip are rendered into the first time `Blockly.inject`
//  * is called.
//  * This method is a NOP if called after the first ``Blockly.inject``.
//  * @param {!Element} container The container element.
//  * @see Blockly.common.setParentContainer
//  * @alias Blockly.setParentContainer
//  */
// export { common.setParentContainer as setParentContainer };

/*
 * Aliased functions and properties that used to be on the Blockly namespace.
 * Everything in this section is deprecated. Both external and internal code
 * should avoid using these functions and use the designated replacements.
 * Anything in this section may be removed in a future version of Blockly.
 */

// Add accessors for properties on Blockly that have now been deprecated.
Object.defineProperties(exports, {
  /**
   * Wrapper to window.alert() that app developers may override to
   * provide alternatives to the modal browser window.
   * @name Blockly.alert
   * @type {!function(string, function()=)}
   * @deprecated Use Blockly.dialog.alert / .setAlert() instead.
   *     (December 2021)
   * @suppress {checkTypes}
   */
  alert: {
    set: function(newAlert) {
      deprecation.warn('Blockly.alert', 'December 2021', 'December 2022');
      dialog.setAlert(newAlert);
    },
    get: function() {
      deprecation.warn(
          'Blockly.alert', 'December 2021', 'December 2022',
          'Blockly.dialog.alert()');
      return dialog.alert;
    },
  },
  /**
   * Wrapper to window.confirm() that app developers may override to
   * provide alternatives to the modal browser window.
   * @name Blockly.confirm
   * @type {!function(string, function()=)}
   * @deprecated Use Blockly.dialog.confirm / .setConfirm() instead.
   *     (December 2021)
   * @suppress {checkTypes}
   */
  confirm: {
    set: function(newConfirm) {
      deprecation.warn('Blockly.confirm', 'December 2021', 'December 2022');
      dialog.setConfirm(newConfirm);
    },
    get: function() {
      deprecation.warn(
          'Blockly.confirm', 'December 2021', 'December 2022',
          'Blockly.dialog.confirm()');
      return dialog.confirm;
    },
  },
  /**
   * The main workspace most recently used.
   * Set by Blockly.WorkspaceSvg.prototype.markFocused
   * @name Blockly.mainWorkspace
   * @type {Workspace}
   * @suppress {checkTypes}
   */
  mainWorkspace: {
    set: function(x) {
      common.setMainWorkspace(x);
    },
    get: function() {
      return common.getMainWorkspace();
    },
  },
  /**
   * Wrapper to window.prompt() that app developers may override to
   * provide alternatives to the modal browser window. Built-in
   * browser prompts are often used for better text input experience
   * on mobile device. We strongly recommend testing mobile when
   * overriding this.
   * @name Blockly.prompt
   * @type {!function(string, string, function()=)}
   * @deprecated Use Blockly.dialog.prompt / .setPrompt() instead.
   *     (December 2021)
   * @suppress {checkTypes}
   */
  prompt: {
    set: function(newPrompt) {
      deprecation.warn('Blockly.prompt', 'December 2021', 'December 2022');
      dialog.setPrompt(newPrompt);
    },
    get: function() {
      deprecation.warn(
          'Blockly.prompt', 'December 2021', 'December 2022',
          'Blockly.dialog.prompt()');
      return dialog.prompt;
    },
  },
  /**
   * Currently selected block.
   * @name Blockly.selected
   * @type {?ICopyable}
   * @suppress {checkTypes}
   */
  selected: {
    get: function() {
      return common.getSelected();
    },
    set: function(newSelection) {
      common.setSelected(newSelection);
    },
  },
  /**
   * The richness of block colours, regardless of the hue.
   * Must be in the range of 0 (inclusive) to 1 (exclusive).
   * @name Blockly.HSV_SATURATION
   * @type {number}
   * @suppress {checkTypes}
   */
  HSV_SATURATION: {
    get: function() {
      return utils.colour.getHsvSaturation();
    },
    set: function(newValue) {
      utils.colour.setHsvSaturation(newValue);
    },
  },
  /**
   * The intensity of block colours, regardless of the hue.
   * Must be in the range of 0 (inclusive) to 1 (exclusive).
   * @name Blockly.HSV_VALUE
   * @type {number}
   * @suppress {checkTypes}
   */
  HSV_VALUE: {
    get: function() {
      return utils.colour.getHsvValue();
    },
    set: function(newValue) {
      utils.colour.setHsvValue(newValue);
    },
  },
});

/**
 * Returns the dimensions of the specified SVG image.
 * @param {!SVGElement} svg SVG image.
 * @return {!Size} Contains width and height properties.
 * @deprecated Use workspace.setCachedParentSvgSize. (2021 March 5)
 * @see Blockly.WorkspaceSvg.setCachedParentSvgSize
 * @alias Blockly.svgSize
 */
export { svgSize } from './utils/svg_math';

/**
 * Size the workspace when the contents change.  This also updates
 * scrollbars accordingly.
 * @param {!WorkspaceSvg} workspace The workspace to resize.
 * @deprecated Use workspace.resizeContents. (2021 December)
 * @see Blockly.WorkspaceSvg.resizeContents
 * @alias Blockly.resizeSvgContents
 */
const resizeSvgContentsLocal = function(workspace) {
  deprecation.warn(
      'Blockly.resizeSvgContents', 'December 2021', 'December 2022',
      'Blockly.WorkspaceSvg.resizeSvgContents');
  resizeSvgContents(workspace);
};
export { resizeSvgContentsLocal as resizeSvgContents };

/**
 * Copy a block or workspace comment onto the local clipboard.
 * @param {!ICopyable} toCopy Block or Workspace Comment to be copied.
 * @deprecated Use Blockly.clipboard.copy(). (2021 December)
 * @see Blockly.clipboard.copy
 * @alias Blockly.copy
 */
const copy = function(toCopy) {
  deprecation.warn(
      'Blockly.copy', 'December 2021', 'December 2022',
      'Blockly.clipboard.copy');
  clipboard.copy(toCopy);
};
export {copy};

/**
 * Paste a block or workspace comment on to the main workspace.
 * @return {boolean} True if the paste was successful, false otherwise.
 * @deprecated Use Blockly.clipboard.paste(). (2021 December)
 * @see Blockly.clipboard.paste
 * @alias Blockly.paste
 */
const paste = function() {
  deprecation.warn(
      'Blockly.paste', 'December 2021', 'December 2022',
      'Blockly.clipboard.paste');
  return !!clipboard.paste();
};
export {paste};

/**
 * Duplicate this block and its children, or a workspace comment.
 * @param {!ICopyable} toDuplicate Block or Workspace Comment to be
 *     copied.
 * @deprecated Use Blockly.clipboard.duplicate(). (2021 December)
 * @see Blockly.clipboard.duplicate
 * @alias Blockly.duplicate
 */
const duplicate = function(toDuplicate) {
  deprecation.warn(
      'Blockly.duplicate', 'December 2021', 'December 2022',
      'Blockly.clipboard.duplicate');
  clipboard.duplicate(toDuplicate);
};
export {duplicate};

/**
 * Is the given string a number (includes negative and decimals).
 * @param {string} str Input string.
 * @return {boolean} True if number, false otherwise.
 * @deprecated Use Blockly.utils.string.isNumber(str). (2021 December)
 * @see Blockly.utils.string.isNumber
 * @alias Blockly.isNumber
 */
const isNumber = function(str) {
  deprecation.warn(
      'Blockly.isNumber', 'December 2021', 'December 2022',
      'Blockly.utils.string.isNumber');
  return utils.string.isNumber(str);
};
export {isNumber};

/**
 * Convert a hue (HSV model) into an RGB hex triplet.
 * @param {number} hue Hue on a colour wheel (0-360).
 * @return {string} RGB code, e.g. '#5ba65b'.
 * @deprecated Use Blockly.utils.colour.hueToHex(). (2021 December)
 * @see Blockly.utils.colour.hueToHex
 * @alias Blockly.hueToHex
 */
const hueToHex = function(hue) {
  deprecation.warn(
      'Blockly.hueToHex', 'December 2021', 'December 2022',
      'Blockly.utils.colour.hueToHex');
  return colour.hueToHex(hue);
};
export {hueToHex};

/**
 * Bind an event handler that should be called regardless of whether it is part
 * of the active touch stream.
 * Use this for events that are not part of a multi-part gesture (e.g.
 * mouseover for tooltips).
 * @param {!EventTarget} node Node upon which to listen.
 * @param {string} name Event name to listen to (e.g. 'mousedown').
 * @param {?Object} thisObject The value of 'this' in the function.
 * @param {!Function} func Function to call when event is triggered.
 * @return {!browserEvents.Data} Opaque data that can be passed to
 *     unbindEvent_.
 * @deprecated Use Blockly.browserEvents.bind(). (December 2021)
 * @see Blockly.browserEvents.bind
 * @alias Blockly.bindEvent_
 */
const bindEvent_ = function(node, name, thisObject, func) {
  deprecation.warn(
      'Blockly.bindEvent_', 'December 2021', 'December 2022',
      'Blockly.browserEvents.bind');
  return browserEvents.bind(node, name, thisObject, func);
};
exports.bindEvent_ = bindEvent_;

/**
 * Unbind one or more events event from a function call.
 * @param {!browserEvents.Data} bindData Opaque data from bindEvent_.
 *     This list is emptied during the course of calling this function.
 * @return {!Function} The function call.
 * @deprecated Use Blockly.browserEvents.unbind(). (December 2021)
 * @see browserEvents.unbind
 * @alias Blockly.unbindEvent_
 */
const unbindEvent_ = function(bindData) {
  deprecation.warn(
      'Blockly.unbindEvent_', 'December 2021', 'December 2022',
      'Blockly.browserEvents.unbind');
  return browserEvents.unbind(bindData);
};
exports.unbindEvent_ = unbindEvent_;

/**
 * Bind an event handler that can be ignored if it is not part of the active
 * touch stream.
 * Use this for events that either start or continue a multi-part gesture (e.g.
 * mousedown or mousemove, which may be part of a drag or click).
 * @param {!EventTarget} node Node upon which to listen.
 * @param {string} name Event name to listen to (e.g. 'mousedown').
 * @param {?Object} thisObject The value of 'this' in the function.
 * @param {!Function} func Function to call when event is triggered.
 * @param {boolean=} opt_noCaptureIdentifier True if triggering on this event
 *     should not block execution of other event handlers on this touch or
 *     other simultaneous touches.  False by default.
 * @param {boolean=} opt_noPreventDefault True if triggering on this event
 *     should prevent the default handler.  False by default.  If
 *     opt_noPreventDefault is provided, opt_noCaptureIdentifier must also be
 *     provided.
 * @return {!browserEvents.Data} Opaque data that can be passed to
 *     unbindEvent_.
 * @deprecated Use Blockly.browserEvents.conditionalBind(). (December 2021)
 * @see browserEvents.conditionalBind
 * @alias Blockly.bindEventWithChecks_
 */
const bindEventWithChecks_ = function(
    node, name, thisObject, func, opt_noCaptureIdentifier,
    opt_noPreventDefault) {
  deprecation.warn(
      'Blockly.bindEventWithChecks_', 'December 2021', 'December 2022',
      'Blockly.browserEvents.conditionalBind');
  return browserEvents.conditionalBind(
      node, name, thisObject, func, opt_noCaptureIdentifier,
      opt_noPreventDefault);
};
exports.bindEventWithChecks_ = bindEventWithChecks_;

// Aliases to allow external code to access these values for legacy reasons.
exports.COLLAPSE_CHARS = internalConstants.COLLAPSE_CHARS;
exports.DRAG_STACK = internalConstants.DRAG_STACK;
exports.OPPOSITE_TYPE = internalConstants.OPPOSITE_TYPE;
exports.RENAME_VARIABLE_ID = internalConstants.RENAME_VARIABLE_ID;
exports.DELETE_VARIABLE_ID = internalConstants.DELETE_VARIABLE_ID;
exports.COLLAPSED_INPUT_NAME = constants.COLLAPSED_INPUT_NAME;
exports.COLLAPSED_FIELD_NAME = constants.COLLAPSED_FIELD_NAME;

/**
 * String for use in the "custom" attribute of a category in toolbox XML.
 * This string indicates that the category should be dynamically populated with
 * variable blocks.
 * @const {string}
 * @alias Blockly.VARIABLE_CATEGORY_NAME
 */
exports.VARIABLE_CATEGORY_NAME = Variables.CATEGORY_NAME;

/**
 * String for use in the "custom" attribute of a category in toolbox XML.
 * This string indicates that the category should be dynamically populated with
 * variable blocks.
 * @const {string}
 * @alias Blockly.VARIABLE_DYNAMIC_CATEGORY_NAME
 */
exports.VARIABLE_DYNAMIC_CATEGORY_NAME = VariablesDynamic.CATEGORY_NAME;
/**
 * String for use in the "custom" attribute of a category in toolbox XML.
 * This string indicates that the category should be dynamically populated with
 * procedure blocks.
 * @const {string}
 * @alias Blockly.PROCEDURE_CATEGORY_NAME
 */
exports.PROCEDURE_CATEGORY_NAME = Procedures.CATEGORY_NAME;

// Re-export submodules that no longer declareLegacyNamespace.
export {ASTNode};
export {BasicCursor};
export {Block};
export {BlocklyOptions};
export {BlockDragger};
export {BlockDragSurfaceSvg};
export {BlockSvg};
export {Blocks};
export {Bubble};
export {BubbleDragger};
export {CollapsibleToolboxCategory};
export {Comment};
export {ComponentManager};
export {Connection};
export {ConnectionType};
export {ConnectionChecker};
export {ConnectionDB};
export {ContextMenu};
export {ContextMenuItems};
export {ContextMenuRegistry};
export {Css};
export {Cursor};
export {DeleteArea};
export {DragTarget};
export { dropDownDiv as DropDownDiv };
export {Events};
export {Extensions};
export {Field};
export {FieldAngle};
export {FieldCheckbox};
export {FieldColour};
export {FieldDropdown};
export {FieldImage};
export {FieldLabel};
export {FieldLabelSerializable};
export {FieldMultilineInput};
export {FieldNumber};
export {FieldTextInput};
export {FieldVariable};
export {Flyout};
export {FlyoutButton};
export {FlyoutMetricsManager};
export {Generator};
export {Gesture};
export {Grid};
export {HorizontalFlyout};
export {IASTNodeLocation};
export {IASTNodeLocationSvg};
export {IASTNodeLocationWithBlock};
export {IAutoHideable};
export {IBlockDragger};
export {IBoundedElement};
export {IBubble};
export {ICollapsibleToolboxItem};
export {IComponent};
export {IConnectionChecker};
export {IContextMenu};
export {Icon};
export {ICopyable};
export {IDeletable};
export {IDeleteArea};
export {IDragTarget};
export {IDraggable};
export {IFlyout};
export {IKeyboardAccessible};
export {IMetricsManager};
export {IMovable};
export {Input};
export {InsertionMarkerManager};
export {IPositionable};
export {IRegistrable};
export {IRegistrableField};
export {ISelectable};
export {ISelectableToolboxItem};
export {IStyleable};
export {IToolbox};
export {IToolboxItem};
export {Marker};
export {MarkerManager};
export {Menu};
export {MenuItem};
export {MetricsManager};
export {Mutator};
export {Msg};
export {Names};
export {Options};
export {Procedures};
export {RenderedConnection};
export {Scrollbar};
export {ScrollbarPair};
export {ShortcutItems};
export {ShortcutRegistry};
export {TabNavigateCursor};
export {Theme};
export {Themes};
export {ThemeManager};
export {Toolbox};
export {ToolboxCategory};
export {ToolboxItem};
export {ToolboxSeparator};
export {Tooltip};
export {Touch};
export {TouchGesture};
export {Trashcan};
export {VariableMap};
export {VariableModel};
export {Variables};
export {VariablesDynamic};
export {VerticalFlyout};
export {Warning};
export {WidgetDiv};
export {Workspace};
export {WorkspaceAudio};
export {WorkspaceComment};
export {WorkspaceCommentSvg};
export {WorkspaceDragSurfaceSvg};
export {WorkspaceDragger};
export {WorkspaceSvg};
export {Xml};
export {ZoomControls};
export {blockAnimations};
export {blockRendering};
export {browserEvents};
export {bumpObjects};
export {clipboard};
export {common};
export {config};
/** @deprecated Use Blockly.ConnectionType instead. */
export { ConnectionType as connectionTypes };
export {constants};
export {dialog};
export {fieldRegistry};
export {geras};
export {inject};
export {inputTypes};
export {minimalist};
export {registry};
exports.serialization = {
  blocks: serializationBlocks,
  exceptions: serializationExceptions,
  priorities: serializationPriorities,
  registry: serializationRegistry,
  variables: serializationVariables,
  workspaces: serializationWorkspaces,
  ISerializer: ISerializer,
};
export {thrasos};
export {uiPosition};
export {utils};
export {zelos};

// If Blockly is compiled with ADVANCED_COMPILATION and/or loaded as a
// CJS or ES module there will not be a Blockly global variable
// created.  This can cause problems because a very common way of
// loading translations is to use a <script> tag to load one of
// msg/js/*.js, which consists of lines like:
//
// Blockly.Msg["ADD_COMMENT"] = "Add Comment";
// Blockly.Msg["CLEAN_UP"] = "Clean up Blocks";
//
// This obviously only works if Blockly.Msg is the Msg export from the
// Blockly.Msg module - so make sure it is, but only if there is not
// yet a Blockly global variable.
if (!('Blockly' in globalThis)) {
  globalThis['Blockly'] = {'Msg': Msg};
}

// Temporary hack to copy accessor properties from exports to the
// global Blockly object as the routine to copy exports in
// goog.exportPath_ (see closure/goog/base.js) invoked by
// declareLegacyNamespace only copies normal data properties, not
// accessors.  This can be removed once all remaining calls to
// declareLegacyNamspace have been removed.
//
// This is only needed in uncompiled mode (see
// google/blockly-samples#902); in compiled mode the exports object is
// already the value of globalThis['Blockly'].
//
// Note that this code will still attempt to redefine accessors on a
// previously-imported copy of the Blockly library if both are
// imported in uncompiled mode.  This will fail with TypeError as the
// accessors are nonconfigurable (which is good, as otherwise one
// accessors on one copy would call get/set functions on the other
// copy!)
/* eslint-disable-next-line no-undef */
if (!COMPILED && typeof globalThis['Blockly'] === 'object' &&
    globalThis['Blockly'] !== exports) {
  const descriptors = Object.getOwnPropertyDescriptors(exports);
  const accessors = {};
  for (const key in descriptors) {
    if (descriptors[key].get || descriptors[key].set) {
      accessors[key] = descriptors[key];
    }
  }
  Object.defineProperties(globalThis['Blockly'], accessors);
}
