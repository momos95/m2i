import { Injectable } from '@angular/core';
import {Article} from '../modeles/article';
import {Storage} from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class MagasinService {

  constructor(private baseDeDonnees: Storage) { }

  // Ajouter un nouvel article.
  addArticle(article: Article){
    this.baseDeDonnees.set(article.getReference(), article) ;
  }

  // Updater un article : Même chose PRESQUE
  updateArticle(article: Article){
    console.log(article) ;
    this.baseDeDonnees.set(article.getReference(), article) ;
  }

  // Supprimer l'artcile correspondant à la référence fournie.
  removeArticle(reference: string){
    if (this.baseDeDonnees.get(reference)){
      this.baseDeDonnees.remove(reference) ;
    }
  }

  // Récupère l'article correspondant à la référence données
  selectOne(reference: string) {
    return this.baseDeDonnees.get(reference) ; // Promise
  }

  // Retourner la liste des articles du magasin
  getAllArticles() {
    let articles = [];
    articles = [] ;
    this.baseDeDonnees.forEach((v, k ) => {
      articles.push(v) ;
    }) ;
    return articles ;
  }
}
