import { Component, OnInit } from '@angular/core';
import { NativeService } from 'src/providers/NativeService';
import { RestaurantService } from 'src/services/restaurant.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-biker-detail',
  templateUrl: './biker-detail.page.html',
  styleUrls: ['./biker-detail.page.scss'],
})
export class BikerDetailPage implements OnInit {

  public order$ = Promise.resolve([]);
  public orderId: string;
  public phoneNo: string;
  constructor(private route: ActivatedRoute, private restaurantSvc: RestaurantService, private nativeSvc: NativeService) {
    this.route.params.subscribe(param => { this.orderId = param["orderId"] });
  }

  ngOnInit() {
    this.nativeSvc.SetPageTitle("ติดต่อผู้ส่ง");
    this.order$ = this.restaurantSvc.getOrderInfo(this.orderId);
    this.order$.then((it: any) => {
      this.phoneNo = it.biker.tel;
    })
  }

  calling() {
    this.nativeSvc.PhoneCall(this.phoneNo);
  }

}
