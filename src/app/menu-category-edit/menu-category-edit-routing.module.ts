import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MenuCategoryEditPage } from './menu-category-edit.page';

const routes: Routes = [
  {
    path: '',
    component: MenuCategoryEditPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenuCategoryEditPageRoutingModule {}
