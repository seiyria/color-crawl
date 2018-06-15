import { merge } from 'lodash';

import { EssenceType } from './types';

export class Essence {
  public type: EssenceType;

  constructor(opts) {
    merge(this, opts);
  }
}
