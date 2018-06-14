
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';

@Component({
    selector: 'app-menu-list',
    templateUrl: './menu-list.component.html',
    styleUrls: ['./menu-list.component.scss']
})
export class MenuListComponent {

  public pages = [
    { title: 'Hero',            subtitle: 'Level 3',              icon: 'contact',    url: '/game/hero' },
    { title: 'Essence Summon',  subtitle: '5 Essences Left',      icon: 'aperture',   url: '/game/essence-summon' },
    { title: 'Garches',         subtitle: '60/100 Garches',       icon: 'person',     url: '' },
    { title: 'Items',           subtitle: '20/100 Items',         icon: 'color-wand', url: '' },
    { title: 'Teams',           subtitle: '10/10 Teams Made',     icon: 'people',     url: '' },
    { title: 'Crawls',          subtitle: '4/10 Teams Crawling',  icon: 'compass',    url: '' },
    { title: 'Statistics',      subtitle: '',                     icon: 'podium',     url: '' }
  ];

  constructor(
    private router: Router,
    public menuCtrl: MenuController
  ) {}

  async goToPage(page) {
    await this.menuCtrl.close();
    this.router.navigateByUrl(`/${page.url}`);
  }
}
