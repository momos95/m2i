import { Component, OnInit } from '@angular/core';
import {MagasinService} from '../services/magasin.service';
import {Article} from '../modeles/article';
import {Router} from '@angular/router';

@Component({
  selector: 'app-recherche',
  templateUrl: './recherche.page.html',
  styleUrls: ['./recherche.page.scss'],
})
export class RecherchePage implements OnInit {

  nom: string ;
  articles: Article[] ;

  constructor(public magasinService: MagasinService, public router: Router) {
    this.nom = '' ;
    this.articles = [] ;
  }

  rechercherArticles(){
    if (this.nom !== ''){
      this.articles = this.magasinService.getAllByNom(this.nom) ;
    }
  }

  afficherArticle(reference){
    const url = '/voir-article/' + reference ;
    this.router.navigateByUrl(url) ;
  }

  ngOnInit() {
  }

}
