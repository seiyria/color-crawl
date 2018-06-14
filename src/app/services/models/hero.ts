
import { RestrictedNumber } from 'restricted-number';
import { merge } from 'lodash';

export class Hero {

  public name: string;
  public level: number;
  public xp: RestrictedNumber;
  public createdAt: number;

  constructor(opts) {
    merge(this, opts);

    if(!this.createdAt) this.createdAt = Date.now();
  }
}
