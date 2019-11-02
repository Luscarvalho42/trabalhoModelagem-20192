import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AlterarSenha2Page } from './alterar-senha2.page';

const routes: Routes = [
  {
    path: '',
    component: AlterarSenha2Page
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [AlterarSenha2Page]
})
export class AlterarSenha2PageModule {}
