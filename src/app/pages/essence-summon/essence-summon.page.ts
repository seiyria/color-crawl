import { Component, OnInit } from '@angular/core';

import { GameStateService } from '../../services/game-state.service';
import { NavParams, PopoverController } from '@ionic/angular';
import { Essence } from '../../services/models/essence';

@Component({
  selector: 'app-essence-summon',
  templateUrl: './essence-summon.page.html',
  styleUrls: ['./essence-summon.page.scss'],
})
export class EssenceSummonPage {

  constructor(private gameState: GameStateService, private popoverCtrl: PopoverController) { }

  public async showInformation($event, essence) {
    const popover = await this.popoverCtrl.create({
      component: EssenceSummonInformationPage,
      componentProps: { essence },
      ev: $event
    });

    await popover.present();
  }

}

@Component({
  template: `    
    <ion-list>
      <ion-list-header>
        <app-rarity [rarity]="essence.rarity" margin-right></app-rarity> {{ essence.type }} Essence
      </ion-list-header>
      <ion-list-header>
        <em>No Special Attributes</em>
      </ion-list-header>

      <ion-button ion-item fill="solid" expand="block">Summon Garch</ion-button>
    </ion-list>
  `,
  styles: [`
    ion-list {
      margin-bottom: 0;
    }
    
    ion-list-header {
      margin-bottom: 0;
      justify-content: start;
    }
  `]
})
export class EssenceSummonInformationPage implements OnInit {

  private essence: Essence;

  constructor(private navParams: NavParams, private popoverCtrl: PopoverController) {}

  ngOnInit() {
    this.essence = this.navParams.get('essence');
  }
}
