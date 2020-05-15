import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SettingMainPageRoutingModule } from './setting-main-routing.module';

import { SettingMainPage } from './setting-main.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SettingMainPageRoutingModule
  ],
  declarations: [SettingMainPage]
})
export class SettingMainPageModule {}
