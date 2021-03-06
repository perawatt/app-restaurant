import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MenuCategoryCreatePageRoutingModule } from './menu-category-create-routing.module';

import { MenuCategoryCreatePage } from './menu-category-create.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    MenuCategoryCreatePageRoutingModule
  ],
  declarations: [MenuCategoryCreatePage]
})
export class MenuCategoryCreatePageModule { }
