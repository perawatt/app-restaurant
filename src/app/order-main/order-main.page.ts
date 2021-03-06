import { Component, OnInit } from '@angular/core';
import { NativeService } from '../../providers/NativeService';
import { RestaurantService } from '../../services/restaurant.service';
import { ModalController } from '@ionic/angular';
import { OrderCancelApproveModalsPage } from 'src/modals/order-cancel-approve-modals/order-cancel-approve-modals.page';

@Component({
  selector: 'app-order-main',
  templateUrl: './order-main.page.html',
  styleUrls: ['./order-main.page.scss'],
})
export class OrderMainPage implements OnInit {

  public data$ = Promise.resolve([]);
  public order: any[];
  public noList: any;
  public loadingEvent: any;
  constructor(private nativeSvc: NativeService, private restaurantSvc: RestaurantService, private modalController: ModalController) { }

  ionViewWillEnter() {
    this.noList = true;
    this.getOrderList()
    this.notificationhandler({ "Status": "Shipping" });
  }

  ngOnInit() {
    this.nativeSvc.SetPageTitle("ออเดอร์วันนี้");
    this.nativeSvc.RegisterNotificationHander("UpdateOrderStatus", (param) => this.notificationhandler(param));
    this.nativeSvc.RegisterRefreshOnGoBack(() => this.getOrderList());
  }

  notificationhandler(notiParam: any) {
    switch (notiParam.Status) {
      case "AcceptRequest": this.getOrderList(); break;
      case "Shipping": this.getOrderList(); break;
      //TODO: Add popup when cancel confirm or deny
      case "CancelConfirm": this.getOrderList(); break;
      case "CancelDeny": this.getOrderList(); break;
      default: break;
    }
    this.nativeSvc.RegisterNotificationHander("SendOrder", (param) => this.getOrderList());
    this.nativeSvc.RegisterRefreshOnGoBack(() => this.getOrderList());
  }

  cancelOrder(_orderId: string) {
    this.nativeSvc.NavigateToPage("order-cancel", { orderId: _orderId });
  }

  orderDone(orderId: string) {
    this.restaurantSvc.hideOrder(orderId);
    let order = this.order.find(it => it._id == orderId);
    order.show = false;
    this.noList = this.order.every(x => x.show == false);
  }

  getOrderList() {
    this.data$ = this.restaurantSvc.getOrderList();
    this.data$.then((it) => {
      it.forEach(element => {
        element.show = true;
      });
      this.order = it;
      if (this.order.length != 0) {
        this.noList = false;
        this.nativeSvc.PlayNotiAudio();
      };     
      if (this.loadingEvent) {       
        this.loadingEvent.target.complete();
      }     
    });
  }

  async presentModal() {
    const modal = await this.modalController.create({
      component: OrderCancelApproveModalsPage,
      cssClass: 'dialog-modal-4-order-success'
    });
    return await modal.present();
  }

  bikerDetail(orderId: string) {
    this.nativeSvc.NavigateToPage("biker-detail", { orderId: orderId });
  }

  doRefresh(event) {
    this.loadingEvent = event;
    this.getOrderList();

  }
}
