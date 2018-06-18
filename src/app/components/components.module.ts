import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { SpriteComponent } from './sprite/sprite.component';
import { RarityComponent } from './rarity/rarity.component';
import { GarchModalComponent } from './garch-modal/garch-modal.component';
import { PipesModule } from '../pipes/pipes.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    PipesModule,
    IonicModule.forRoot(),
  ],
  declarations: [SpriteComponent, RarityComponent, GarchModalComponent],
  exports: [SpriteComponent, RarityComponent, GarchModalComponent],
  entryComponents: [GarchModalComponent],
})
export class ComponentsModule {}
