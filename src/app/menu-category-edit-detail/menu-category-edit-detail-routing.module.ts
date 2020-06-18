import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MenuCategoryEditDetailPage } from './menu-category-edit-detail.page';

const routes: Routes = [
  {
    path: '',
    component: MenuCategoryEditDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenuCategoryEditDetailPageRoutingModule {}
