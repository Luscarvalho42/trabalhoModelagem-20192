import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AlterarNome2Page } from './alterar-nome2.page';

const routes: Routes = [
  {
    path: '',
    component: AlterarNome2Page
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [AlterarNome2Page]
})
export class AlterarNome2PageModule {}
