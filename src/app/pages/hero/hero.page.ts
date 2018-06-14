import { Component } from '@angular/core';
import { GameStateService } from '../../services/game-state.service';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.page.html',
  styleUrls: ['./hero.page.scss'],
})
export class HeroPage {

  constructor(private gameState: GameStateService) { }

}
