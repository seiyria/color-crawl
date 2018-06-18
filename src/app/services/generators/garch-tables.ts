import { LootTable } from 'lootastic';

export const ElementAbilities = {
  Light: [
    { chance: 10, result: 'Radiance' }
  ],
  Dark: [
    { chance: 10, result: 'Darkside' }
  ],
  Fire: [
    { chance: 10, result: 'Fireball' }
  ],
  Water: [
    { chance: 10, result: 'Deluge' }
  ],
  Air: [
    { chance: 10, result: 'AirSpear' }
  ]
};

export const ElementTable = new LootTable([
  { chance: 1,    result: {
    element: 'Light', stats: {  baseStamina: 50,        baseAttack: 0,          baseDefense: 0,
                                baseStaminaPercent: 10, baseAttackPercent: -25, baseDefensePercent: -25 } }
  },
  { chance: 25,   result: {
    element: 'Dark',  stats: {  baseStamina: 0,         baseAttack: 25,         baseDefense: -25,
                                baseStaminaPercent: 0,  baseAttackPercent: 15,  baseDefensePercent: -15 } }
  },
  { chance: 500,  result: {
    element: 'Fire',  stats: {  baseStamina: 50,        baseAttack: 15,         baseDefense: -5,
                                baseStaminaPercent: 0,  baseAttackPercent: 10,  baseDefensePercent: -5 } }
  },
  { chance: 500,  result: {
    element: 'Water', stats: {  baseStamina: 0,         baseAttack: -10,        baseDefense: 15,
                                baseStaminaPercent: 20, baseAttackPercent: -10, baseDefensePercent: 10 } }
  },
  { chance: 500,  result: {
    element: 'Air',   stats: {  baseStamina: 5,         baseAttack: 5,          baseDefense: 5,
                                baseStaminaPercent: 5,  baseAttackPercent: 5,   baseDefensePercent: 5 } }
  }
]);

export const TypeAbilities = {
  Dragon: [
    { chance: 10, result: 'Roar' }
  ]
};

export const TypeTable = new LootTable([
  { chance: 1,    result: {
    type: 'Dragon',   stats: {  baseStamina: 10,        baseAttack: 5,          baseDefense: -5,
                                baseStaminaPercent: 0,  baseAttackPercent: 5,   baseDefensePercent: -5 } }
  }
]);

export const EquipmentRollTable = new LootTable([
  { chance: 1,    result: 3 },
  { chance: 10,   result: 0 },
  { chance: 50,   result: 2 },
  { chance: 100,  result: 1 }
]);

export const GachaTable = new LootTable([
  { chance: 1, maxChance: 10000, result: {
      name: 'Liquis', element: 'Water', type: 'Dragon', tier: 2, seed: 'Liquis', maxEquipment: 3, rarity: 5,
      abilityPoints: 5, innateAbility: 'Deluge',
      stats: {  baseStamina: 100,       baseAttack: 0,          baseDefense: 0,
                baseStaminaPercent: 75, baseAttackPercent: 0,   baseDefensePercent: 0 } }
  },
  { chance: 1, maxChance: 10000, result: {
      name: 'Sylphi', element: 'Air',   type: 'Dragon', tier: 2, seed: 'Sylphi', maxEquipment: 3, rarity: 5,
      abilityPoints: 5, innateAbility: 'AirSpear',
      stats: {  baseStamina: 100,       baseAttack: 0,          baseDefense: 0,
                baseStaminaPercent: 0,  baseAttackPercent: 0,   baseDefensePercent: 50 } }
  },
  { chance: 1, maxChance: 10000, result: {
      name: 'Fahrea', element: 'Fire',  type: 'Dragon', tier: 2, seed: 'Fahrea', maxEquipment: 3, rarity: 5,
      abilityPoints: 5, innateAbility: 'Fireball',
      stats: {  baseStamina: 100,       baseAttack: 0,          baseDefense: 0,
                baseStaminaPercent: 0,  baseAttackPercent: 50,  baseDefensePercent: 0 } }
  },
  { chance: 1, maxChance: 10000, result: {
      name: 'Umbra',  element: 'Dark',  type: 'Dragon', tier: 2, seed: 'Umbra',  maxEquipment: 3, rarity: 5,
      abilityPoints: 5, innateAbility: 'Darkside',
      stats: {  baseStamina: 100,       baseAttack: 50,         baseDefense: -15,
                baseStaminaPercent: 0,  baseAttackPercent: 50,  baseDefensePercent: -5 } }
  },
  { chance: 1, maxChance: 10000, result: {
      name: 'Lumina', element: 'Light', type: 'Dragon', tier: 2, seed: 'Lumina', maxEquipment: 3, rarity: 5,
      abilityPoints: 5, innateAbility: 'Radiance',
      stats: {  baseStamina: 110,       baseAttack: 10,          baseDefense: 10,
                baseStaminaPercent: 10, baseAttackPercent: 10,   baseDefensePercent: 10 } }
  }
]);
