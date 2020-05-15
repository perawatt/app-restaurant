import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SettingOfficeHourPage } from './setting-office-hour.page';

const routes: Routes = [
  {
    path: '',
    component: SettingOfficeHourPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SettingOfficeHourPageRoutingModule {}
