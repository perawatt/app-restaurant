import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NativeService } from 'src/providers/NativeService';
import { RestaurantService } from 'src/services/restaurant.service';

@Component({
  selector: 'app-setting-main',
  templateUrl: './setting-main.page.html',
  styleUrls: ['./setting-main.page.scss'],
})
export class SettingMainPage implements OnInit {
  data$ = Promise.resolve([]);

  constructor(private route: ActivatedRoute, private nativeSvc: NativeService, private restaurantSvc: RestaurantService) { }

  ngOnInit() {
    this.nativeSvc.SetPageTitle("ตั้งค่า");
    this.data$ = this.restaurantSvc.getRestaurantSetting();
  }

}
