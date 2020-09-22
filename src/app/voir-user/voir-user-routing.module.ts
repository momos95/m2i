import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VoirUserPage } from './voir-user.page';

const routes: Routes = [
  {
    path: '',
    component: VoirUserPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VoirUserPageRoutingModule {}
