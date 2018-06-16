import { merge } from 'lodash';
import * as uuid from 'uuid/v4';

import { EssenceType } from './types';

export class Essence {
  public createdAt: number;
  public uuid: string;

  public type: EssenceType;
  public rarity: number;

  constructor(opts) {
    merge(this, opts);

    if(!this.createdAt) this.createdAt = Date.now();
    if(!this.uuid) this.uuid = uuid();
    if(!this.rarity) this.rarity = 1;
  }
}
