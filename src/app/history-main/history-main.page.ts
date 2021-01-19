import { Component, OnInit, ViewChild } from '@angular/core';
import { NativeService } from '../../providers/NativeService';
import { RestaurantService } from '../../services/restaurant.service';

@Component({
  selector: 'app-history-main',
  templateUrl: './history-main.page.html',
  styleUrls: ['./history-main.page.scss'],
})
export class HistoryMainPage implements OnInit {

  @ViewChild('datePicker') datePicker;
  public data$ = Promise.resolve([]);
  public date = Date.now();
  public maxDate: string;
  public totalToday: number = 0;
  constructor(private nativeSvc: NativeService, private restaurantSvc: RestaurantService) {
  }

  ionViewDidEnter() {
    this.getOrderHistories()
  }

  ngOnInit() {
    this.nativeSvc.SetPageTitle("ออเดอร์ย้อนหลัง");
    this.nativeSvc.RegisterRefreshOnGoBack(() => this.getOrderHistories());
  }

  getOrderHistories() {
    this.maxDate = new Date(Date.now()).toISOString().substring(0, 10);
    let doneDate = this.date ? new Date(this.date) : new Date(Date.now());
    doneDate.setHours(7);
    this.data$ = this.restaurantSvc.getOrderHistories(doneDate);
    this.data$.then((it: any) => {
      this.totalToday = it.total;
      if (it.orders?.length > 0) {
        it.orders.sort((a, b) => new Date(b.acceptRequestDate).getTime() - new Date(a.acceptRequestDate).getTime());
      }
    })
  }

  bikerDetail(orderId: string) {
    this.nativeSvc.NavigateToPage("biker-detail", { orderId: orderId });
  }
}
