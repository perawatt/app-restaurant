import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MenuMainPageRoutingModule } from './menu-main-routing.module';

import { MenuMainPage } from './menu-main.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MenuMainPageRoutingModule
  ],
  declarations: [MenuMainPage]
})
export class MenuMainPageModule {}
