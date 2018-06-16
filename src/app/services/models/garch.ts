import { merge } from 'lodash';
import { species } from 'fantastical';
import * as uuid from 'uuid/v4';

import { Item } from './item';
import { AbilityType, GarchType } from './types';
import { RestrictedNumber } from 'restricted-number';

export class Garch {
  public createdAt: number;
  public uuid: string;
  public string: number;

  public name: string;
  public level: number;
  public tier: number;
  public xp: RestrictedNumber;
  public rarity: number;

  public element: Element;
  public type: GarchType;
  public equipment: Item[];
  public maxEquipment: number;

  public baseStamina: number;
  public baseAttack: number;
  public baseDefense: number;

  public baseStaminaPercent: number;
  public baseAttackPercent: number;
  public baseDefensePercent: number;

  public abilityConfiguration: AbilityType[];

  constructor(opts) {
    merge(this, opts);

    if(!this.name) this.name = species.dragon();
    if(!this.createdAt) this.createdAt = Date.now();
    if(!this.uuid) this.uuid = uuid();
    if(!this.level) this.level = 1;
    if(!this.tier) this.tier = 1;
    if(!this.rarity) this.rarity = 1;

    if(!this.baseStamina) this.baseStamina = 100;
    if(!this.baseAttack) this.baseAttack = 10;
    if(!this.baseDefense) this.baseDefense = 10;
    if(!this.baseStaminaPercent) this.baseStaminaPercent = 100;
    if(!this.baseAttackPercent) this.baseAttackPercent = 100;
    if(!this.baseDefensePercent) this.baseDefensePercent = 100;

    if(!this.xp) {
      this.xp = new RestrictedNumber(0, 100, 0);
    } else {
      this.xp = new RestrictedNumber(this.xp.minimum, this.xp.maximum, this.xp.__current);
    }
  }
}
