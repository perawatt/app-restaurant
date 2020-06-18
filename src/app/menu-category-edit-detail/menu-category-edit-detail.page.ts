import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { NativeService } from 'src/providers/NativeService';
import { RestaurantService } from 'src/services/restaurant.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-menu-category-edit-detail',
  templateUrl: './menu-category-edit-detail.page.html',
  styleUrls: ['./menu-category-edit-detail.page.scss'],
})
export class MenuCategoryEditDetailPage implements OnInit {
  public fg: FormGroup;
  public lstOptions = [];
  public name: any;
  public price: number;
  alert: any;
  public canNote = false;
  categoryId: string;
  constructor(private route: ActivatedRoute, private alertCtr: AlertController, private fb: FormBuilder, private nativeSvc: NativeService, private restaurantSvc: RestaurantService) {
    this.route.params.subscribe(param => { this.categoryId = param["categoryId"] });
    this.fg = this.fb.group({
      'name': [null, Validators.required],
      'canNote': false,
      'options': null,
    });
  }

  ngOnInit() {
    this.nativeSvc.SetPageTitle("แก้ไขหมวดหมู่");
    this.loadData();
  }

  async loadData() {
    this.alert = await this.alertCtr.create({
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

    this.restaurantSvc.getCategory(this.categoryId).then((it: any) => {
      console.log(it);
      this.fg.patchValue(it);
      this.lstOptions = this.fg.get('options').value;
      this.canNote = this.fg.get('canNote').value;
    }, async error => {
      this.alert.message = error.error.message;
      await this.alert.present();
    });
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
      this.restaurantSvc.updateCategory(this.categoryId, this.fg.value).then(_ => {
        this.nativeSvc.GoBack();
      }, async error => {
        alert.message = error.error.message;

        await alert.present();
      });
    }
  }
}
