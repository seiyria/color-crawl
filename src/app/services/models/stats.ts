
import { merge } from 'lodash';

export class Stats {

  public baseStamina: number;
  public baseAttack: number;
  public baseDefense: number;

  public baseStaminaPercent: number;
  public baseAttackPercent: number;
  public baseDefensePercent: number;

  constructor(opts) {
    merge(this, opts);

    if(!this.baseStamina) this.baseStamina = 0;
    if(!this.baseAttack) this.baseAttack = 0;
    if(!this.baseDefense) this.baseDefense = 0;
    if(!this.baseStaminaPercent) this.baseStaminaPercent = 0;
    if(!this.baseAttackPercent) this.baseAttackPercent = 0;
    if(!this.baseDefensePercent) this.baseDefensePercent = 0;
  }
}

export class DefaultStats extends Stats {
  constructor() {
    super({
      baseStamina: 100,
      baseAttack: 10,
      baseDefense: 10,
      baseStaminaPercent: 100,
      baseAttackPercent: 100,
      baseDefensePercent: 100
    });
  }
}
