import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AlterarEmail2Page } from './alterar-email2.page';

const routes: Routes = [
  {
    path: '',
    component: AlterarEmail2Page
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [AlterarEmail2Page]
})
export class AlterarEmail2PageModule {}
