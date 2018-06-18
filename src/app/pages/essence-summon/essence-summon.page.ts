import { Component, OnInit } from '@angular/core';

import { GameStateService } from '../../services/game-state.service';
import { AlertController, ModalController, NavParams, PopoverController } from '@ionic/angular';
import { Essence } from '../../services/models/essence';
import { GarchModalComponent } from '../../components/garch-modal/garch-modal.component';

@Component({
  selector: 'app-essence-summon',
  templateUrl: './essence-summon.page.html',
  styleUrls: ['./essence-summon.page.scss'],
})
export class EssenceSummonPage {

  constructor(
    private gameState: GameStateService,
    private popoverCtrl: PopoverController,
    private modalCtrl: ModalController
  ) { }

  public async showInformation($event, essence) {
    const popover = await this.popoverCtrl.create({
      component: EssenceSummonInformationPopover,
      componentProps: { essence },
      ev: $event
    });

    await popover.present();

    const res = await popover.onDidDismiss();

    if(res && res.data) {
      const newGarch = res.data;

      const modal = await this.modalCtrl.create({
        component: GarchModalComponent,
        componentProps: { garch: newGarch }
      });

      await modal.present();
    }

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

      <ion-button ion-item fill="solid" expand="block" (click)="summon()" 
                  *ngIf="gameState.ref.canSummonGarch">Summon Garch</ion-button>
      <ion-button ion-item fill="solid" expand="block" color="danger" (click)="salvage()">Salvage Essence</ion-button>
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
export class EssenceSummonInformationPopover implements OnInit {

  private essence: Essence;

  constructor(
    private gameState: GameStateService,
    private navParams: NavParams,
    private alertCtrl: AlertController,
    private popoverCtrl: PopoverController
  ) {}

  ngOnInit() {
    this.essence = this.navParams.get('essence');
  }

  async summon() {
    const alert = await this.alertCtrl.create({
      header: 'Summon Garch',
      subHeader: `Are you sure you want to use this ${this.essence.type} Essence to summon a new Garch?`,
      buttons: [
        'No, Save It',
        { text: 'Yes, Use It',
          handler: () => {
            const newGarch = this.gameState.rollGarchForEssence(this.essence);
            this.popoverCtrl.dismiss(newGarch);
          }
        }
      ]
    });

    return alert.present();
  }

  async salvage() {
    const alert = await this.alertCtrl.create({
      header: 'Salvage Essence',
      subHeader: `Are you sure you want to salvage this essence? You will not be able to use it to summon a Garch.`,
      buttons: [
        'No, Save It',
        { text: 'Yes, Salvage It',
          handler: () => {
            this.gameState.salvageEssence(this.essence);
            this.popoverCtrl.dismiss();
          }
        }
      ]
    });

    return alert.present();
  }
}
