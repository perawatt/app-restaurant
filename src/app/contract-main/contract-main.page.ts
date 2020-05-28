import { Component, OnInit } from '@angular/core';
import { NativeService } from 'src/providers/NativeService';
import { RestaurantService } from 'src/services/restaurant.service';

@Component({
  selector: 'app-contract-main',
  templateUrl: './contract-main.page.html',
  styleUrls: ['./contract-main.page.scss'],
})
export class ContractMainPage implements OnInit {

  public data$ = Promise.resolve([]);
  constructor(private nativeSvc: NativeService, private restaurantSvc: RestaurantService) { }

  ngOnInit() {
    this.nativeSvc.SetPageTitle("บริษัทดิลิเวอรี่");
    this.data$ = this.restaurantSvc.getDeliveryService();
  }

  getDetailContract(_id: string, name: string) {
    this.nativeSvc.NavigateToPage("contract-detail", { deliveryId: _id });

  }
}
