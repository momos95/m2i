import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VoirUserPageRoutingModule } from './voir-user-routing.module';

import { VoirUserPage } from './voir-user.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VoirUserPageRoutingModule
  ],
  declarations: [VoirUserPage]
})
export class VoirUserPageModule {}
