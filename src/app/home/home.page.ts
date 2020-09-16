import { Component } from '@angular/core';
import {Router} from '@angular/router';
import {AlertController} from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(public router: Router, public alrtCtrl: AlertController) {}

  goToContact(){
    this.router.navigateByUrl('/page-contact') ;
  }

  goToMagasin(){
    this.router.navigateByUrl('/magasin') ;
  }

  async showSimpleAlert(){
    const alert = await this.alrtCtrl.create({
      cssClass: 'my-custom-class',
      header: 'Alert',
      subHeader: 'Subtitle',
      message: 'This is an alert message.',
      buttons: ['OK']
    });
    await alert.present();
  }

}
