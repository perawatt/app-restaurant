import { Component, OnInit } from '@angular/core';
import { NativeService } from 'src/providers/NativeService';
import { RestaurantService } from 'src/services/restaurant.service';
import { ActivatedRoute } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-biker-detail',
  templateUrl: './biker-detail.page.html',
  styleUrls: ['./biker-detail.page.scss'],
})
export class BikerDetailPage implements OnInit {

  public order$ = Promise.resolve([]);
  public orderId: string;
  public phoneNo: string;
  constructor(private route: ActivatedRoute, private restaurantSvc: RestaurantService, private nativeSvc: NativeService, private alertCtr: AlertController) {
    this.route.params.subscribe(param => { this.orderId = param["orderId"] });
  }

  ngOnInit() {
    this.nativeSvc.SetPageTitle("ติดต่อผู้ส่ง");
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
    this.order$ = this.restaurantSvc.getOrderInfo(this.orderId);
    this.order$.then((it: any) => {
      this.phoneNo = it.biker?.phoneNumber;
    }, async error => {
      alert.message = error.error.message;
      await alert.present();
    });
  }

  calling() {
    if (this.phoneNo != null) {
      this.nativeSvc.PhoneCall(this.phoneNo);
    }
  }

}
