import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MenuCreateQrConfirmPageRoutingModule } from './menu-create-qr-confirm-routing.module';

import { MenuCreateQrConfirmPage } from './menu-create-qr-confirm.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MenuCreateQrConfirmPageRoutingModule
  ],
  declarations: [MenuCreateQrConfirmPage]
})
export class MenuCreateQrConfirmPageModule {}
