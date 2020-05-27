import { Injectable } from '@angular/core';
import { IRestaurantService } from './irestaurant';
import { API_URL } from '../environments/environment';
import { HttpClient } from '@angular/common/http';
import { NativeService } from '../providers/NativeService';

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

  async getCategoryList(): Promise<any> {
    var restaurantId = await this.svc.GetRestaurantId();
    let apiUrl = this.baseUrl + "GetCategory/" + restaurantId;
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
    if (date) apiUrl += "?date=" + date.toISOString();
    return this.http.get(apiUrl).toPromise();
  }

  async getDeliveryService(): Promise<any> {
    var restaurantId = await this.svc.GetRestaurantId();
    let apiUrl = this.baseUrl + "GetDeliveryService/" + restaurantId;
    return this.http.get(apiUrl).toPromise();
  }

  async getDeliveryServiceById(deliveryId: string): Promise<any> {
    var restaurantId = await this.svc.GetRestaurantId();
    let apiUrl = this.baseUrl + "GetDeliveryService/" + restaurantId + '/' + deliveryId;
    return this.http.get(apiUrl).toPromise();
  }

  async getRestaurantSetting(): Promise<any> {
    var restaurantId = await this.svc.GetRestaurantId();
    let apiUrl = this.baseUrl + "GetRestaurantSetting/" + restaurantId;
    return this.http.get(apiUrl).toPromise();
  }

  async createOrderCancelRequest(orderId: string, data: any): Promise<any> {
    var restaurantId = await this.svc.GetRestaurantId();
    let apiUrl = this.baseUrl + "CancelOrderRequest/" + restaurantId + "/" + orderId;
    return this.http.post(apiUrl, data).toPromise();
  }

  async createCategory(data: any): Promise<any> {
    var restaurantId = await this.svc.GetRestaurantId();
    let apiUrl = this.baseUrl + "CreateCategory/" + restaurantId;
    return this.http.post(apiUrl, data).toPromise();
  }

  async createProduct(data: any): Promise<any> {
    var restaurantId = await this.svc.GetRestaurantId();
    let apiUrl = this.baseUrl + "CreateProduct/" + restaurantId;
    return this.http.post(apiUrl, data).toPromise();
  }

  async createProductFromQR(data: any): Promise<any> {
    var restaurantId = await this.svc.GetRestaurantId();
    let apiUrl = this.baseUrl + "AddMenuFromQr/" + restaurantId;
    return this.http.post(apiUrl, data).toPromise();
  }

  async createRestStandbyOn(): Promise<any> {
    var restaurantId = await this.svc.GetRestaurantId();
    let apiUrl = this.baseUrl + "RestaurantStandbyTurnOn/" + restaurantId;
    return this.http.post(apiUrl, {}).toPromise();
  }

  async createRestStandbyOff(): Promise<any> {
    var restaurantId = await this.svc.GetRestaurantId();
    let apiUrl = this.baseUrl + "RestaurantStandbyTurnOff/" + restaurantId;
    return this.http.post(apiUrl, {}).toPromise();
  }

  async createRestStandbyTempOff(min: string): Promise<any> {
    var restaurantId = await this.svc.GetRestaurantId();
    let apiUrl = this.baseUrl + "RestaurantStandbyTemporaryTurnOff/" + restaurantId + '/' + min;
    return this.http.post(apiUrl, {}).toPromise();
  }

  async createRestSchedule(data: any): Promise<any> {
    var restaurantId = await this.svc.GetRestaurantId();
    let apiUrl = this.baseUrl + "SetRestaurantSchedule/" + restaurantId;
    return this.http.post(apiUrl, data).toPromise();
  }

  getSasToken(): Promise<any> {
    let apiUrl = 'https://delivery-3rd-api.azurewebsites.net/api/Storage/Up2Cloud';
    return this.http.post(apiUrl, {}).toPromise();
  }

  getSasManaUpload(): Promise<any> {
    let apiUrl = 'https://manamockapi.azurewebsites.net/Image/sas?type=1&refid=1&serviceId=1&bizAccountId=1';
    return this.http.get(apiUrl).toPromise();
  }

  getImageUpload(imageId: string): Promise<any> {
    let apiUrl = 'https://manamockapi.azurewebsites.net/Image/' + imageId;
    return this.http.get(apiUrl).toPromise();
  }

  private baseUrl: string = API_URL;
  constructor(private http: HttpClient, private svc: NativeService) { }
}
