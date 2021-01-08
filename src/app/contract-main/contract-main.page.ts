import { Component, OnInit } from '@angular/core';
import { NativeService } from 'src/providers/NativeService';
import { RestaurantService } from 'src/services/restaurant.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-contract-main',
  templateUrl: './contract-main.page.html',
  styleUrls: ['./contract-main.page.scss'],
})
export class ContractMainPage implements OnInit {

  public data$ = Promise.resolve([]);
  constructor(private nativeSvc: NativeService, private restaurantSvc: RestaurantService, private alertCtr: AlertController) { }

  ngOnInit() {
    this.nativeSvc.SetPageTitle("บริษัทดิลิเวอรี่");
    this.getDeliveryService()
  }

  async getDeliveryService() {
    const alert = await this.alertCtr.create({
      header: 'เกิดข้อผิดพลาด',
      message: "",
      buttons: [{
        text: 'ตกลง',
        handler: () => {
          this.getDeliveryService()
        },
      }],
      backdropDismiss: false
    });
    this.data$ = this.restaurantSvc.getDeliveryService();
    this.data$.then(it => { 
    }, async error => {
      alert.message = error.error.message;
      await alert.present();
    });
  }

  getDetailContract(_id: string, name: string) {
    this.nativeSvc.NavigateToPage("contract-detail", { deliveryId: _id });

  }
}
