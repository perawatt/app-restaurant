export interface IRestaurantService {

    getRestaurantInfo(): Promise<any>;
    
    getRestaurantMenu(): Promise<any>;

    getOrderList(): Promise<any>;

    getOrderInfo(orderId: string): Promise<any>;

    getOrderHistories(date: Date): Promise<any>;
  
    createOrderCancelRequest(orderId: string, data: any): Promise<any>;
}