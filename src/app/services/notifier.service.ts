import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class NotifierService {
  constructor(private toastCtrl: ToastController) {}

  public async notify(message: string) {
    const toast = await this.toastCtrl.create({
      showCloseButton: true,
      message,
      duration: 3000
    });

    return toast.present();
  }
}
