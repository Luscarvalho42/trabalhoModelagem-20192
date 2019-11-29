import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { CadastroMensagemPage } from './cadastroMensagem.page';

const routes: Routes = [
  {
    path: '',
    component: CadastroMensagemPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [CadastroMensagemPage]
})
export class CadastroMensagemPageModule {}
