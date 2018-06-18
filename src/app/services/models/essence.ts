import { merge } from 'lodash';
import * as uuid from 'uuid/v4';

import { EssenceType } from './types';
import { Stats } from './stats';
import { Salvageable } from './salvageable';

export class Essence implements Salvageable {
  public createdAt: number;
  public uuid: string;

  public type: EssenceType;
  public rarity: number;
  public stats: Stats;

  public get fragmentValue(): number {
    switch(this.type) {
      case 'Basic': return 10;
    }

    return 1;
  }

  constructor(opts) {
    merge(this, opts);
    if(opts.stats) this.stats = new Stats(opts.stats);

    if(!this.createdAt) this.createdAt = Date.now();
    if(!this.uuid) this.uuid = uuid();
    if(!this.rarity) this.rarity = 1;
    if(!this.type) this.type = 'Basic';

    if(!this.stats) this.stats = new Stats({});
  }
}
