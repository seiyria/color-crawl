import { merge } from 'lodash';
import { species } from 'fantastical';
import * as uuid from 'uuid/v4';

import { Item } from './item';
import { AbilityType, GarchType, Element, Ability } from './types';
import { RestrictedNumber } from 'restricted-number';
import { DefaultStats, Stats } from './stats';
import { Salvageable } from './salvageable';

export class Garch implements Salvageable {
  public createdAt: number;
  public uuid: string;
  public seed: string;

  public name: string;
  public level: number;
  public maxLevel: number;
  public tier: number;
  public xp: RestrictedNumber;
  public rarity: number;

  public element: Element;
  public type: GarchType;
  public equipment: Item[];
  public maxEquipment: number;

  public stats: Stats;

  public innateAbility: Ability;
  public abilityPoints: number;
  public abilityConfiguration: AbilityType[];

  public get fragmentValue(): number {
    return this.rarity * this.tier * 7;
  }

  constructor(opts) {
    merge(this, opts);
    if(opts.stats) this.stats = new Stats(opts.stats);

    if(!this.type) this.type = 'Dragon';
    if(!this.name) this.name = species.dragon();
    if(!this.createdAt) this.createdAt = Date.now();
    if(!this.uuid) this.uuid = uuid();
    if(!this.level) this.level = 1;
    if(!this.maxLevel) this.maxLevel = 50;
    if(!this.tier) this.tier = 1;
    if(!this.rarity) this.rarity = 1;
    if(!this.abilityPoints) this.abilityPoints = 1;

    if(!this.maxEquipment) this.maxEquipment = 1;
    if(!this.equipment) this.equipment = [];
    if(!this.abilityConfiguration) this.abilityConfiguration = [];

    if(!this.stats) this.stats = new DefaultStats();

    if(!this.xp) {
      this.xp = new RestrictedNumber(0, 100, 0);
    } else {
      this.xp = new RestrictedNumber(this.xp.minimum, this.xp.maximum, this.xp.__current);
    }
  }
}
