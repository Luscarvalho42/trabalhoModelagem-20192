import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { Cadastro2Page } from './cadastro2.page';

const routes: Routes = [
  {
    path: '',
    component: Cadastro2Page
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [Cadastro2Page]
})
export class Cadastro2PageModule {}
