import { Component, OnInit } from '@angular/core';
import { NativeService } from '../../providers/NativeService';
import { RestaurantService } from '../../services/restaurant.service';

@Component({
  selector: 'app-history-main',
  templateUrl: './history-main.page.html',
  styleUrls: ['./history-main.page.scss'],
})
export class HistoryMainPage implements OnInit {

  public date: Date = new Date();
  public data$ = Promise.resolve([]);
  public totalToday: number = 0;
  constructor(private nativeSvc: NativeService, private restaurantSvc: RestaurantService) { }

  ionViewDidEnter() {
    this.getOrderHistories()
  }

  ngOnInit() {
    this.nativeSvc.SetPageTitle("ออเดอร์ย้อนหลัง");
    this.nativeSvc.RegisterRefreshOnGoBack(() => this.getOrderHistories());
  }

  getOrderHistories() {
    this.data$ = this.restaurantSvc.getOrderHistories(this.date);
    this.data$.then(it => {
      this.totalToday = it.filter(i => !i.cancelDate).map(i => i.totalPrice).reduce((a, b) => a + b);
    })
  }

  bikerDetail(orderId: string) {
    this.nativeSvc.NavigateToPage("biker-detail", { orderId: orderId });
  }
}
