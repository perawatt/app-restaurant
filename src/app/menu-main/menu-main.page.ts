import { Component, OnInit } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-menu-main',
  templateUrl: './menu-main.page.html',
  styleUrls: ['./menu-main.page.scss'],
})
export class MenuMainPage implements OnInit {

  constructor(public actionSheetController: ActionSheetController) { }

  ngOnInit() {
  }

  async presentActionSheet() {
    const actionSheet = await this.actionSheetController.create({
      header: 'ปรับแต่งเมนูร้านของคุณ',
      buttons: [
        { text: 'เพิ่มเมนู' },
        { text: 'แก้ไขหมวดหมู่' },
        { text: 'สแกนเพิ่มเมนู' }
      ]
    });
    await actionSheet.present();
  }
}
