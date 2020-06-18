import { Component, OnInit } from '@angular/core';
import { RestaurantService } from 'src/services/restaurant.service';
import { ActivatedRoute } from '@angular/router';
import { AlertController, ModalController, PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-confirm-remove-menu',
  templateUrl: './confirm-remove-menu.page.html',
  styleUrls: ['./confirm-remove-menu.page.scss'],
})
export class ConfirmRemoveMenuPage implements OnInit {
  productId: string;
  constructor(public popoverController: PopoverController,private modalController: ModalController, private alertCtr: AlertController, private route: ActivatedRoute, private restaurantSvc: RestaurantService) {
    this.route.params.subscribe(param => { this.productId = param["productId"] });
  }

  ngOnInit() {
  }

  async deleteMenu() {
    const alert = await this.alertCtr.create({
      header: 'เกิดข้อผิดพลาด',
      message: "",
      buttons: [{
        text: 'ตกลง',
        handler: () => {
        },
      }],
      backdropDismiss: false
    });
    this.restaurantSvc.deleteProduct(this.productId).then((it: any) => {
      this.modalController.dismiss();
      this.popoverController.dismiss();
    }, async error => {
      alert.message = error.error.message;

      await alert.present();
    });
  }

  cancel() {
    this.modalController.dismiss();
  }

}
