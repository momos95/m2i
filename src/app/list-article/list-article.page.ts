import { Component, OnInit } from '@angular/core';
import {MagasinService} from '../services/magasin.service';
import {Article} from '../modeles/article';
import {Router} from '@angular/router';

@Component({
  selector: 'app-list-article',
  templateUrl: './list-article.page.html',
  styleUrls: ['./list-article.page.scss'],
})
export class ListArticlePage implements OnInit {

  articles: Article[] ;

  constructor(public service: MagasinService, public router: Router) {
    this.articles = this.service.getAllArticles() ;
  }

  recharger(){
    this.articles = this.service.getAllArticles() ;
  }

  afficherArticle(reference){
    const url = '/voir-article/' + reference ;
    this.router.navigateByUrl(url) ;
  }
  ngOnInit() {
  }
  ionViewDidEnter(){
    this.articles = this.service.getAllArticles() ;
  }

}
