import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { EssenceSummonPage } from './essence-summon.page';

const routes: Routes = [
  {
    path: '',
    component: EssenceSummonPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [EssenceSummonPage]
})
export class EssenceSummonPageModule {}
