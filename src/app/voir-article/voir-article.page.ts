import { Component, OnInit } from '@angular/core';
import {Article} from '../modeles/article';
import {ActivatedRoute, Route, Router} from '@angular/router';
import {MagasinService} from '../services/magasin.service';
import {AlertController} from '@ionic/angular';

@Component({
  selector: 'app-voir-article',
  templateUrl: './voir-article.page.html',
  styleUrls: ['./voir-article.page.scss'],
})
export class VoirArticlePage implements OnInit {

  article: Article ;

  constructor(public acRouter: ActivatedRoute,
              public service: MagasinService,
              public alertController: AlertController,
              public router: Router) {
    this.article = new Article(0, '', '', false) ;
    this.service.selectOne(this.acRouter.snapshot.params.ref).then((data) => {
          this.article.setId(data.id) ;
          this.article.setNom(data.nom) ;
          this.article.setReference(data.reference) ;
          this.article.setEnStock(data.enStock) ;
    });
  }

  ngOnInit() {
  }

  /*
  modifierArticle: Pour la modification d'un article.
  Le formulaire est montrée avec juste le nom, l'id et la variable enStock modifiables et pas la référence.
  Pour modifier l'article en base, on fait appel au Service (update).
   */
  modifierArticle(){
    this.service.updateArticle(this.article) ;
    this.showSimpleAlert('Article', 'Modification d\'un article', 'Vos modifications ont été sauvegardées.') ;
  }

  /*
  Supprimer l'article:
  Cette fonction est appelée suite au click sur le bouton supprimer.
  Pour supprimer l'article de la base de données, on fait appel au Service (la méthode remove).
  Une fois la suppression effectuée, on se redirige vers la liste des articles.
   */
  supprimerArticle(){
    this.presentAlertConfirm() ;
  }

  async presentAlertConfirm() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Confirm!',
      message: 'Message <strong>text</strong>!!!',
      buttons: [
        {
          text: 'Annuler',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Supprimer',
          cssClass: 'danger',
          handler: () => {
            this.service.removeArticle(this.article.reference) ;
            this.showSimpleAlert('Article', 'Suppression d\'un article', 'L\'article a été supprimé avec succès.') ;
            this.router.navigateByUrl('/list-article') ;
          }
        }
      ]
    });

    await alert.present();
  }

  // Fonction qui contrôle le choix de EnStock Vs HorsStock
  setStock(event){
    this.article.enStock = event.detail.value === 'oui' ;
  }

  async showSimpleAlert(header: string, subHeader: string, message: string) {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Article',
      subHeader: 'Modification d\'un Article',
      message: 'Vos modifications ont été sauvegardées.',
      buttons: ['OK']
    });
    await alert.present();
  }

}
