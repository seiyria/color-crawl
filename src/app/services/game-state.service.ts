import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

import GameLoop from 'game-loop';

import { GameState } from './models/game-state';
import { HeroGenerator } from './generators/hero';
import { Essence } from './models/essence';

@Injectable({
  providedIn: 'root'
})
export class GameStateService {

  private gameState: GameState;

  public get ref(): GameState {
    return this.gameState;
  }

  constructor(private storage: Storage) {
    this.gameState = new GameState();

    this.init();
  }

  public async init() {
    const saveFile = await this.load();

    if(!saveFile) {
      this.create();
    }

    const loop = new GameLoop();

    loop.use(() => {
      this.tryRechargeEssence();
    });

    loop.use(() => {
      this.tick(Date.now());
    });

    loop.play();

  }

  private create() {
    this.gameState = new GameState();
    this.gameState.currentHero = HeroGenerator.generate();
    this.gameState.allEssences = Array(5).fill(null).map(x => new Essence({ type: 'Basic' }));
    this.save();
  }

  private async save() {
    this.gameState.lastSave = Date.now();
    return this.storage.set('gamestate', this.gameState);
  }

  private async load() {
    const saveFile = await this.storage.get('gamestate');
    if(saveFile) {
      this.gameState = new GameState(saveFile);
    }

    return saveFile;
  }

  private tryRechargeEssence() {
    if(Date.now() < this.gameState.nextEssenceRecharge || !this.gameState.canGetNewEssence) return;

    this.gameState.allEssences.push(new Essence({ type: 'Basic' }));
    this.gameState.resetNextEssenceRecharge();
  }

  private tick(d) {
  }
}
