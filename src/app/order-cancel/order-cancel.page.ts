import { Component, OnInit } from '@angular/core';
import { NativeService } from '../../providers/NativeService';
import { ActivatedRoute } from '@angular/router';
import { RestaurantService } from '../../services/restaurant.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-order-cancel',
  templateUrl: './order-cancel.page.html',
  styleUrls: ['./order-cancel.page.scss'],
})
export class OrderCancelPage implements OnInit {

  public orderId: string;
  public data$ = Promise.resolve([]);
  constructor(private nativeSvc: NativeService, private route: ActivatedRoute, private restaurantSvc: RestaurantService, private alertCtr: AlertController) {
    this.route.params.subscribe(param => { this.orderId = param["orderId"] });
  }

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.nativeSvc.SetPageTitle("ยกเลิกคำสั่งซื้อ");
    this.getOrderInfo()
  }

  async getOrderInfo() {
    const alert = await this.alertCtr.create({
      header: 'เกิดข้อผิดพลาด',
      message: "",
      buttons: [{
        text: 'ตกลง',
        handler: () => {
          this.nativeSvc.GoBack();
        },
      }],
      backdropDismiss: false
    });
    this.data$ = this.restaurantSvc.getOrderInfo(this.orderId);
    this.data$.then((it: any) => {
    }, async error => {
      alert.message = error.error.message;
      await alert.present();
    });
  }

  async cancelOrderConfirm() {
    const alert = await this.alertCtr.create({
      header: 'เกิดข้อผิดพลาด',
      message: "",
      buttons: [{
        text: 'ตกลง',
        handler: () => {
          this.getOrderInfo();
        },
      }],
      backdropDismiss: false
    });
    await this.restaurantSvc.createOrderCancelRequest(this.orderId, { heading: "ไม่สามารถทำอาหารได้", info: "" }).then(() => {
      this.nativeSvc.GoBack();
    }, async error => {
      alert.message = error.error.message;
      await alert.present();
    });
  }

}
