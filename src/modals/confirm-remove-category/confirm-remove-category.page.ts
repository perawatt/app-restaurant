import { Component, OnInit } from '@angular/core';
import { PopoverController, ModalController, AlertController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { RestaurantService } from 'src/services/restaurant.service';

@Component({
  selector: 'app-confirm-remove-category',
  templateUrl: './confirm-remove-category.page.html',
  styleUrls: ['./confirm-remove-category.page.scss'],
})
export class ConfirmRemoveCategoryPage implements OnInit {
  categoryId: string;
  constructor(public popoverController: PopoverController, private modalController: ModalController, private alertCtr: AlertController, private route: ActivatedRoute, private restaurantSvc: RestaurantService) {
    this.route.params.subscribe(param => { this.categoryId = param["categoryId"] });
  }

  ngOnInit() {
  }

  async deleteCategory() {
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
    this.restaurantSvc.deleteCategory(this.categoryId).then((it: any) => {
      this.modalController.dismiss();
    }, async error => {
      alert.message = error.error.message;

      await alert.present();
    });
  }

  cancel() {
    this.modalController.dismiss();
  }

}
