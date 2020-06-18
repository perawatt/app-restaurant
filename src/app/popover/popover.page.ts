import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ConfirmRemoveMenuPage } from 'src/modals/confirm-remove-menu/confirm-remove-menu.page';

@Component({
  selector: 'app-popover',
  templateUrl: './popover.page.html',
  styleUrls: ['./popover.page.scss'],
})
export class PopoverPage implements OnInit {

  constructor(private modalController: ModalController) { }

  ngOnInit() {
  }

  async xxx() {
    const modal = await this.modalController.create({
      component: ConfirmRemoveMenuPage,
      cssClass: 'dialog-modal-4-order-success',
      componentProps: {

      },
      backdropDismiss: false
    });
    modal.present();
  }

}
