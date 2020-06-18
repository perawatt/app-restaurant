import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-confirm-cancel-order',
  templateUrl: './confirm-cancel-order.page.html',
  styleUrls: ['./confirm-cancel-order.page.scss'],
})
export class ConfirmCancelOrderPage implements OnInit {
  public confirm: boolean;

  constructor(private modalController: ModalController) { }

  ngOnInit() {
  }

  confirmCancel() {
    this.confirm = true;
    this.modalController.dismiss(this.confirm);
  }

  cancel() {
    this.modalController.dismiss();
  }

}
