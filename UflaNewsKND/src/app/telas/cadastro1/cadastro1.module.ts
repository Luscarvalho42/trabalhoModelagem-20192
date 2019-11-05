import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { Cadastro1Page } from './cadastro1.page';

const routes: Routes = [
  {
    path: '',
    component: Cadastro1Page
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [Cadastro1Page]
})
export class Cadastro1PageModule {}
