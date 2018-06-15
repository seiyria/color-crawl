import { merge } from 'lodash';
import * as uuid from 'uuid/v4';

import { AbilityType } from './types';

export class Item {
  public createdAt: number;
  public uuid: string;
  public seed: string;

  public element: Element;
  public hasSpecialAbility: boolean;
  public primaryAbility: AbilityType;
  public primaryAbilityModifier: number;

  constructor(opts) {
    merge(this, opts);

    if(!this.createdAt) this.createdAt = Date.now();
    if(!this.uuid) this.uuid = uuid();
  }
}
