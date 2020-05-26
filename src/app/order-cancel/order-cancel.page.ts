import { Component, OnInit } from '@angular/core';
import { NativeService } from '../../providers/NativeService';
import { ActivatedRoute } from '@angular/router';
import { RestaurantService } from '../../services/restaurant.service';

@Component({
  selector: 'app-order-cancel',
  templateUrl: './order-cancel.page.html',
  styleUrls: ['./order-cancel.page.scss'],
})
export class OrderCancelPage implements OnInit {

  public orderId: string;
  public data$ = Promise.resolve([]);
  constructor(private nativeSvc: NativeService, private route: ActivatedRoute, private restaurantSvc: RestaurantService) {
    this.route.params.subscribe(param => { this.orderId = param["orderId"] });
  }

  ngOnInit() {
  }

  ionViewDidEnter() {
    this.nativeSvc.SetPageTitle("ยกเลิกคำสั่งซื้อ");
    this.data$ = this.restaurantSvc.getOrderInfo(this.orderId);
  }

  async cancelOrderConfirm(orderId: string) {
    await this.restaurantSvc.createOrderCancelRequest(this.orderId, { heading: "ไม่สามารถทำอาหารได้", info: "" }).then(() => 
    { 
      // TODO กลับไปหน้าก่อนหน้าโดยใช้คำสั่งเก้น
      this.nativeSvc.NavigateToPage("order-main");  
    })
  }

}
