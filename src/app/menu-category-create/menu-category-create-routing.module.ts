import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MenuCategoryCreatePage } from './menu-category-create.page';

const routes: Routes = [
  {
    path: '',
    component: MenuCategoryCreatePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenuCategoryCreatePageRoutingModule {}
