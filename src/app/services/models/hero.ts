
import { RestrictedNumber } from 'restricted-number';
import { merge } from 'lodash';
import * as uuid from 'uuid/v4';

export class Hero {
  public createdAt: number;
  public uuid: string;
  public seed: string;

  public name: string;
  public job: string;
  public tier: number;
  public level: number;
  public xp: RestrictedNumber;

  constructor(opts) {
    merge(this, opts);

    if(!this.createdAt) this.createdAt = Date.now();
    if(!this.uuid) this.uuid = uuid();

    if(!this.tier) this.tier = 1;
    if(!this.level) this.level = 1;
    if(!this.job) this.job = 'Novice';

    if(!this.xp) {
      this.xp = new RestrictedNumber(0, 100, 0);
    } else {
      this.xp = new RestrictedNumber(this.xp.minimum, this.xp.maximum, this.xp.__current);
    }

  }
}
