import { Garch } from '../models/garch';
import { species } from 'fantastical';
import { DefaultStats } from '../models/stats';
import { ElementTable, EquipmentRollTable, TypeTable, GachaTable, ElementAbilities, TypeAbilities } from './garch-tables';

import { random, cloneDeep } from 'lodash';
import { LootTable } from 'lootastic';
import { Ability } from '../models/types';

export class GarchGenerator {

  private static determineRarityFor(garch: Garch): number {
    let baseRarity = garch.rarity;
    if(garch.element === 'Dark' || garch.element === 'Light') baseRarity += 1;
    if(garch.innateAbility) baseRarity += 1;

    return Math.min(4, baseRarity);
  }

  private static finalizeGarch(garch: Garch): Garch {
    garch.seed = `${garch.type}-${garch.element}-${garch.uuid}`;

    return garch;
  }

  private static attemptToRollAbilityFor(garch: Garch): Ability {
    if(garch.innateAbility) return garch.innateAbility;

    const baseAbilities = [
      { chance: 100, result: 'SuperDefend' },
      { chance: 100, result: 'KnightlyDefense' },
      { chance: 100, result: 'SpreadSlice' }
    ];

    baseAbilities.push(...ElementAbilities[garch.element]);
    baseAbilities.push(...TypeAbilities[garch.type]);

    const table = new LootTable(baseAbilities);
    const res = table.tryToDropEachItem(1000);
    if(res[0]) return res[0];

    return null;
  }

  static generate(opts: any = { essence: null, tier: 1 }): Garch {

    const stats = new DefaultStats();
    const mergeStatsOntoStats = (newStats) => Object.keys(newStats).forEach(key => stats[key] += newStats[key]);

    const gacha = GachaTable.tryToDropEachItem(0);
    if(gacha[0]) {
      const gachaRef = cloneDeep(gacha[0]);
      mergeStatsOntoStats(gachaRef.stats);

      gachaRef.stats = stats;

      const gachaGarch = new Garch(gachaRef);

      return GarchGenerator.finalizeGarch(gachaGarch);
    }

    const essence = opts.essence || null;
    const tier = opts.tier || 1;

    const typeResult = TypeTable.chooseWithReplacement(1)[0];
    const elementResult = ElementTable.chooseWithReplacement(1)[0];
    const maxEquipment = EquipmentRollTable.chooseWithReplacement(1)[0];

    const name = species[typeResult.type.toLowerCase()]();

    if(essence) {
      mergeStatsOntoStats(essence.stats);
    }

    mergeStatsOntoStats(elementResult.stats);
    mergeStatsOntoStats(typeResult.stats);

    const garchOpts = {
      name,
      element: elementResult.element,
      tier,
      type: typeResult.type,
      maxEquipment,
      stats
    };

    const garch = new Garch(garchOpts);

    garch.innateAbility = GarchGenerator.attemptToRollAbilityFor(garch);
    garch.abilityPoints = random(1, 3);
    garch.rarity = GarchGenerator.determineRarityFor(garch);

    return GarchGenerator.finalizeGarch(garch);
  }

}
