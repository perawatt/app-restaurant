import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NativeService } from 'src/providers/NativeService';
import { RestaurantService } from 'src/services/restaurant.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-setting-main',
  templateUrl: './setting-main.page.html',
  styleUrls: ['./setting-main.page.scss'],
})
export class SettingMainPage implements OnInit {
  data$ = Promise.resolve([]);
  alert: any;
  constructor(private alertController: AlertController, private route: ActivatedRoute, private nativeSvc: NativeService, private restaurantSvc: RestaurantService) { }

  ngOnInit() {
    this.nativeSvc.SetPageTitle("ตั้งค่า");

  }

  ionViewWillEnter() {
    this.loadData();
  }

  async loadData() {
    this.alert = await this.alertController.create({
      header: 'เกิดข้อผิดพลาด',
      message: "",
      buttons: [{
        text: 'ตกลง',
        handler: () => {
          this.loadData();
        },
      }],
      backdropDismiss: false
    });
    this.data$ = this.restaurantSvc.getRestaurantSetting();
    this.data$.then(_ => {
    }, async error => {
      this.alert.message = error.error.message;

      await this.alert.present();
    });
  }

  toggleChange(event) {
    if (event.target.checked) {
      this.restaurantSvc.createRestStandbyOn().then(_ => {
      }, async error => {
        this.alert.message = error.error.message;

        await this.alert.present();
      });;
    }
    else {
      this.presentAlert();
    }
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'ปิดร้าน',
      message: 'เลือกรูปแบบการปิดร้าน',
      buttons: [
        {
          text: 'ปิดร้านทันที',
          role: 'cancel',
          handler: (blah) => {
            this.restaurantSvc.createRestStandbyOff().then(_ => {
            }, async error => {
              this.alert.message = error.error.message;

              await this.alert.present();
            });;
          }
        }, {
          text: 'ปิดชั่วคราว',
          handler: () => {
            this.presentAlertRadio();
          }
        },
      ]
    });
    await alert.present();
  }

  async presentAlertRadio() {
    const alert = await this.alertController.create({
      header: 'ปิดร้าน',
      message: 'This is an alert message.',
      inputs: [
        {
          name: 'radio1',
          type: 'radio',
          label: '15 นาที',
          value: '15',
          checked: true
        },
        {
          name: 'radio2',
          type: 'radio',
          label: '1 ชม.',
          value: '60'
        },
      ],
      buttons: [
        {
          text: 'ตกลง',
          handler: (min) => {
            this.restaurantSvc.createRestStandbyTempOff(min).then(_ => {
            }, async error => {
              this.alert.message = error.error.message;

              await this.alert.present();
            });
          }
        }
      ]
    });
    await alert.present();
  }


  setSchedule() {
    this.nativeSvc.NavigateToPage("setting-office-hour");
  }
}
