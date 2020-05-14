import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OrderMainPageRoutingModule } from './order-main-routing.module';

import { OrderMainPage } from './order-main.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OrderMainPageRoutingModule
  ],
  declarations: [OrderMainPage]
})
export class OrderMainPageModule {}
