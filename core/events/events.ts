/**
 * @license
 * Copyright 2016 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @fileoverview Events fired as a result of actions in Blockly's editor.
 */
'use strict';

/**
 * Events fired as a result of actions in Blockly's editor.
 * @namespace Blockly.Events
 */


import * as deprecation from '../utils/deprecation';
import * as eventUtils from './utils';
import {Abstract as AbstractEvent} from './events_abstract';
import {BlockBase} from './events_block_base';
import {BlockChange} from './events_block_change';
import {BlockCreate} from './events_block_create';
import {BlockDelete} from './events_block_delete';
import {BlockDrag} from './events_block_drag';
import {BlockMove} from './events_block_move';
import {BubbleOpen} from './events_bubble_open';
import {Click} from './events_click';
import {CommentBase} from './events_comment_base';
import {CommentChange} from './events_comment_change';
import {CommentCreate} from './events_comment_create';
import {CommentDelete} from './events_comment_delete';
import {CommentMove} from './events_comment_move';
import {FinishedLoading} from './workspace_events';
import {MarkerMove} from './events_marker_move';
import {Selected} from './events_selected';
import {ThemeChange} from './events_theme_change';
import {ToolboxItemSelect} from './events_toolbox_item_select';
import {TrashcanOpen} from './events_trashcan_open';
import {UiBase} from './events_ui_base';
import {Ui} from './events_ui';
import {VarBase} from './events_var_base';
import {VarCreate} from './events_var_create';
import {VarDelete} from './events_var_delete';
import {VarRename} from './events_var_rename';
import {ViewportChange} from './events_viewport';


// Events.
export { AbstractEvent as Abstract };
export {BubbleOpen};
export {BlockBase};
export {BlockChange};
export {BlockCreate};
export {BlockDelete};
export {BlockDrag};
export {BlockMove};
export {Click};
export {CommentBase};
export {CommentChange};
export {CommentCreate};
export {CommentDelete};
export {CommentMove};
export {FinishedLoading};
export {MarkerMove};
export {Selected};
export {ThemeChange};
export {ToolboxItemSelect};
export {TrashcanOpen};
export {Ui};
export {UiBase};
export {VarBase};
export {VarCreate};
export {VarDelete};
export {VarRename};
export {ViewportChange};

// Event types.
exports.BLOCK_CHANGE = eventUtils.BLOCK_CHANGE;
exports.BLOCK_CREATE = eventUtils.BLOCK_CREATE;
exports.BLOCK_DELETE = eventUtils.BLOCK_DELETE;
exports.BLOCK_DRAG = eventUtils.BLOCK_DRAG;
exports.BLOCK_MOVE = eventUtils.BLOCK_MOVE;
exports.BUBBLE_OPEN = eventUtils.BUBBLE_OPEN;
export { eventUtils.BumpEvent as BumpEvent };
exports.BUMP_EVENTS = eventUtils.BUMP_EVENTS;
export { eventUtils.CHANGE as CHANGE };
export { eventUtils.CLICK as CLICK };
exports.COMMENT_CHANGE = eventUtils.COMMENT_CHANGE;
exports.COMMENT_CREATE = eventUtils.COMMENT_CREATE;
exports.COMMENT_DELETE = eventUtils.COMMENT_DELETE;
exports.COMMENT_MOVE = eventUtils.COMMENT_MOVE;
export { eventUtils.CREATE as CREATE };
export { eventUtils.DELETE as DELETE };
exports.FINISHED_LOADING = eventUtils.FINISHED_LOADING;
exports.MARKER_MOVE = eventUtils.MARKER_MOVE;
export { eventUtils.MOVE as MOVE };
export { eventUtils.SELECTED as SELECTED };
exports.THEME_CHANGE = eventUtils.THEME_CHANGE;
exports.TOOLBOX_ITEM_SELECT = eventUtils.TOOLBOX_ITEM_SELECT;
exports.TRASHCAN_OPEN = eventUtils.TRASHCAN_OPEN;
export { eventUtils.UI as UI };
exports.VAR_CREATE = eventUtils.VAR_CREATE;
exports.VAR_DELETE = eventUtils.VAR_DELETE;
exports.VAR_RENAME = eventUtils.VAR_RENAME;
exports.VIEWPORT_CHANGE = eventUtils.VIEWPORT_CHANGE;

// Event utils.
export { eventUtils.clearPendingUndo as clearPendingUndo };
export { eventUtils.disable as disable };
export { eventUtils.enable as enable };
export { eventUtils.filter as filter };
export { eventUtils.fire as fire };
export { eventUtils.fromJson as fromJson };
export { eventUtils.getDescendantIds as getDescendantIds };
export { eventUtils.get as get };
export { eventUtils.getGroup as getGroup };
export { eventUtils.getRecordUndo as getRecordUndo };
export { eventUtils.isEnabled as isEnabled };
export { eventUtils.setGroup as setGroup };
export { eventUtils.setRecordUndo as setRecordUndo };
export { eventUtils.disableOrphans as disableOrphans };

Object.defineProperties(exports, {
  /**
   * Sets whether the next event should be added to the undo stack.
   * @name Blockly.Evenents.recordUndo
   * @type {boolean}
   * @deprecated Use Blockly.Events.getRecordUndo() and
   *     .setRecordUndo().  (September 2021)
   * @suppress {checkTypes}
   */
  recordUndo: {
    get: function() {
      deprecation.warn(
          'Blockly.Events.recordUndo', 'September 2021', 'September 2022',
          'Blockly.Events.getRecordUndo()');
      return eventUtils.getRecordUndo();
    },
    set: function(record) {
      deprecation.warn(
          'Blockly.Events.recordUndo', 'September 2021', 'September 2022',
          'Blockly.Events.setRecordUndo()');
      eventUtils.setRecordUndo(record);
    },
  },
});
