import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ContractMainPageRoutingModule } from './contract-main-routing.module';

import { ContractMainPage } from './contract-main.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ContractMainPageRoutingModule
  ],
  declarations: [ContractMainPage]
})
export class ContractMainPageModule {}
