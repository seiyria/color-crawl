import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { MenuPage } from './menu.page';
import { MenuListComponent } from '../../components/menu-list/menu-list.component';

const routes: Routes = [
  {
    path: '',
    component: MenuPage,
    children: [
      { path: '', redirectTo: 'hero', pathMatch: 'full' },
      { path: 'hero', loadChildren: '../hero/hero.module#HeroPageModule' },
      { path: 'essence-summon', loadChildren: '../essence-summon/essence-summon.module#EssenceSummonPageModule' }
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    MenuPage,
    MenuListComponent
  ]
})
export class MenuPageModule {}
