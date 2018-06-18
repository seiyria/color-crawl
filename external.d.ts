declare module 'lootastic' {
  export class LootTable {
    constructor(choices: any[], bonus?: number);

    chooseWithReplacement(num: number): any;
    chooseWithoutReplacement(num: number): any;
    tryToDropEachItem(num: number): any;
  }

  export class LootRoller {
    static rollTables(tables: LootTable[]): any[];
  }

  export enum LootFunctions {
    WithReplacement = 'chooseWithReplacement',
    WithoutReplacement = 'chooseWithoutReplacement',
    EachItem = 'tryToDropEachItem'
  }
}

declare module 'roman-numerals' {
  export function toRoman(num: number): string;
}

declare module 'fantastical' {
  export const species: { [key: string]: Function };
}

declare module 'game-loop' {

}
