import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VoirArticlePage } from './voir-article.page';

const routes: Routes = [
  {
    path: '',
    component: VoirArticlePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VoirArticlePageRoutingModule {}
