export interface IRestaurantService {

    getRestaurantInfo(): Promise<any>;

    getRestaurantMenu(): Promise<any>;

    getCategoryList(): Promise<any>;

    getOrderList(): Promise<any>;

    getOrderInfo(orderId: string): Promise<any>;

    getOrderHistories(date: Date): Promise<any>;

    getDeliveryService(): Promise<any>;

    getDeliveryServiceById(deliveryId: string): Promise<any>;

    getRestaurantSetting(): Promise<any>;

    getSasToken(): Promise<any>;

    createOrderCancelRequest(orderId: string, data: any): Promise<any>;

    createCategory(data: any): Promise<any>;

    createProduct(data: any): Promise<any>;

    createProductFromQR(data: any): Promise<any>;

    createRestStandbyOn(): Promise<any>;

    createRestStandbyOff(): Promise<any>;

    createRestStandbyTempOff(min: string): Promise<any>;

    createRestSchedule(data: any): Promise<any>;

}