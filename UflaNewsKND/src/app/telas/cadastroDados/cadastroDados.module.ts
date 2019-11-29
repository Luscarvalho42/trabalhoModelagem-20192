import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { CadastroDadosPage } from './cadastroDados.page';

const routes: Routes = [
  {
    path: '',
    component: CadastroDadosPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [CadastroDadosPage]
})
export class CadastroDadosPageModule {}
