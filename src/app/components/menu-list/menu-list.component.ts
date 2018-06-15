
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { GameStateService } from '../../services/game-state.service';

@Component({
    selector: 'app-menu-list',
    templateUrl: './menu-list.component.html',
    styleUrls: ['./menu-list.component.scss']
})
export class MenuListComponent {

  public pages = [
    { title: 'Hero',            subtitle: () => `Level ${this.gameState.ref.currentHero.level}`,
      icon: 'contact',    color: 'danger',    url: '/game/hero' },
    { title: 'Essence Summon',  subtitle: () => `${this.gameState.ref.allEssences.length}/${this.gameState.ref.maxEssences} Essences`,
      icon: 'aperture',   color: 'tertiary',  url: '/game/essence-summon' },
    { title: 'Garches',         subtitle: () => `${this.gameState.ref.allGarches.length}/${this.gameState.ref.maxGarches} Garches`,
      icon: 'person',     color: 'warning',   url: '' },
    { title: 'Items',           subtitle: () => `${this.gameState.ref.allItems.length}/${this.gameState.ref.maxItems} Items`,
      icon: 'color-wand', color: 'success',   url: '' },
    { title: 'Teams',           subtitle: () => `${this.gameState.ref.allTeams.length}/${this.gameState.ref.maxTeams} Teams`,
      icon: 'people',     color: 'primary',   url: '' },
    { title: 'Crawls',          subtitle: () => '4/10 Teams Crawling',
      icon: 'compass',    color: 'medium',    url: '' },
    { title: 'Statistics',      subtitle: () => '',
      icon: 'podium',     color: 'dark',      url: '' }
  ];

  constructor(
    private router: Router,
    public menuCtrl: MenuController,
    private gameState: GameStateService
  ) {}

  async goToPage(page) {
    await this.menuCtrl.close();
    this.router.navigateByUrl(`/${page.url}`);
  }
}
