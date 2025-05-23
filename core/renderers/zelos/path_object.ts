/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

// Former goog.module ID: Blockly.zelos.PathObject

import type {BlockSvg} from '../../block_svg.js';
import type {Connection} from '../../connection.js';
import {FocusManager} from '../../focus_manager.js';
import type {BlockStyle} from '../../theme.js';
import * as dom from '../../utils/dom.js';
import {Svg} from '../../utils/svg.js';
import {PathObject as BasePathObject} from '../common/path_object.js';
import type {ConstantProvider} from './constants.js';

/**
 * An object that handles creating and setting each of the SVG elements
 * used by the renderer.
 */
export class PathObject extends BasePathObject {
  /** The selected path of the block. */
  private svgPathSelected: SVGElement | null = null;

  /** The outline paths on the block. */
  private readonly outlines = new Map<string, SVGElement>();

  /**
   * A set used to determine which outlines were used during a draw pass.  The
   * set is initialized with a reference to all the outlines in
   * `this.outlines`. Every time we use an outline during the draw pass, the
   * reference is removed from this set.
   */
  private remainingOutlines = new Set<string>();

  /**
   * The type of block's output connection shape.  This is set when a block
   * with an output connection is drawn.
   */
  outputShapeType: number | null = null;

  public override constants: ConstantProvider;

  /**
   * @param root The root SVG element.
   * @param style The style object to use for colouring.
   * @param constants The renderer's constants.
   */
  constructor(
    root: SVGElement,
    style: BlockStyle,
    constants: ConstantProvider,
  ) {
    super(root, style, constants);

    this.constants = constants;
  }

  override setPath(pathString: string) {
    super.setPath(pathString);
    if (this.svgPathSelected) {
      this.svgPathSelected.setAttribute('d', pathString);
    }
  }

  override applyColour(block: BlockSvg) {
    super.applyColour(block);
    // Set shadow stroke colour.
    const parent = block.getParent();
    if (block.isShadow() && parent) {
      this.svgPath.setAttribute('stroke', parent.getColourTertiary());
    }

    // Apply colour to outlines.
    for (const outline of this.outlines.values()) {
      outline.setAttribute('fill', this.style.colourTertiary);
    }
  }

  override flipRTL() {
    super.flipRTL();
    // Mirror each input outline path.
    for (const outline of this.outlines.values()) {
      outline.setAttribute('transform', 'scale(-1 1)');
    }
  }

  override updateSelected(enable: boolean) {
    this.setClass_('blocklySelected', enable);
    if (enable) {
      if (!this.svgPathSelected) {
        this.svgPathSelected = this.svgPath.cloneNode(true) as SVGElement;
        this.svgPathSelected.classList.add('blocklyPathSelected');
        // Ensure focus-specific properties don't overlap with the block's path.
        dom.removeClass(
          this.svgPathSelected,
          FocusManager.ACTIVE_FOCUS_NODE_CSS_CLASS_NAME,
        );
        dom.removeClass(
          this.svgPathSelected,
          FocusManager.PASSIVE_FOCUS_NODE_CSS_CLASS_NAME,
        );
        this.svgPathSelected.removeAttribute('tabindex');
        this.svgPathSelected.removeAttribute('id');
        this.svgRoot.appendChild(this.svgPathSelected);
      }
    } else {
      if (this.svgPathSelected) {
        this.svgRoot.removeChild(this.svgPathSelected);
        this.svgPathSelected = null;
      }
    }
  }

  override updateReplacementFade(enable: boolean) {
    this.setClass_('blocklyReplaceable', enable);
  }

  override updateShapeForInputHighlight(conn: Connection, enable: boolean) {
    const name = conn.getParentInput()!.name;
    const outlinePath = this.getOutlinePath(name);
    if (!outlinePath) {
      return;
    }
    if (enable) {
      outlinePath.setAttribute(
        'filter',
        'url(#' + this.constants.replacementGlowFilterId + ')',
      );
    } else {
      outlinePath.removeAttribute('filter');
    }
  }

  /**
   * Method that's called when the drawer is about to draw the block.
   */
  beginDrawing() {
    this.remainingOutlines.clear();
    for (const key of this.outlines.keys()) {
      this.remainingOutlines.add(key);
    }
  }

  /**
   * Method that's called when the drawer is done drawing.
   */
  endDrawing() {
    // Go through all remaining outlines that were not used this draw pass, and
    // remove them.
    if (this.remainingOutlines.size) {
      for (const key of this.remainingOutlines) {
        this.removeOutlinePath(key);
      }
    }
    this.remainingOutlines.clear();
  }

  /**
   * Set the path generated by the renderer for an outline path on the
   * respective outline path SVG element.
   *
   * @param name The input name.
   * @param pathString The path.
   */
  setOutlinePath(name: string, pathString: string) {
    const outline = this.getOutlinePath(name);
    outline.setAttribute('d', pathString);
    outline.setAttribute('fill', this.style.colourTertiary);
  }

  /**
   * Create's an outline path for the specified input.
   *
   * @internal
   * @param name The input name.
   * @returns The SVG outline path.
   */
  getOutlinePath(name: string): SVGElement {
    if (!this.outlines.has(name)) {
      this.outlines.set(
        name,
        dom.createSvgElement(
          Svg.PATH,
          {
            'class': 'blocklyOutlinePath', // IE doesn't like paths without the
            // data definition, set empty
            // default
            'd': '',
          },
          this.svgRoot,
        ),
      );
    }
    this.remainingOutlines.delete(name);
    return this.outlines.get(name)!;
  }

  /**
   * Remove an outline path that is associated with the specified input.
   *
   * @param name The input name.
   */
  private removeOutlinePath(name: string) {
    this.outlines.get(name)?.parentNode?.removeChild(this.outlines.get(name)!);
    this.outlines.delete(name);
  }
}
