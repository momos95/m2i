import { Component, OnInit } from '@angular/core';
import {Article} from '../modeles/article';
import {MagasinService} from '../services/magasin.service';
import {AlertController} from '@ionic/angular';
import {Router} from '@angular/router';

@Component({
  selector: 'app-add-article',
  templateUrl: './add-article.page.html',
  styleUrls: ['./add-article.page.scss'],
})
export class AddArticlePage implements OnInit {

  article: Article ;

  constructor(public service: MagasinService, public alertController: AlertController, public route: Router) {
    this.article = new Article(0, '', '',  false) ; // pas obligatoire
  }

  // Fonction qui contrôle le choix de EnStock Vs HorsStock
  setStock(event){
    this.article.enStock = event.detail.value === 'oui' ;
  }

  ajouterNouvelArticle(){
    this.service.addArticle(this.article) ;
    this.showSimpleAlert() ; // afficher une alerte pour informer l'uutilisateur
    this.route.navigateByUrl('/magasin') ; // juste pour changer de page.
  }
  ngOnInit() {
  }
  async showSimpleAlert() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Article',
      subHeader: 'Nouvel Article',
      message: 'Nouvel article ajouté à la base de données.',
      buttons: ['OK']
    });
    await alert.present();
  }
}
