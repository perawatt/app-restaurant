import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConfirmRemoveMenuPage } from './confirm-remove-menu.page';

const routes: Routes = [
  {
    path: '',
    component: ConfirmRemoveMenuPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConfirmRemoveMenuPageRoutingModule {}
