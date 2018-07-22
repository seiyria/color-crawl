
import { pull } from 'lodash';

import { Hero } from './hero';
import { Essence } from './essence';
import { Garch } from './garch';
import { Item } from './item';
import { Team } from './team';
import { Statistics } from './statistics';
import { Upgrades } from './upgrades';

const ESSENCE_RECHARGE_RATE = 999 * 60 * 60;

export class GameState {

  public currentHero: Hero;
  public allEssences: Essence[];
  public allGarches: Garch[];
  public allTeams: Team[];
  public allItems: Item[];
  public upgrades: Upgrades;

  public currentStatistics: Statistics;
  public historicalStatistics: Statistics;

  public essenceFragments: number;

  public nextEssenceRecharge: number;
  public lastTick: number;
  public lastSave: number;

  public get maxEssences(): number {
    return this.currentHero.tier * 5;
  }

  public get maxGarches(): number {
    return this.currentHero.tier * 5;
  }

  public get maxItems(): number {
    return this.currentHero.tier * 10;
  }

  public get maxTeams(): number {
    return this.currentHero.tier;
  }

  public get canGetNewEssence(): boolean {
    return this.allEssences.length < this.maxEssences;
  }

  public get canSummonGarch(): boolean {
    return this.allGarches.length < this.maxGarches;
  }

  constructor(opts: any = {}) {
    if(opts.currentHero) this.currentHero = new Hero(opts.currentHero);
    if(opts.allEssences) this.allEssences = opts.allEssences.map(x => new Essence(x));
    if(opts.allGarches) this.allGarches = opts.allGarches.map(x => new Garch(x));
    if(opts.allItems) this.allItems = opts.allItems.map(x => new Item(x));
    if(opts.allTeams) this.allTeams = opts.allTeams.map(x => new Team(x));
    if(opts.essenceFragments) this.essenceFragments = opts.essenceFragments;
    if(opts.nextEssenceRecharge) this.nextEssenceRecharge = opts.nextEssenceRecharge;

    if(!this.currentHero) this.currentHero = new Hero({});
    if(!this.allEssences) this.allEssences = [];
    if(!this.allGarches)  this.allGarches = [];
    if(!this.allTeams)    this.allTeams = [];
    if(!this.allItems)    this.allItems = [];
    if(!this.upgrades)    this.upgrades = new Upgrades({});

    if(!this.essenceFragments) this.essenceFragments = 0;

    if(!this.currentStatistics) this.currentStatistics = new Statistics({});
    if(!this.historicalStatistics) this.historicalStatistics = new Statistics({});
    if(!this.nextEssenceRecharge) this.resetNextEssenceRecharge();
  }

  public resetNextEssenceRecharge() {
    if(!this.nextEssenceRecharge) {
      this.nextEssenceRecharge = Date.now() + ESSENCE_RECHARGE_RATE;
    } else {
      this.nextEssenceRecharge = this.nextEssenceRecharge + ESSENCE_RECHARGE_RATE;
    }
  }

  public removeItem(arr: any[], item: any) {
    pull(arr, item);
  }

  public addItem(arr: any[], item: any) {
    arr.push(item);
  }

}
