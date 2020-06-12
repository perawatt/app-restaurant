import { Component, OnInit } from '@angular/core';
import { NativeService } from 'src/providers/NativeService';
import { RestaurantService } from 'src/services/restaurant.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-menu-category-edit',
  templateUrl: './menu-category-edit.page.html',
  styleUrls: ['./menu-category-edit.page.scss'],
})
export class MenuCategoryEditPage implements OnInit {

  public data$ = Promise.resolve([]);
  constructor(private alertCtr: AlertController, private nativeSvc: NativeService, private restaurantSvc: RestaurantService) { }

  ngOnInit() {
    this.nativeSvc.SetPageTitle("แก้ไขหมวดหมู่");
    this.nativeSvc.RegisterRefreshOnGoBack(() => this.getCategory());
  }

  ionViewWillEnter() {
    this.getCategory();
  }

  async getCategory() {
    const alert = await this.alertCtr.create({
      header: 'เกิดข้อผิดพลาด',
      message: "",
      buttons: [{
        text: 'ตกลง',
        handler: () => {
          this.nativeSvc.GoBack();
        },
      }],
      backdropDismiss: false
    });
    this.data$ = this.restaurantSvc.getCategoryList();
    this.data$.then((it: any) => {
    }, async error => {
      alert.message = error.error.message;

      await alert.present();
    })
  }

  createCategoty() {
    this.nativeSvc.NavigateToPage("menu-category-create");
  }
}
