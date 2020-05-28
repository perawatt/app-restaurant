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

  ionViewDidEnter(){
    this.getOrderList()
  }

  ngOnInit() {
    this.nativeSvc.SetPageTitle("ออเดอร์วันนี้");

    this.nativeSvc.RegisterNotificationHander("SendOrder", (param) => this.getOrderList());
    this.nativeSvc.RegisterRefreshOnGoBack(()=>this.getOrderList());
  }
  
  cancelOrder(_orderId: string){
    this.nativeSvc.NavigateToPage("order-cancel", { orderId: _orderId });
  }

  getOrderList(){
    this.data$ = this.restaurantSvc.getOrderList();
    this.data$.then(it=>{
    })

  }
}
