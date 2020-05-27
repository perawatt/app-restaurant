import { RestaurantService } from './../../services/restaurant.service';
import { Component, OnInit } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';
import { NativeService } from 'src/providers/NativeService';
@Component({
  selector: 'app-menu-main',
  templateUrl: './menu-main.page.html',
  styleUrls: ['./menu-main.page.scss'],
})
export class MenuMainPage implements OnInit {

  public data$ = Promise.resolve([]);
  public segmentValue: any;
  public category: any;
  constructor(public actionSheetController: ActionSheetController, private nativeSvc: NativeService, private restaurantSvc: RestaurantService) { }

  ngOnInit() {
  }

  ionViewDidEnter() {
    this.nativeSvc.SetPageTitle("เมนูของร้านคุณ");
    this.data$ = this.restaurantSvc.getRestaurantMenu();
    this.data$.then(it => {
      console.log(it);
      let qry = it.filter(i => i.products.length > 0);
      this.category = qry[0].categoryId;
      this.segmentChanged(qry[0].categoryId);
    })
  }

  segmentChanged(id: any) {
    console.log('Segment changed', id);
    this.segmentValue = id;
  }

  async presentActionSheet() {
    const actionSheet = await this.actionSheetController.create({
      header: 'ปรับแต่งเมนูร้านของคุณ',
      buttons: [
        {
          text: 'เพิ่มเมนู',
          handler: () => {
            this.nativeSvc.NavigateToPage("menu-create");
          }
        },
        {
          text: 'แก้ไขหมวดหมู่',
          handler: () => {
            this.nativeSvc.NavigateToPage("menu-category-edit");
          }
        },
        { text: 'สแกนเพิ่มเมนู' }
      ]
    });
    await actionSheet.present();
  }
}
