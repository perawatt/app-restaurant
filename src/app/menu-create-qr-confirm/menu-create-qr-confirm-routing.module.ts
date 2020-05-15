import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MenuCreateQrConfirmPage } from './menu-create-qr-confirm.page';

const routes: Routes = [
  {
    path: '',
    component: MenuCreateQrConfirmPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenuCreateQrConfirmPageRoutingModule {}
