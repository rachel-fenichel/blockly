/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @fileoverview Tests for gesture.
 * @author marisaleung@google.com (Marisa Leung)
 */
'use strict';

suite('Gesture', function() {
  function testGestureIsFieldClick(block, isFieldClick, eventsFireStub){
    var field = block.getField('NAME');
    var eventTarget = field.getClickTarget_();
    chai.assert.exists(eventTarget,
        'Precondition: missing click target for field');

    eventsFireStub.resetHistory();
    dispatchPointerEvent(eventTarget, 'pointerdown');

    var fieldWorkspace = field.sourceBlock_.workspace;
    // Gestures triggered on flyouts are stored on targetWorkspace.
    var gestureWorkspace = fieldWorkspace.targetWorkspace || fieldWorkspace;
    var gesture = gestureWorkspace.currentGesture_;
    chai.assert.exists(gesture, 'Gesture exists after pointerdown.');
    var isFieldClickSpy = sinon.spy(gesture, 'isFieldClick_');

    dispatchPointerEvent(eventTarget, 'pointerup');
    dispatchPointerEvent(eventTarget, 'click');

    sinon.assert.called(isFieldClickSpy);
    chai.assert.isTrue(isFieldClickSpy.alwaysReturned(isFieldClick));


    assertEventFired(eventsFireStub, Blockly.Events.Selected,
        {oldElementId: null, newElementId: block.id}, fieldWorkspace.id);
    assertEventNotFired(eventsFireStub, Blockly.Events.Click, {});
  }

  function getTopFlyoutBlock(flyout) {
    return flyout.workspace_.topBlocks_[0];
  }

  setup(function() {
    sharedTestSetup.call(this);
    defineBasicBlockWithField();
    var toolbox = document.getElementById('gesture-test-toolbox');
    this.workspace = Blockly.inject('blocklyDiv', {toolbox: toolbox});
  });

  teardown(function() {
    sharedTestTeardown.call(this);
  });

  test('Constructor', function() {
    var e = { id: 'dummy_test_event'};
    var gesture = new Blockly.Gesture(e, this.workspace);
    chai.assert.equal(gesture.mostRecentEvent_, e);
    chai.assert.equal(gesture.creatorWorkspace_, this.workspace);
  });

  test('Field click - Click in workspace', function() {
    var block = this.workspace.newBlock('test_field_block');
    block.initSvg();
    block.render();

    testGestureIsFieldClick(block, true, this.eventsFireStub);
  });

  test('Field click - Auto close flyout', function() {
    var flyout = this.workspace.flyout_;
    chai.assert.exists(this.workspace.flyout_,
        'Precondition: missing flyout');
    flyout.autoClose = true;

    var block = getTopFlyoutBlock(flyout);
    testGestureIsFieldClick(block, false, this.eventsFireStub);
  });

  test('Field click - Always open flyout', function() {
    var flyout = this.workspace.flyout_;
    chai.assert.exists(this.workspace.flyout_,
        'Precondition: missing flyout');
    flyout.autoClose = false;

    var block = getTopFlyoutBlock(flyout);
    testGestureIsFieldClick(block, true, this.eventsFireStub);
  });
});
