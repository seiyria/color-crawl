import { Hero } from './hero';
import { Essence } from './essence';
import { Garch } from './garch';
import { Item } from './item';
import { Team } from './team';
import { Statistics } from './statistics';
import { Upgrades } from './upgrades';

export class GameState {

  public currentHero: Hero;
  public allEssences: Essence[];
  public allGarches: Garch[];
  public allTeams: Team[];
  public allItems: Item[];
  public upgrades: Upgrades;

  public currentStatistics: Statistics;
  public historicalStatistics: Statistics;

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

  constructor(opts: any = {}) {
    if(opts.currentHero) this.currentHero = new Hero(opts.currentHero);
    if(opts.allEssences) this.allEssences = opts.allEssences.map(x => new Essence(x));
    if(opts.nextEssenceRecharge) this.nextEssenceRecharge = opts.nextEssenceRecharge;

    if(!this.currentHero) this.currentHero = new Hero({});
    if(!this.allEssences) this.allEssences = [];
    if(!this.allGarches)  this.allGarches = [];
    if(!this.allTeams)    this.allTeams = [];
    if(!this.allItems)    this.allItems = [];
    if(!this.upgrades)    this.upgrades = new Upgrades({});

    if(!this.currentStatistics) this.currentStatistics = new Statistics({});
    if(!this.historicalStatistics) this.historicalStatistics = new Statistics({});
    if(!this.nextEssenceRecharge) this.resetNextEssenceRecharge();
  }

  public resetNextEssenceRecharge() {
    this.nextEssenceRecharge = Date.now() + 1000 * 60 * 60;
  }

}
