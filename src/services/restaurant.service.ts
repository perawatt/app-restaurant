import { Injectable } from '@angular/core';
import { IRestaurantService } from './irestaurant';
import { API_URL } from '../environments/environment';
import { HttpClient } from '@angular/common/http';
import { NativeService } from '../providers/navigateService';

@Injectable({
  providedIn: 'root'
})
export class RestaurantService implements IRestaurantService {

  async getRestaurantInfo(): Promise<any> {
    var restaurantId = await this.svc.GetRestaurantId();
    let apiUrl = this.baseUrl + "GetRestaurantInfo/" + restaurantId;
    return this.http.get(apiUrl).toPromise();
  }
  
  async getRestaurantMenu(): Promise<any> {
    var restaurantId = await this.svc.GetRestaurantId();
    let apiUrl = this.baseUrl + "GetRestaurantMenu/" + restaurantId;
    return this.http.get(apiUrl).toPromise();
  }


  async getOrderList(): Promise<any> {
    var restaurantId = await this.svc.GetRestaurantId();
    let apiUrl = this.baseUrl + "GetUnfinishedOrder/" + restaurantId;
    return this.http.get(apiUrl).toPromise();
  }

  async getOrderInfo(orderId: string): Promise<any> {
    var restaurantId = await this.svc.GetRestaurantId();
    let apiUrl = this.baseUrl + "GetUnfinishedOrderByOrderId/" + restaurantId + "/" + orderId;
    return this.http.get(apiUrl).toPromise();
  }

  async getOrderHistories(date: Date): Promise<any> {
    var restaurantId = await this.svc.GetRestaurantId();
    let apiUrl = this.baseUrl + "GetFinishOrder/" + restaurantId; 
    if(date) apiUrl += "?date=" + date.toISOString();
    return this.http.get(apiUrl).toPromise();
  }

  async createOrderCancelRequest(orderId: string, data: any): Promise<any> {
    var restaurantId = await this.svc.GetRestaurantId();
    let apiUrl = this.baseUrl + "CancelOrderRequest/" + restaurantId + "/" + orderId;
    return this.http.post(apiUrl, data).toPromise();
  }

  private baseUrl: string = API_URL;
  constructor(private http: HttpClient, private svc: NativeService) { }
}
