import { Component, OnInit } from '@angular/core';
import { NativeService } from '../../providers/NativeService';
import { RestaurantService } from '../../services/restaurant.service';

@Component({
  selector: 'app-order-main',
  templateUrl: './order-main.page.html',
  styleUrls: ['./order-main.page.scss'],
})
export class OrderMainPage implements OnInit {

  data$ = Promise.resolve([]);
  constructor(private nativeSvc: NativeService, private restaurantSvc: RestaurantService) { }

  ngOnInit() {
  }

  ionViewDidEnter(){
    this.nativeSvc.SetPageTitle("ออเดอร์วันนี้");
    this.data$ = this.restaurantSvc.getOrderList();
  }

  cancelOrder(_orderId: string){
    this.nativeSvc.NavigateToPage("order-cancel", { orderId: _orderId });
  }

}
