import { async } from '@angular/core/testing';
import { Component, OnInit } from '@angular/core';
import { NativeService } from 'src/providers/NativeService';
import { RestaurantService } from 'src/services/restaurant.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { newArray } from '@angular/compiler/src/util';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-setting-office-hour',
  templateUrl: './setting-office-hour.page.html',
  styleUrls: ['./setting-office-hour.page.scss'],
})
export class SettingOfficeHourPage implements OnInit {
  public fg: FormGroup;
  isSunday = false;
  isMonday = false;
  isTuesday = false;
  isWednesday = false;
  iThursday = false;
  isFriday = false;
  isSaturday = false;
  sunday = [{
    'orderFromTime': 0,
    'orderThruTime': 0
  }];
  monday = [{
    'orderFromTime': 0,
    'orderThruTime': 0
  }];
  tuesday = [{
    'orderFromTime': 0,
    'orderThruTime': 0
  }];
  wednesday = [{
    'orderFromTime': 0,
    'orderThruTime': 0
  }];
  thursday = [{
    'orderFromTime': 0,
    'orderThruTime': 0
  }];
  friday = [{
    'orderFromTime': 0,
    'orderThruTime': 0
  }];
  saturday = [{
    'orderFromTime': 0,
    'orderThruTime': 0
  }];

  constructor(private alertCtr: AlertController, private fb: FormBuilder, private nativeSvc: NativeService, private restaurantSvc: RestaurantService) {
    this.fg = this.fb.group({
      'sunday': null,
      'monday': null,
      'tuesday': null,
      'wednesday': null,
      'thursday': null,
      'friday': null,
      'saturday': null,
      'temporaryCloseThruTime': null,
    });
  }

  ngOnInit() {
    this.nativeSvc.SetPageTitle("ตั้งเวลาเปิด-ปิดร้าน");
  }

  convertDateToNum(valueDate): number {
    if (valueDate != 0) {
      let data = new Date(valueDate);
      let arrayNum = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
      let hours = data.getHours().toString();
      let minite = data.getMinutes().toString();
      minite = arrayNum.some(it => it == minite) ? '0' + minite : minite;
      return Number(hours + minite);
    } else return 0;
  }

  convertProcess() {
    this.sunday[0].orderFromTime = this.convertDateToNum(this.sunday[0].orderFromTime);
    this.sunday[0].orderThruTime = this.convertDateToNum(this.sunday[0].orderThruTime);
    this.monday[0].orderFromTime = this.convertDateToNum(this.monday[0].orderFromTime);
    this.monday[0].orderThruTime = this.convertDateToNum(this.monday[0].orderThruTime);
    this.tuesday[0].orderFromTime = this.convertDateToNum(this.tuesday[0].orderFromTime);
    this.tuesday[0].orderThruTime = this.convertDateToNum(this.tuesday[0].orderThruTime);
    this.wednesday[0].orderFromTime = this.convertDateToNum(this.wednesday[0].orderFromTime);
    this.wednesday[0].orderThruTime = this.convertDateToNum(this.wednesday[0].orderThruTime);
    this.thursday[0].orderFromTime = this.convertDateToNum(this.thursday[0].orderFromTime);
    this.thursday[0].orderThruTime = this.convertDateToNum(this.thursday[0].orderThruTime);
    this.friday[0].orderFromTime = this.convertDateToNum(this.friday[0].orderFromTime);
    this.friday[0].orderThruTime = this.convertDateToNum(this.friday[0].orderThruTime);
    this.saturday[0].orderFromTime = this.convertDateToNum(this.saturday[0].orderFromTime);
    this.saturday[0].orderThruTime = this.convertDateToNum(this.saturday[0].orderThruTime);
    this.fg.get('sunday').patchValue(this.sunday);
    this.fg.get('monday').patchValue(this.monday);
    this.fg.get('tuesday').patchValue(this.tuesday);
    this.fg.get('wednesday').patchValue(this.wednesday);
    this.fg.get('thursday').patchValue(this.thursday);
    this.fg.get('friday').patchValue(this.friday);
    this.fg.get('saturday').patchValue(this.saturday);
  }

  async setSchedule() {
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
    this.convertProcess();
    if (this.fg.valid) {
      this.restaurantSvc.createRestSchedule(this.fg.value).then((it: any) => {
        this.nativeSvc.GoBack();
      }, async error => {
        alert.message = error.error.message;

        await alert.present();
      }
    }
  }
}
