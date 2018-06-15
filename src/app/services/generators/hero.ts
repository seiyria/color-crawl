import { Hero } from '../models/hero';
import { species } from 'fantastical';
import { sample } from 'lodash';

const POSSIBLE_JOBS = {
  1:  ['Novice', 'Apprentice', 'Beginner', 'Acolyte', 'Singer', 'Crier'],
  2:  ['Trainee', 'Drunkard', 'Tinkerer', 'Caster'],
  3:  ['Trained', 'Stealthy', 'Creator', 'Mage'],
  4:  ['Intermediate', 'Shadow', 'Destroyer', 'Wizard'],
  7:  ['Expert', 'Thief', 'Bringer', 'Sage'],
  15: ['Master', 'Dark Knight', 'Exalted', 'Pristine']
};

export class HeroGenerator {

  static generate(opts: any = { tier: 1 }): Hero {
    const tier = opts.tier || 1;
    const name = species.human({ allowMultipleNames: true });

    let nameTier = tier;
    while(!POSSIBLE_JOBS[nameTier]) nameTier--;
    const job = sample(POSSIBLE_JOBS[nameTier]);

    const seed = `${job}-${Date.now()}`;
    const heroOpts = { name, job, tier, seed };

    return new Hero(heroOpts);
  }

}
