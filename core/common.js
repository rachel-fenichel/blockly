/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @fileoverview Common functions used both internally and externally, but which
 * must not be at the top level to avoid circular dependencies.
 * @author fenichel@google.com (Rachel Fenichel)
 */
'use strict';

goog.module('Blockly.common');
goog.module.declareLegacyNamespace();

/* eslint-disable-next-line no-unused-vars */
const BlockSvg = goog.requireType('Blockly.BlockSvg');
const ComponentManager = goog.require('Blockly.ComponentManager');
const DropDownDiv = goog.require('Blockly.DropDownDiv');
const Events = goog.require('Blockly.Events');
const ShortcutRegistry = goog.require('Blockly.ShortcutRegistry');
const Tooltip = goog.require('Blockly.Tooltip');
const WidgetDiv = goog.require('Blockly.WidgetDiv');
/* eslint-disable-next-line no-unused-vars */
const Workspace = goog.requireType('Blockly.Workspace');
/* eslint-disable-next-line no-unused-vars */
const WorkspaceSvg = goog.requireType('Blockly.WorkspaceSvg');
const utils = goog.require('Blockly.utils');


/**
 * The main workspace most recently used.
 * Set by Blockly.WorkspaceSvg.prototype.markFocused
 * @type {?Workspace}
 */
let mainWorkspace = null;

/**
 * Returns the main workspace.  Returns the last used main workspace (based on
 * focus).  Try not to use this function, particularly if there are multiple
 * Blockly instances on a page.
 * @return {!Workspace} The main workspace.
 */
const getMainWorkspace = function() {
  return /** @type {!Workspace} */ (mainWorkspace);
};
exports.getMainWorkspace = getMainWorkspace;

/**
 * Sets last used main workspace.
 * @param {?Workspace} workspace The most recently used top level workspace.
 */
const setMainWorkspace = function(workspace) {
  mainWorkspace = workspace;
};
exports.setMainWorkspace = setMainWorkspace;

/**
 * Size the workspace when the contents change.  This also updates
 * scrollbars accordingly.
 * @param {!WorkspaceSvg} workspace The workspace to resize.
 */
const resizeSvgContents = function(workspace) {
  workspace.resizeContents();
};
exports.resizeSvgContents = resizeSvgContents;

/**
 * Size the SVG image to completely fill its container. Call this when the view
 * actually changes sizes (e.g. on a window resize/device orientation change).
 * See Blockly.resizeSvgContents to resize the workspace when the contents
 * change (e.g. when a block is added or removed).
 * Record the height/width of the SVG image.
 * @param {!WorkspaceSvg} workspace Any workspace in the SVG.
 */
const svgResize = function(workspace) {
  let mainWorkspace = workspace;
  while (mainWorkspace.options.parentWorkspace) {
    mainWorkspace = mainWorkspace.options.parentWorkspace;
  }
  const svg = mainWorkspace.getParentSvg();
  const cachedSize = mainWorkspace.getCachedParentSvgSize();
  const div = svg.parentNode;
  if (!div) {
    // Workspace deleted, or something.
    return;
  }
  const width = div.offsetWidth;
  const height = div.offsetHeight;
  if (cachedSize.width != width) {
    svg.setAttribute('width', width + 'px');
    mainWorkspace.setCachedParentSvgSize(width, null);
  }
  if (cachedSize.height != height) {
    svg.setAttribute('height', height + 'px');
    mainWorkspace.setCachedParentSvgSize(null, height);
  }
  mainWorkspace.resize();
};
exports.svgResize = svgResize;

/**
 * Handle a key-down on SVG drawing surface. Does nothing if the main workspace
 * is not visible.
 * @param {!KeyboardEvent} e Key down event.
 * @package
 */
// TODO (https://github.com/google/blockly/issues/1998) handle cases where there
// are multiple workspaces and non-main workspaces are able to accept input.
const onKeyDown = function(e) {
  const ws = mainWorkspace;
  if (!ws) {
    return;
  }

  if (utils.isTargetInput(e) || (ws.rendered && !ws.isVisible())) {
    // When focused on an HTML text input widget, don't trap any keys.
    // Ignore keypresses on rendered workspaces that have been explicitly
    // hidden.
    return;
  }
  ShortcutRegistry.registry.onKeyDown(ws, e);
};
exports.onKeyDown = onKeyDown;

/**
 * Delete the given block.
 * @param {!BlockSvg} selected The block to delete.
 * @package
 */
const deleteBlock = function(selected) {
  if (!selected.workspace.isFlyout) {
    Events.setGroup(true);
    Blockly.hideChaff();
    if (selected.outputConnection) {
      // Do not attempt to heal rows
      // (https://github.com/google/blockly/issues/4832)
      selected.dispose(false, true);
    } else {
      selected.dispose(/* heal */ true, true);
    }
    Events.setGroup(false);
  }
};
exports.deleteBlock = deleteBlock;

/**
 * Cancel the native context menu, unless the focus is on an HTML input widget.
 * @param {!Event} e Mouse down event.
 * @private
 */
const onContextMenu = function(e) {
  if (!utils.isTargetInput(e)) {
    // When focused on an HTML text input widget, don't cancel the context menu.
    e.preventDefault();
  }
};
exports.onContextMenu = onContextMenu;

/**
 * Close tooltips, context menus, dropdown selections, etc.
 * @param {boolean=} opt_onlyClosePopups Whether only popups should be closed.
 */
const hideChaff = function(opt_onlyClosePopups) {
  Tooltip.hide();
  WidgetDiv.hide();
  DropDownDiv.hideWithoutAnimation();

  var onlyClosePopups = !!opt_onlyClosePopups;
  var workspace = getMainWorkspace();
  if (workspace) {
    var autoHideables = workspace.getComponentManager().getComponents(
        ComponentManager.Capability.AUTOHIDEABLE, true);
    autoHideables.forEach(function(autoHideable) {
      autoHideable.autoHide(onlyClosePopups);
    });
  }
};
exports.hideChaff = hideChaff;
