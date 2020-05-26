import { Component, OnInit } from '@angular/core';
import { NativeService } from 'src/providers/NativeService';
import { RestaurantService } from 'src/services/restaurant.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { LstSchedule } from 'src/environments/environment';

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

  constructor(private fb: FormBuilder, private nativeSvc: NativeService, private restaurantSvc: RestaurantService) {
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

  setSchedule() {
    this.fg.get('sunday').patchValue(this.sunday);
    this.fg.get('monday').patchValue(this.monday);
    this.fg.get('tuesday').patchValue(this.tuesday);
    this.fg.get('wednesday').patchValue(this.wednesday);
    this.fg.get('thursday').patchValue(this.thursday);
    this.fg.get('friday').patchValue(this.friday);
    this.fg.get('saturday').patchValue(this.saturday);
    console.log(this.fg);

    if (this.fg.valid) {
      this.restaurantSvc.createRestSchedule(this.fg.value)
      this.nativeSvc.NavigateToPage("setting-main");
    }

  }
}
