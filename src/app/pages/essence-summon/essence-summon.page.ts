import { Component } from '@angular/core';

import { GameStateService } from '../../services/game-state.service';

@Component({
  selector: 'app-essence-summon',
  templateUrl: './essence-summon.page.html',
  styleUrls: ['./essence-summon.page.scss'],
})
export class EssenceSummonPage {

  constructor(private gameState: GameStateService) { }

}
