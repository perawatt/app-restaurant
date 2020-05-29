import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BikerDetailPageRoutingModule } from './biker-detail-routing.module';

import { BikerDetailPage } from './biker-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BikerDetailPageRoutingModule
  ],
  declarations: [BikerDetailPage]
})
export class BikerDetailPageModule {}
