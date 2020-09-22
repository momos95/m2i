import { Component, OnInit } from '@angular/core';
import {User} from '../modeles/user';
import {UserService} from '../services/user.service';
import {LoadingController} from '@ionic/angular';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.page.html',
  styleUrls: ['./add-user.page.scss'],
})
export class AddUserPage implements OnInit {

  user: User ;
  loading: any ;

  constructor(private userServ: UserService, public loadingController: LoadingController) {
   this.user = new User() ;
   this.prepareLoader() ;
  }

  async prepareLoader(){
    this.loading = await this.loadingController.create({
      cssClass: 'my-custom-class',
      message: 'Création en cours'
    });
  }

  ngOnInit() {
  }
  addNewUser(){
    this.userServ.create(this.user).subscribe((response) => {
      console.log('Nouvel utilisateur créé') ;
      this.loading.dismiss() ;
    }) ;
    this.loading.present() ;
  }

}
