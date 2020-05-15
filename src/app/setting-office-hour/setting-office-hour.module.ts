import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SettingOfficeHourPageRoutingModule } from './setting-office-hour-routing.module';

import { SettingOfficeHourPage } from './setting-office-hour.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SettingOfficeHourPageRoutingModule
  ],
  declarations: [SettingOfficeHourPage]
})
export class SettingOfficeHourPageModule {}
