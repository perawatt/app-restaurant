import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SettingMainPage } from './setting-main.page';

const routes: Routes = [
  {
    path: '',
    component: SettingMainPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SettingMainPageRoutingModule {}
