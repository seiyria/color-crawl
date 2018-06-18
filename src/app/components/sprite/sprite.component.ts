import { Component, Input, OnDestroy, OnInit, ViewChild } from '@angular/core';

import { Sprite, SpriteCanvasHelper } from 'mixel';
import { merge } from 'lodash';

import * as SpriteOptions from './sprite-options';
import * as MaskTypes from './sprite-masks';
import { Element } from '../../services/models/types';

type MaskType = 'Person';

@Component({
  selector: 'app-sprite',
  templateUrl: './sprite.component.html',
  styleUrls: ['./sprite.component.scss']
})
export class SpriteComponent implements OnInit, OnDestroy {

  @ViewChild('container')
  public container;

  @Input()
  public mask: MaskType;

  @Input()
  public seed: string;

  @Input()
  public element: Element;

  @Input()
  public scale = 1;

  private canvas: HTMLCanvasElement;

  private getTint() {
    switch(this.element) {
      case 'Air':   return { r: 0.8,  g: 1,   b: 0.8, a: 1 };
      case 'Fire':  return { r: 1,    g: 0.8, b: 0.8, a: 1 };
      case 'Water': return { r: 0.8,  g: 1,   b: 0.8, a: 1 };
      case 'Dark':  return { r: 0.3,  g: 0.3, b: 0.3, a: 1 };
      case 'Light': return { r: 0.8,  g: 0.8, b: 0.8, a: 1 };
      default:      return { r: 1,    g: 1,   b: 1,   a: 1 };
    }
  }

  ngOnInit() {
    const mask = MaskTypes[this.mask];

    const sprite = new Sprite(mask, merge({}, SpriteOptions[this.mask], {
      colored: true,
      seed: this.seed,
      tint: this.getTint()
    }));

    const canvas = SpriteCanvasHelper.createCanvas(sprite);
    const scaledCanvas = SpriteCanvasHelper.resizeCanvas(canvas, this.scale);

    this.canvas = scaledCanvas;

    this.container.nativeElement.appendChild(this.canvas);
  }

  ngOnDestroy() {
    this.canvas.remove();
  }

}
