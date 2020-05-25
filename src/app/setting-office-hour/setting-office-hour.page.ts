import { Component, OnInit } from '@angular/core';
import { NativeService } from 'src/providers/NativeService';

@Component({
  selector: 'app-setting-office-hour',
  templateUrl: './setting-office-hour.page.html',
  styleUrls: ['./setting-office-hour.page.scss'],
})
export class SettingOfficeHourPage implements OnInit {

  constructor(private nativeSvc: NativeService) { }

  ngOnInit() {
    this.nativeSvc.SetPageTitle("ตั้งเวลาเปิด-ปิดร้าน");
  }

}
