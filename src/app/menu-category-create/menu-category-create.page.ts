import { Component, OnInit } from '@angular/core';
import { NativeService } from 'src/providers/NativeService';
import { RestaurantService } from 'src/services/restaurant.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-menu-category-create',
  templateUrl: './menu-category-create.page.html',
  styleUrls: ['./menu-category-create.page.scss'],
})
export class MenuCategoryCreatePage implements OnInit {
  public fg: FormGroup;
  public lstOptions = [];
  public name: any;
  public price: number;
  public canNote = false;
  constructor(private alertCtr: AlertController, private fb: FormBuilder, private nativeSvc: NativeService, private restaurantSvc: RestaurantService) {
    this.fg = this.fb.group({
      'name': [null, Validators.required],
      'canNote': false,
      'options': null,
    });
  }

  ngOnInit() {
    this.nativeSvc.SetPageTitle("เพิ่มหมวดหมู่");
  }

  addOptions() {
    if (this.name) {
      this.lstOptions.push({
        'name': this.name,
        'price': this.price,
      });
    }
  }

  deleteOptions(data: any) {
    let index = this.lstOptions.findIndex(it => it == data);
    if (index != -1) this.lstOptions.splice(index, 1);
  }

  async onSave() {
    const alert = await this.alertCtr.create({
      header: 'เกิดข้อผิดพลาด',
      message: "",
      buttons: [{
        text: 'ตกลง',
        handler: () => {
        },
      }],
      backdropDismiss: false
    });
    this.fg.get('options').patchValue(this.lstOptions);
    this.fg.get('canNote').patchValue(this.canNote);
    if (this.fg.valid) {
      this.restaurantSvc.createCategory(this.fg.value).then(_ => {
        this.nativeSvc.GoBack();
      }, async error => {
        alert.message = error.error.message;

        await alert.present();
      });
    }
  }
}