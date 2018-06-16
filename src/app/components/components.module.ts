import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { SpriteComponent } from './sprite/sprite.component';
import { RarityComponent } from './rarity/rarity.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule.forRoot(),
  ],
  declarations: [SpriteComponent, RarityComponent],
  exports: [SpriteComponent, RarityComponent],
  entryComponents: [],
})
export class ComponentsModule {}
