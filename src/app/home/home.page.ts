import { Component } from '@angular/core';
import {Router} from '@angular/router';
import {AlertController} from '@ionic/angular';
import {UserService} from '../services/user.service';
import {User} from '../modeles/user';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  users: User[] ;

  constructor(public router: Router, public alrtCtrl: AlertController, public userService: UserService) {}

  goToContact(){
    this.router.navigateByUrl('/page-contact') ;
  }

  goToMagasin(){
    this.router.navigateByUrl('/magasin') ;
  }

  getUsers(){
    this.userService.getAll().subscribe((response) => {
      this.users = response ;
      console.log(response) ;
    }) ;
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
