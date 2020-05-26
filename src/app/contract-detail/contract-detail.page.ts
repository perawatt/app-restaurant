import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { NativeService } from 'src/providers/NativeService';
import { RestaurantService } from 'src/services/restaurant.service';

@Component({
  selector: 'app-contract-detail',
  templateUrl: './contract-detail.page.html',
  styleUrls: ['./contract-detail.page.scss'],
})
export class ContractDetailPage implements OnInit {
  
  public data$ = Promise.resolve([]);
  public deliveryName: string;
  public deliveryId: string;
  constructor(private route: ActivatedRoute, private nativeSvc: NativeService, private restaurantSvc: RestaurantService) {
    this.route.params.subscribe(param => { this.deliveryId = param["deliveryId"] });
    this.route.params.subscribe(param => { this.deliveryName = param["deliveryName"] });
  }

  ngOnInit() {
    this.nativeSvc.SetPageTitle(this.deliveryName);
    this.data$ = this.restaurantSvc.getDeliveryServiceById(this.deliveryId);
  }

}
