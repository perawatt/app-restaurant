import { Component, OnInit } from '@angular/core';
import { NativeService } from '../../providers/NativeService';
import { RestaurantService } from '../../services/restaurant.service';

@Component({
  selector: 'app-order-main',
  templateUrl: './order-main.page.html',
  styleUrls: ['./order-main.page.scss'],
})
export class OrderMainPage implements OnInit {

  public data$ = Promise.resolve([]);
  constructor(private nativeSvc: NativeService, private restaurantSvc: RestaurantService) { }

  ionViewDidEnter() {
    this.getOrderList()

    this.Norificationhandler({"Status":"Shipping"});
  }

  ngOnInit() {
    this.nativeSvc.SetPageTitle("ออเดอร์วันนี้");

    this.nativeSvc.RegisterNotificationHander("UpdateOrderStatus", (param) => this.Norificationhandler(param));
    this.nativeSvc.RegisterRefreshOnGoBack(() => this.getOrderList());
  }

  Norificationhandler(notiParam: any) {
    switch(notiParam.Status) {
      case "AcceptRequest" :this.getOrderList(); break;
      case "Shipping": this.getOrderList(); break;
      //TODO: Add popup when cancel confirm or deny
      case "CancelConfirm": this.getOrderList(); break;
      case "CancelDeny": this.getOrderList(); break;
      default : break;
    }
  }

  cancelOrder(_orderId: string) {
    this.nativeSvc.NavigateToPage("order-cancel", { orderId: _orderId });
  }

  getOrderList() {
    this.data$ = this.restaurantSvc.getOrderList();
    this.data$.then(it => {
      console.log(it);
    })
  }
}
