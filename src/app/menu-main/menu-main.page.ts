import { RestaurantService } from './../../services/restaurant.service';
import { Component, OnInit } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';
import { NativeService } from 'src/providers/navigateService';
@Component({
  selector: 'app-menu-main',
  templateUrl: './menu-main.page.html',
  styleUrls: ['./menu-main.page.scss'],
})
export class MenuMainPage implements OnInit {

  data$ = Promise.resolve([]);
  segmentValue: any;
  constructor(public actionSheetController: ActionSheetController, private nativeSvc: NativeService, private restaurantSvc: RestaurantService) { }

  ngOnInit() {
  }

  ionViewDidEnter() {
    this.nativeSvc.SetPageTitle("เมนูของร้านคุณ");
    this.data$ = this.restaurantSvc.getRestaurantMenu();
  }

  segmentChanged(ev: any) {
    console.log('Segment changed', ev.target.value);
    this.segmentValue = ev.target.value;
  }

  async presentActionSheet() {
    const actionSheet = await this.actionSheetController.create({
      header: 'ปรับแต่งเมนูร้านของคุณ',
      buttons: [
        {
          text: 'เพิ่มเมนู', 
          handler: () => {
            this.nativeSvc.NavigateToPage("menu-category-create");
          }
        },
        { text: 'แก้ไขหมวดหมู่' },
        { text: 'สแกนเพิ่มเมนู' }
      ]
    });
    await actionSheet.present();
  }
}
