import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MenuMainPage } from './menu-main.page';

const routes: Routes = [
  {
    path: '',
    component: MenuMainPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenuMainPageRoutingModule {}
