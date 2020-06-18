import { Component, OnInit } from '@angular/core';
import { ModalController, PopoverController } from '@ionic/angular';
import { ConfirmRemoveMenuPage } from 'src/modals/confirm-remove-menu/confirm-remove-menu.page';
import { NativeService } from 'src/providers/NativeService';
import { ActivatedRoute } from '@angular/router';
import { RestaurantService } from 'src/services/restaurant.service';

@Component({
  selector: 'app-popover',
  templateUrl: './popover.page.html',
  styleUrls: ['./popover.page.scss'],
})
export class PopoverPage implements OnInit {
  productId: string;
  constructor(private route: ActivatedRoute, public popoverController: PopoverController, private nativeSvc: NativeService, private modalController: ModalController) {
    this.route.params.subscribe(param => { this.productId = param["productId"] });
  }

  ngOnInit() {
  }

  editMenu() {
      this.popoverController.dismiss();
    this.nativeSvc.NavigateToPage("menu-edit", { productId: this.productId });
  }

  async deleteMenu() {
    const modal = await this.modalController.create({
      component: ConfirmRemoveMenuPage,
      cssClass: 'dialog-modal-4-order-success',
      componentProps: {
        productId: this.productId
      },
      backdropDismiss: false
    });
    await modal.present();
  }

}
