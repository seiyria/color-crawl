import { GameStateService } from '../../services/game-state.service';
import { AlertController, ModalController, NavParams } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { Garch } from '../../services/models/garch';

@Component({
  template: `    
    <ion-header>
      <ion-toolbar color="dark">
        <ion-title>{{ title }}</ion-title>
        
        <ion-buttons slot="end">
          <ion-button (click)="dismiss()">
            <ion-icon name="close" slot="start"></ion-icon> Close
          </ion-button>
        </ion-buttons>
      </ion-toolbar>
    </ion-header>
    
    <ion-content padding>
      <app-sprite [mask]="garch.type" [seed]="garch.seed" scale="4" [element]="garch.element" *ngIf="garch.seed"></app-sprite>
      
      <h3 text-center>
        <app-rarity [rarity]="garch.rarity" margin-right></app-rarity> {{ garch.name }} {{ garch.tier | roman }}
      </h3>
      <h6 text-center>
        <em>{{ garch.element }} {{ garch.type }}</em>
      </h6>
      
      <ion-list>
        <ion-item>
          <ion-icon slot="start" name="flash"></ion-icon>
          ATK: {{ garch.stats.baseAttack }} / {{ garch.stats.baseAttackPercent }}%
        </ion-item>
        <ion-item>
          <ion-icon slot="start" name="cog"></ion-icon>
          DEF: {{ garch.stats.baseDefense }} / {{ garch.stats.baseDefensePercent }}%
        </ion-item>
        <ion-item>
          <ion-icon slot="start" name="heart"></ion-icon>
          STM: {{ garch.stats.baseStamina }} / {{ garch.stats.baseStaminaPercent }}%
        </ion-item>
        <ion-item>
          <ion-icon slot="start" name="ribbon"></ion-icon>
          Ability Points: {{ garch.abilityPoints }}
        </ion-item>
        <ion-item>
          <ion-icon slot="start" name="pulse"></ion-icon>
          Innate Ability: {{ garch.innateAbility || 'none' }}
        </ion-item>
        <ion-item>
          <ion-icon slot="start" name="shirt"></ion-icon>
          Equipment Slots: {{ garch.maxEquipment }}
        </ion-item>
      </ion-list>
      
    </ion-content>

    <ion-footer>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-button (click)="salvage()" color="danger">
            <ion-icon slot="start" name="aperture"></ion-icon>
            Salvage For Fragments
          </ion-button>
        </ion-buttons>
      </ion-toolbar>
    </ion-footer>
  `,
  styles: [`    
    app-sprite {
      position: absolute;
      top: 40px;
      left: 20px;
      z-index: 10;
    }

  `]
})
export class GarchModalComponent implements OnInit {

  public garch: Garch;
  private notNew: boolean;

  public get title(): string {
    if(!this.notNew) return 'New Garch!';

    return 'Examine Garch';
  }

  constructor(
    private gameState: GameStateService,
    private navParams: NavParams,
    private alertCtrl: AlertController,
    private modalCtrl: ModalController
  ) {}

  ngOnInit() {
    this.garch = this.navParams.get('garch');
    this.notNew = this.navParams.get('notNew');
  }

  async salvage() {
    const alert = await this.alertCtrl.create({
      header: 'Salvage Garch',
      subHeader: `Are you sure you want to salvage this garch? Your Garch will be immediately lost.`,
      buttons: [
        'No, Save It',
        { text: 'Yes, Salvage It',
          handler: () => {
            this.gameState.salvageGarch(this.garch);
            this.dismiss();
          }
        }
      ]
    });

    return alert.present();
  }

  dismiss() {
    this.modalCtrl.dismiss();
  }
}
