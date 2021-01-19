import { RestaurantService } from './../../services/restaurant.service';
import { Component, OnInit } from '@angular/core';
import { ActionSheetController, AlertController, PopoverController } from '@ionic/angular';
import { NativeService } from 'src/providers/NativeService';
import { PopoverPage } from '../popover/popover.page';
@Component({
  selector: 'app-menu-main',
  templateUrl: './menu-main.page.html',
  styleUrls: ['./menu-main.page.scss'],
})
export class MenuMainPage implements OnInit {

  public data$ = Promise.resolve([]);
  public segmentValue: any;
  public category: any;
  constructor(public popoverController: PopoverController, private alertCtr: AlertController, public actionSheetController: ActionSheetController, private nativeSvc: NativeService, private restaurantSvc: RestaurantService) { }

  ngOnInit() {
    this.nativeSvc.SetPageTitle("เมนูของร้านคุณ");
    this.nativeSvc.RegisterRefreshOnGoBack(() => this.getMenu());
  }

  ionViewWillEnter() {
    this.getMenu();
  }

  async getMenu() {
    const alert = await this.alertCtr.create({
      header: 'เกิดข้อผิดพลาด',
      message: "",
      buttons: [{
        text: 'ตกลง',
        handler: () => {
          this.getMenu();
        },
      }],
      backdropDismiss: false
    });
    this.data$ = this.restaurantSvc.getRestaurantMenu();
    this.data$.then(it => {
      console.log(it);     
      let qry = it.filter(i => i.products.length > 0);
      this.category = qry[0].categoryId;
      this.segmentChanged(qry[0].categoryId);
    }, async error => {
      alert.message = error.error.message;

      await alert.present();
    })
  }

  segmentChanged(id: any) {
    this.segmentValue = id;
  }

  async presentActionSheet() {
    const actionSheet = await this.actionSheetController.create({
      header: 'ปรับแต่งเมนูร้านของคุณ',
      mode: 'ios',
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
        // { text: 'สแกนเพิ่มเมนู' },
        { text: 'ยกเลิก' },
      ]
    });
    await actionSheet.present();
  }

  async openPopover(ev: any, productId: string) {
    const popover = await this.popoverController.create({
      component: PopoverPage,
      componentProps: {
        productId: productId
      },
      event: ev
    });
    popover.onDidDismiss().then(it => {
      this.getMenu();
    });
    return await popover.present();

  }
}
