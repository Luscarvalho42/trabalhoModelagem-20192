import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})

export class ToastService {

  constructor(public toastController: ToastController) { }

  async mensagem(msg: string) {
    const toast = await this.toastController.create({
      message: msg,
      duration: 4000,
      color: 'light',
      showCloseButton: true,
      closeButtonText: 'X'
    });
    toast.present();
  }

}