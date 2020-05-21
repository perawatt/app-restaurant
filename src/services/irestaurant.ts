export interface IRestaurantService {

    getRestaurantInfo(): Promise<any>;

    getOrderList(): Promise<any>;

    getOrderInfo(orderId: string): Promise<any>;

    getOrderHistories(): Promise<any>;
  
    createOrderCancelRequest(orderId: string, data: any): Promise<any>;
}