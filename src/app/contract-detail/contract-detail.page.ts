import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { NativeService } from 'src/providers/NativeService';
import { RestaurantService } from 'src/services/restaurant.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-contract-detail',
  templateUrl: './contract-detail.page.html',
  styleUrls: ['./contract-detail.page.scss'],
})
export class ContractDetailPage implements OnInit {

  public data$ = Promise.resolve([]);
  public deliveryName: string;
  public deliveryId: string;
  constructor(private route: ActivatedRoute, private nativeSvc: NativeService, private restaurantSvc: RestaurantService, private alertCtr: AlertController) {
    this.route.params.subscribe(param => { this.deliveryId = param["deliveryId"] });
  }

  ngOnInit() {
    this.getDeliveryServiceById()
  }

  async getDeliveryServiceById() {
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
    this.data$ = this.restaurantSvc.getDeliveryServiceById(this.deliveryId);    
    this.data$.then((it: any) => {
      this.deliveryName = it.name;
      this.nativeSvc.SetPageTitle(this.deliveryName);
    }, async error => {
      alert.message = error.error.message;
      await alert.present();
    });
  }

}
