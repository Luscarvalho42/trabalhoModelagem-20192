import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AlterarEmail1Page } from './alterar-email1.page';

const routes: Routes = [
  {
    path: '',
    component: AlterarEmail1Page
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [AlterarEmail1Page]
})
export class AlterarEmail1PageModule {}
