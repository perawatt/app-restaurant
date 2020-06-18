import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConfirmCancelOrderPage } from './confirm-cancel-order.page';

const routes: Routes = [
  {
    path: '',
    component: ConfirmCancelOrderPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConfirmCancelOrderPageRoutingModule {}
