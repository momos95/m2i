import { Injectable } from '@angular/core';
import {Article} from '../modeles/article';
import {Storage} from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class MagasinService {

  private static LASTID = 0 ;
  private lastID: number ;

  constructor(private baseDeDonnees: Storage) {
    if (!this.baseDeDonnees.get('lastId')){
      this.baseDeDonnees.set('lastId', 1) ;
    }else {
      this.checkLastId() ;
    }
  }

  private checkLastId(){
    this.baseDeDonnees.get('lastId').then((data) => {
      this.lastID = data ;
    }) ;
  }

  private incrementLastId(){
    this.lastID = this.lastID + 1;
    console.log(this.lastID) ;
    this.baseDeDonnees.remove('lastId') ;
    this.baseDeDonnees.set('lastId', this.lastID) ;
  }

  public clear(){
    this.baseDeDonnees.clear() ;
    this.baseDeDonnees.set('lastId', 1) ;
    this.lastID = 1 ;
  }
  // Ajouter un nouvel article.
  addArticle(article: Article){
    console.log('LastID = ' + this.lastID) ;
    this.checkLastId() ;
    article.setId(this.lastID) ;
    this.baseDeDonnees.set(article.getReference(), article) ;
    this.incrementLastId() ;
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
    console.log(this.lastID) ;
    let articles = [];
    articles = [] ;
    this.baseDeDonnees.forEach((v, k ) => {
      if (k !== 'lastId'){
        articles.push(v) ;
      }
    }) ;
    return articles ;
  }
  getAllByNom(nom: string){
    let articles = [];
    articles = [] ;
    this.baseDeDonnees.forEach((v, k ) => { // On parcourt la liste des articles (sous le format value, clé)
      if (v.nom === nom) {
        articles.push(v) ;
      }
    }) ;
    return articles ;
  }

  private refreshLastID(){
  }
}
