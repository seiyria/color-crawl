
import { merge, sample } from 'lodash';
import { parties } from 'fantastical';

import { Garch } from './garch';

export class Team {
  public name: string;

  public garches: Garch[];

  constructor(opts) {
    merge(this, opts);

    if(!this.name) this.name = parties[sample(['mysticOrder', 'militaryUnit'])]();
  }
}
