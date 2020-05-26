import { Component, OnInit } from '@angular/core';
import { NativeService } from '../../providers/NativeService';
import { RestaurantService } from '../../services/restaurant.service';

@Component({
  selector: 'app-history-main',
  templateUrl: './history-main.page.html',
  styleUrls: ['./history-main.page.scss'],
})
export class HistoryMainPage implements OnInit {

  date: Date = new Date();
  data$ = Promise.resolve([]);
  public totalToday: number = 0;
  
  constructor(private nativeSvc: NativeService, private restaurantSvc: RestaurantService) { }

  ngOnInit() {
  }

  ionViewDidEnter() {
    this.nativeSvc.SetPageTitle("ออเดอร์ย้อนหลัง");
    this.data$ = this.restaurantSvc.getOrderHistories(this.date);
    console.log(this.date);
    this.data$.then(it => {
      this.totalToday = it.filter(i => !i.cancelDate).map(i => i.totalPrice).reduce((a, b) => a + b);
      console.log(this.totalToday);
    })
  }
}
