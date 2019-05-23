import { Injectable } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { AuthenticationService } from './../service/authentication.service';

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  constructor(
    public alertController: AlertController,
    private router: Router,
    private authService: AuthenticationService,
    ) { }

    //contoh
  async presentAlert(header,msg) {
    const alert = await this.alertController.create({
      header: header,
      message: msg,
      buttons: ['OK']
    });

    await alert.present();
  }

  async presentAlertMultipleButtons(header,msg,url) {
    const alert = await this.alertController.create({
      header: header,
      message: msg,
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
          }
        }, {
          text: 'Ok',
          handler: () => {
            this.router.navigateByUrl['about']
          }
        }
      ]
    });

    await alert.present();
  }
  // implementasi
  async presentAlertLogout() {
    const alert = await this.alertController.create({
      header: 'Perhatian!',
      message: 'Anda benar ingin Keluar ?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
          }
        }, {
          text: 'Ok',
          handler: () => {
            this.authService.logout();
          }
        }
      ]
    });

    await alert.present();
  }

}
