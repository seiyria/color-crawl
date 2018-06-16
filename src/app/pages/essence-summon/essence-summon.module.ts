import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';
import { TimeagoModule } from 'ngx-timeago';

import { EssenceSummonInformationPage, EssenceSummonPage } from './essence-summon.page';
import { PipesModule } from '../../pipes/pipes.module';
import { ComponentsModule } from '../../components/components.module';

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
    PipesModule,
    ComponentsModule,
    TimeagoModule.forChild(),
    RouterModule.forChild(routes)
  ],
  entryComponents: [EssenceSummonInformationPage],
  declarations: [EssenceSummonPage, EssenceSummonInformationPage]
})
export class EssenceSummonPageModule {}
