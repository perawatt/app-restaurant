import { NativeService } from 'src/providers/NativeService';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-create-qr-confirm',
  templateUrl: './menu-create-qr-confirm.page.html',
  styleUrls: ['./menu-create-qr-confirm.page.scss'],
})
export class MenuCreateQrConfirmPage implements OnInit {

  constructor(private nativeSvc: NativeService) { }

  ngOnInit() {
    this.nativeSvc.SetPageTitle("ยืนยันการเพิ่มเมนู");

}

}
