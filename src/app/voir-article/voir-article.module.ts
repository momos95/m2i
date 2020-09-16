import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VoirArticlePageRoutingModule } from './voir-article-routing.module';

import { VoirArticlePage } from './voir-article.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VoirArticlePageRoutingModule
  ],
  declarations: [VoirArticlePage]
})
export class VoirArticlePageModule {}
