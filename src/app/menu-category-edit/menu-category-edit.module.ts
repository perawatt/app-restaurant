import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MenuCategoryEditPageRoutingModule } from './menu-category-edit-routing.module';

import { MenuCategoryEditPage } from './menu-category-edit.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MenuCategoryEditPageRoutingModule
  ],
  declarations: [MenuCategoryEditPage]
})
export class MenuCategoryEditPageModule {}
