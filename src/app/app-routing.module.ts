import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'page-contact',
    loadChildren: () => import('./contact/contact.module').then( m => m.ContactPageModule)
  },
  {
    path: 'about',
    loadChildren: () => import('./about/about.module').then( m => m.AboutPageModule)
  },
  {
    path: 'magasin',
    loadChildren: () => import('./magasin/magasin.module').then( m => m.MagasinPageModule)
  },
  {
    path: 'add-article',
    loadChildren: () => import('./add-article/add-article.module').then( m => m.AddArticlePageModule)
  },
  {
    path: 'list-article',
    loadChildren: () => import('./list-article/list-article.module').then( m => m.ListArticlePageModule)
  },
  {
    path: 'voir-article/:ref',
    loadChildren: () => import('./voir-article/voir-article.module').then( m => m.VoirArticlePageModule)
  },
  {
    path: 'recherche',
    loadChildren: () => import('./recherche/recherche.module').then( m => m.RecherchePageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
