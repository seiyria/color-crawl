import { Component, Input, OnDestroy, OnInit, ViewChild } from '@angular/core';

import { Sprite, SpriteCanvasHelper } from 'mixel';
import { merge } from 'lodash';

import * as SpriteOptions from './sprite-options';
import * as MaskTypes from './sprite-masks';

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
  public scale = 1;

  private canvas: HTMLCanvasElement;

  ngOnInit() {
    const mask = MaskTypes[this.mask];

    const sprite = new Sprite(mask, merge({}, SpriteOptions[this.mask], {
      colored: true,
      seed: this.seed
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
