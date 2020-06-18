import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderCancelApproveModalsPage } from './order-cancel-approve-modals/order-cancel-approve-modals.page';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ConfirmRemoveMenuPage } from './confirm-remove-menu/confirm-remove-menu.page';
import { ConfirmCancelOrderPage } from './confirm-cancel-order/confirm-cancel-order.page';
import { ConfirmRemoveCategoryPage } from './confirm-remove-category/confirm-remove-category.page';

const modals = [
  OrderCancelApproveModalsPage,
  ConfirmRemoveMenuPage,
  ConfirmCancelOrderPage,
  ConfirmRemoveCategoryPage,
]

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
  ],
  entryComponents: modals,
  declarations: modals,
})
export class ModalsModule { }
