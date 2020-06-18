import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MenuCategoryEditDetailPageRoutingModule } from './menu-category-edit-detail-routing.module';

import { MenuCategoryEditDetailPage } from './menu-category-edit-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    MenuCategoryEditDetailPageRoutingModule
  ],
  declarations: [MenuCategoryEditDetailPage]
})
export class MenuCategoryEditDetailPageModule {}
