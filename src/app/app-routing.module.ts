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
  {
    path: 'users',
    loadChildren: () => import('./users/users.module').then( m => m.UsersPageModule)
  },
  {
    path: 'list-annonces',
    loadChildren: () => import('./list-annonces/list-annonces.module').then( m => m.ListAnnoncesPageModule)
  },
  {
    path: 'add-annonce',
    loadChildren: () => import('./add-annonce/add-annonce.module').then( m => m.AddAnnoncePageModule)
  },
  {
    path: 'add-user',
    loadChildren: () => import('./add-user/add-user.module').then( m => m.AddUserPageModule)
  },
  {
    path: 'voir-user/:id',
    loadChildren: () => import('./voir-user/voir-user.module').then( m => m.VoirUserPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
