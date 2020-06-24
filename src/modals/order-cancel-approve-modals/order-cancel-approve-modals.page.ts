import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-order-cancel-approve-modals',
  templateUrl: './order-cancel-approve-modals.page.html',
  styleUrls: ['./order-cancel-approve-modals.page.scss'],
})
export class OrderCancelApproveModalsPage implements OnInit {

  constructor(private modalController: ModalController) { }

  ngOnInit() {
  }

  cancel() {
    this.modalController.dismiss();
  }


}
