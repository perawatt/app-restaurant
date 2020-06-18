import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConfirmRemoveCategoryPage } from './confirm-remove-category.page';

const routes: Routes = [
  {
    path: '',
    component: ConfirmRemoveCategoryPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConfirmRemoveCategoryPageRoutingModule {}
