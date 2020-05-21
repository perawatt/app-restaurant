import { Injectable } from '@angular/core';
import { IRestaurantService } from './irestaurant';
import { API_URL } from '../environments/environment';
import { HttpClient } from '@angular/common/http';
import { NativeService } from '../providers/navigateService';

@Injectable({
  providedIn: 'root'
})
export class RestaurantService implements IRestaurantService {

  private baseUrl: string = API_URL;
  constructor(private http: HttpClient, private svc: NativeService) { } 
  
  getRestaurantInfo(): Promise<any> {
    throw new Error("Method not implemented.");
  }
  getOrderList(): Promise<any> {
    throw new Error("Method not implemented.");
  }
  getOrderInfo(orderId: string): Promise<any> {
    throw new Error("Method not implemented.");
  }
  getOrderHistories(): Promise<any> {
    throw new Error("Method not implemented.");
  }
  createOrderCancelRequest(orderId: string, data: any): Promise<any> {
    throw new Error("Method not implemented.");
  }
}
