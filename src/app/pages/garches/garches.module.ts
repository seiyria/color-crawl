import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';
import { TimeagoModule } from 'ngx-timeago';

import { PipesModule } from '../../pipes/pipes.module';
import { ComponentsModule } from '../../components/components.module';
import { GarchesPage } from './garches.page';

const routes: Routes = [
  {
    path: '',
    component: GarchesPage
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
  entryComponents: [],
  declarations: [GarchesPage]
})
export class GarchesPageModule {}
