import { Component } from '@angular/core';

import { GameStateService } from '../../services/game-state.service';
import { AlertController, ModalController, NavParams, PopoverController } from '@ionic/angular';
import { Garch } from '../../services/models/garch';
import { GarchModalComponent } from '../../components/garch-modal/garch-modal.component';

@Component({
  selector: 'app-garches',
  templateUrl: './garches.page.html',
  styleUrls: ['./garches.page.scss'],
})
export class GarchesPage {

  constructor(
    private gameState: GameStateService,
    private popoverCtrl: PopoverController,
    private modalCtrl: ModalController
  ) { }

  async showInformation(garch: Garch) {
    const modal = await this.modalCtrl.create({
      component: GarchModalComponent,
      componentProps: { garch, notNew: true }
    });

    await modal.present();
  }

}
