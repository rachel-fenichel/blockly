/**
 * @license
 * Copyright 2012 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @fileoverview Utility methods.
 */
'use strict';

/**
 * Utility methods.
 * @namespace Blockly.utils
 */


import * as aria from './utils/aria';
import * as arrayUtils from './utils/array';
import * as browserEvents from './browser_events';
import * as colourUtils from './utils/colour';
import * as common from './common';
import * as deprecation from './utils/deprecation';
import * as dom from './utils/dom';
import * as extensions from './extensions';
import * as global from './utils/global';
import * as idGenerator from './utils/idgenerator';
import * as math from './utils/math';
import * as object from './utils/object';
import * as parsing from './utils/parsing';
import * as stringUtils from './utils/string';
import * as style from './utils/style';
import * as svgMath from './utils/svg_math';
import * as svgPaths from './utils/svg_paths';
import * as toolbox from './utils/toolbox';
import * as userAgent from './utils/useragent';
import * as xmlUtils from './utils/xml';
/* eslint-disable-next-line no-unused-vars */
import type {Block} from './block';
import {Coordinate} from './utils/coordinate';
import {KeyCodes} from './utils/keycodes';
import {Metrics} from './utils/metrics';
import {Rect} from './utils/rect';
import {Size} from './utils/size';
import {Svg} from './utils/svg';
/* eslint-disable-next-line no-unused-vars */
import type {WorkspaceSvg} from './workspace_svg';


export {aria};
export { colourUtils as colour };
export {Coordinate};
export {deprecation};
export {dom};
const localGlobalThis = global.globalThis;
export { localGlobalThis as global };
export {idGenerator};
export {KeyCodes};
export {math};
export {Metrics};
export {object};
export {parsing};
export {Rect};
export {Size};
export { stringUtils as string };
export {style};
export {Svg};
export {svgPaths};
export {svgMath};
export {toolbox};
export {userAgent};
export { xmlUtils as xml };

/**
 * Halts the propagation of the event without doing anything else.
 * @param {!Event} e An event.
 * @deprecated
 * @alias Blockly.utils.noEvent
 */
const noEvent = function(e) {
  deprecation.warn('Blockly.utils.noEvent', 'September 2021', 'September 2022');
  // This event has been handled.  No need to bubble up to the document.
  e.preventDefault();
  e.stopPropagation();
};
export {noEvent};

/**
 * Returns true if this event is targeting a text input widget?
 * @param {!Event} e An event.
 * @return {boolean} True if text input.
 * @deprecated Use Blockly.browserEvents.isTargetInput instead.
 * @alias Blockly.utils.isTargetInput
 */
const isTargetInput = function(e) {
  deprecation.warn(
      'Blockly.utils.isTargetInput', 'September 2021', 'September 2022',
      'Blockly.browserEvents.isTargetInput');
  return browserEvents.isTargetInput(e);
};
export {isTargetInput};

/**
 * Return the coordinates of the top-left corner of this element relative to
 * its parent.  Only for SVG elements and children (e.g. rect, g, path).
 * @param {!Element} element SVG element to find the coordinates of.
 * @return {!Coordinate} Object with .x and .y properties.
 * @deprecated
 * @alias Blockly.utils.getRelativeXY
 */
const getRelativeXY = function(element) {
  deprecation.warn(
      'Blockly.utils.getRelativeXY', 'December 2021', 'December 2022',
      'Blockly.utils.svgMath.getRelativeXY');
  return svgMath.getRelativeXY(element);
};
export {getRelativeXY};

/**
 * Return the coordinates of the top-left corner of this element relative to
 * the div Blockly was injected into.
 * @param {!Element} element SVG element to find the coordinates of. If this is
 *     not a child of the div Blockly was injected into, the behaviour is
 *     undefined.
 * @return {!Coordinate} Object with .x and .y properties.
 * @deprecated
 * @alias Blockly.utils.getInjectionDivXY_
 */
const getInjectionDivXY = function(element) {
  deprecation.warn(
      'Blockly.utils.getInjectionDivXY_', 'December 2021', 'December 2022',
      'Blockly.utils.svgMath.getInjectionDivXY');
  return svgMath.getInjectionDivXY(element);
};
exports.getInjectionDivXY_ = getInjectionDivXY;

/**
 * Returns true this event is a right-click.
 * @param {!Event} e Mouse event.
 * @return {boolean} True if right-click.
 * @deprecated Use Blockly.browserEvents.isRightButton instead.
 * @alias Blockly.utils.isRightButton
 */
const isRightButton = function(e) {
  deprecation.warn(
      'Blockly.utils.isRightButton', 'September 2021', 'September 2022',
      'Blockly.browserEvents.isRightButton');
  return browserEvents.isRightButton(e);
};
export {isRightButton};

/**
 * Returns the converted coordinates of the given mouse event.
 * The origin (0,0) is the top-left corner of the Blockly SVG.
 * @param {!Event} e Mouse event.
 * @param {!SVGSVGElement} svg SVG element.
 * @param {?SVGMatrix} matrix Inverted screen CTM to use.
 * @return {!SVGPoint} Object with .x and .y properties.
 * @deprecated Use Blockly.browserEvents.mouseToSvg instead;
 * @alias Blockly.utils.mouseToSvg
 */
const mouseToSvg = function(e, svg, matrix) {
  deprecation.warn(
      'Blockly.utils.mouseToSvg', 'September 2021', 'September 2022',
      'Blockly.browserEvents.mouseToSvg');
  return browserEvents.mouseToSvg(e, svg, matrix);
};
export {mouseToSvg};

/**
 * Returns the scroll delta of a mouse event in pixel units.
 * @param {!WheelEvent} e Mouse event.
 * @return {{x: number, y: number}} Scroll delta object with .x and .y
 *    properties.
 * @deprecated Use Blockly.browserEvents.getScrollDeltaPixels instead.
 * @alias Blockly.utils.getScrollDeltaPixels
 */
const getScrollDeltaPixels = function(e) {
  deprecation.warn(
      'Blockly.utils.getScrollDeltaPixels', 'September 2021', 'September 2022',
      'Blockly.browserEvents.getScrollDeltaPixels');
  return browserEvents.getScrollDeltaPixels(e);
};
export {getScrollDeltaPixels};

/**
 * Parse a string with any number of interpolation tokens (%1, %2, ...).
 * It will also replace string table references (e.g., %{bky_my_msg} and
 * %{BKY_MY_MSG} will both be replaced with the value in
 * Msg['MY_MSG']). Percentage sign characters '%' may be self-escaped
 * (e.g., '%%').
 * @param {string} message Text which might contain string table references and
 *     interpolation tokens.
 * @return {!Array<string|number>} Array of strings and numbers.
 * @deprecated
 * @alias Blockly.utils.tokenizeInterpolation
 */
const tokenizeInterpolation = function(message) {
  deprecation.warn(
      'Blockly.utils.tokenizeInterpolation', 'December 2021', 'December 2022',
      'Blockly.utils.parsing.tokenizeInterpolation');
  return parsing.tokenizeInterpolation(message);
};
export {tokenizeInterpolation};

/**
 * Replaces string table references in a message, if the message is a string.
 * For example, "%{bky_my_msg}" and "%{BKY_MY_MSG}" will both be replaced with
 * the value in Msg['MY_MSG'].
 * @param {string|?} message Message, which may be a string that contains
 *     string table references.
 * @return {string} String with message references replaced.
 * @deprecated
 * @alias Blockly.utils.replaceMessageReferences
 */
const replaceMessageReferences = function(message) {
  deprecation.warn(
      'Blockly.utils.replaceMessageReferences', 'December 2021',
      'December 2022', 'Blockly.utils.parsing.replaceMessageReferences');
  return parsing.replaceMessageReferences(message);
};
export {replaceMessageReferences};

/**
 * Validates that any %{MSG_KEY} references in the message refer to keys of
 * the Msg string table.
 * @param {string} message Text which might contain string table references.
 * @return {boolean} True if all message references have matching values.
 *     Otherwise, false.
 * @deprecated
 * @alias Blockly.utils.checkMessageReferences
 */
const checkMessageReferences = function(message) {
  deprecation.warn(
      'Blockly.utils.checkMessageReferences', 'December 2021', 'December 2022',
      'Blockly.utils.parsing.checkMessageReferences');
  return parsing.checkMessageReferences(message);
};
export {checkMessageReferences};

/**
 * Generate a unique ID.
 * @return {string} A globally unique ID string.
 * @deprecated Use Blockly.utils.idGenerator.genUid instead.
 * @alias Blockly.utils.genUid
 */
const genUid = function() {
  deprecation.warn(
      'Blockly.utils.genUid', 'September 2021', 'September 2022',
      'Blockly.utils.idGenerator.genUid');
  return idGenerator.genUid();
};
export {genUid};

/**
 * Check if 3D transforms are supported by adding an element
 * and attempting to set the property.
 * @return {boolean} True if 3D transforms are supported.
 * @deprecated
 * @alias Blockly.utils.is3dSupported
 */
const is3dSupported = function() {
  deprecation.warn(
      'Blockly.utils.is3dSupported', 'December 2021', 'December 2022',
      'Blockly.utils.svgMath.is3dSupported');
  return svgMath.is3dSupported();
};
exports.is3dSupported = is3dSupported;

/**
 * Get the position of the current viewport in window coordinates.  This takes
 * scroll into account.
 * @return {!Rect} An object containing window width, height, and
 *     scroll position in window coordinates.
 * @alias Blockly.utils.getViewportBBox
 * @deprecated
 * @package
 */
const getViewportBBox = function() {
  deprecation.warn(
      'Blockly.utils.getViewportBBox', 'December 2021', 'December 2022',
      'Blockly.utils.svgMath.getViewportBBox');
  return svgMath.getViewportBBox();
};
export {getViewportBBox};

/**
 * Removes the first occurrence of a particular value from an array.
 * @param {!Array} arr Array from which to remove value.
 * @param {*} value Value to remove.
 * @return {boolean} True if an element was removed.
 * @alias Blockly.utils.arrayRemove
 * @deprecated
 * @package
 */
const arrayRemove = function(arr, value) {
  deprecation.warn(
      'Blockly.utils.arrayRemove', 'December 2021', 'December 2022');
  return arrayUtils.removeElem(arr, value);
};
export {arrayRemove};

/**
 * Gets the document scroll distance as a coordinate object.
 * Copied from Closure's goog.dom.getDocumentScroll.
 * @return {!Coordinate} Object with values 'x' and 'y'.
 * @deprecated
 * @alias Blockly.utils.getDocumentScroll
 */
const getDocumentScroll = function() {
  deprecation.warn(
      'Blockly.utils.getDocumentScroll', 'December 2021', 'December 2022',
      'Blockly.utils.svgMath.getDocumentScroll');
  return svgMath.getDocumentScroll();
};
export {getDocumentScroll};

/**
 * Get a map of all the block's descendants mapping their type to the number of
 *    children with that type.
 * @param {!Block} block The block to map.
 * @param {boolean=} opt_stripFollowing Optionally ignore all following
 *    statements (blocks that are not inside a value or statement input
 *    of the block).
 * @return {!Object} Map of types to type counts for descendants of the bock.
 * @deprecated
 * @alias Blockly.utils.getBlockTypeCounts
 */
const getBlockTypeCounts = function(block, opt_stripFollowing) {
  deprecation.warn(
      'Blockly.utils.getBlockTypeCounts', 'December 2021', 'December 2022',
      'Blockly.common.getBlockTypeCounts');
  return common.getBlockTypeCounts(block, opt_stripFollowing);
};
export {getBlockTypeCounts};

/**
 * Converts screen coordinates to workspace coordinates.
 * @param {!WorkspaceSvg} ws The workspace to find the coordinates on.
 * @param {!Coordinate} screenCoordinates The screen coordinates to
 * be converted to workspace coordinates
 * @deprecated
 * @return {!Coordinate} The workspace coordinates.
 */
const screenToWsCoordinates = function(ws, screenCoordinates) {
  deprecation.warn(
      'Blockly.utils.screenToWsCoordinates', 'December 2021', 'December 2022',
      'Blockly.utils.svgMath.screenToWsCoordinates');
  return svgMath.screenToWsCoordinates(ws, screenCoordinates);
};
export {screenToWsCoordinates};

/**
 * Parse a block colour from a number or string, as provided in a block
 * definition.
 * @param {number|string} colour HSV hue value (0 to 360), #RRGGBB string,
 *     or a message reference string pointing to one of those two values.
 * @return {{hue: ?number, hex: string}} An object containing the colour as
 *     a #RRGGBB string, and the hue if the input was an HSV hue value.
 * @throws {Error} If the colour cannot be parsed.
 * @deprecated
 * @alias Blockly.utils.parseBlockColour
 */
const parseBlockColour = function(colour) {
  deprecation.warn(
      'Blockly.utils.parseBlockColour', 'December 2021', 'December 2022',
      'Blockly.utils.parsing.parseBlockColour');
  return parsing.parseBlockColour(colour);
};
export {parseBlockColour};

/**
 * Calls a function after the page has loaded, possibly immediately.
 * @param {function()} fn Function to run.
 * @throws Error Will throw if no global document can be found (e.g., Node.js).
 * @deprecated
 * @alias Blockly.utils.runAfterPageLoad
 */
const runAfterPageLoad = function(fn) {
  deprecation.warn(
      'Blockly.utils.runAfterPageLoad', 'December 2021', 'December 2022');
  extensions.runAfterPageLoad(fn);
};
export {runAfterPageLoad};
