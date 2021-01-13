import { Injectable, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { environment, RestaurantId } from '../environments/environment';
import { NavController } from '@ionic/angular';

declare function TheSHybridCall(methodName: string, parameter: any): void;
declare function TheSHybridFunc(methodName: string, parameter: string, callback: any): void;

@Injectable()
export class NativeService {

    private NotificationCannel = new Map();
    private callBackFunc: () => void;

    constructor(private router: Router, private zone: NgZone, private navCtrl: NavController) {
        (<any>window).onSendNotification = (notiChannel: any, params: any) => { this.executeOnNotification(notiChannel, params) };
        (<any>window).refreshOnGoBack = () => { this.executeCallBackFunc() }
    }

    public async NavigateToPage(pageName: string, params?: object) {
        if (environment.production) {
            await this.retry(() => this.WaitForNativeAppReady());
            this.callNativeFunc("NavigateToPage", JSON.stringify({ pagename: pageName, params: params })).then(isMainPage => {
                if (!isMainPage) {
                    if (params != null && params != undefined) { this.router.navigate(['/' + pageName, params]); }
                    else { this.router.navigate(['/' + pageName]); }
                }
            });
        } else {
            if (params != null && params != undefined) { this.router.navigate(['/' + pageName, params]); }
            else { this.router.navigate(['/' + pageName]); }
        }
    }

    public async GoBack() {
        if (environment.production) {
            this.callAppMethod("Goback", "");
        } else {
            this.navCtrl.back();
        }
    }

    public async PopToRoot() {
        if (environment.production) {
            this.callAppMethod("PopToRoot", "");
        } else {

        }
    }

    public async SetPageTitle(title: string) {
        if (environment.production) {
            await this.retry(() => this.WaitForNativeAppReady());
            this.callAppMethod("SetPageTitle", JSON.stringify({ title: title}));
        }
    }

    public async GetRestaurantId() {
        if (environment.production) {
            await this.retry(() => this.WaitForNativeAppReady());
            return this.callNativeFunc("GetRestaurantId", "");
        }
        else {
            return RestaurantId;
        }
    }

    public RegisterNotificationHander(notiChannel: string, fn: (params) => void) {
        if (this.NotificationCannel.has(notiChannel)) {
            this.NotificationCannel.delete(notiChannel);
        }
        this.NotificationCannel.set(notiChannel, fn);
    }

    public async ExecuteNotiIfExist(notiChannel: string) {
        if (environment.production) {
            await this.retry(() => this.WaitForNativeAppReady());
            this.callAppMethod("ExecuteNotiIfExist", JSON.stringify({ notiChannel: notiChannel}));            
        } else {
            console.log("ExecuteNotiIfExist with key: " + notiChannel);
        }
    };

    public async RemoveNotificationChannel(notiChannel: string) {
        if (environment.production) {
            await this.retry(() => this.WaitForNativeAppReady());
            this.callAppMethod("RemoveNotificationChannel", JSON.stringify({ notiChannel: notiChannel}));
        } else {
            console.log("RemoveNotificationChannel with key: " + notiChannel);
        }
    }

    public async RegisterRefreshOnGoBack(fn: () => void) {
        this.callBackFunc = fn;
    }

    public async OpenMapDirection(lat: number, lon: number) {
        if (environment.production) {
            await this.retry(() => this.WaitForNativeAppReady());
            this.callAppMethod("OpenMapDirection", JSON.stringify({ latitude: lat, longitude: lon }));
        } else {
            window.open("https://www.google.com/maps?saddr=My+Location&daddr=" + lat + "," + lon + "", "_blank");
        }
    }

    public async PhoneCall(phoneNumber: string) {
        if (environment.production) {
            await this.retry(() => this.WaitForNativeAppReady());
            this.callAppMethod("PhoneCall", JSON.stringify({ phoneNumber: phoneNumber}));
        }
    }

    public async UpdateSidemenuItem(title: string, page: string, params?: object) {
        if (environment.production) {
            await this.retry(() => this.WaitForNativeAppReady());
            this.callAppMethod("UpdateSidemenuItem", JSON.stringify({ title: title, page: page, params: params }));
        }
    }

    private callNativeFunc(fName: string, fParam: string) {
        return new Promise((resolve, reject) => {
            try {
                TheSHybridFunc(fName, fParam, (rsp: any) => resolve(rsp));
            } catch (error) {
                resolve("error callNativeFunc : " + error);
            }
        });
    }

    private callAppMethod(fName: string, fParam: any) {
        return new Promise((resolve, reject) => {
            try {
                TheSHybridCall(fName, fParam);
                resolve({});
            } catch (error) {
                console.log(error);
                resolve("error callAppMethod : " + error);
            }
        });
    }

    private WaitForNativeAppReady(): Promise<any> {
        return new Promise((resolve, reject) => {
            if (typeof TheSHybridFunc == "undefined" || !TheSHybridFunc) {
                reject();
            } else {
                resolve();
            }
        });
    }

    private retry(fn: () => Promise<{}>, intervals = [500, 500, 400, 300, 200, 100, 50]) {
        return new Promise((resolve, reject) => {
            let fn2call = fn;
            if (intervals.length > 0) {
                let waitTime = 2 * +intervals[intervals.length - 1];
                fn2call = () => this.circuitBreaker(fn, waitTime);
            }
            fn2call()
                .then(resolve)
                .catch((error) => {
                    if (intervals.length == 0) {
                        // reject('maximum retries exceeded');
                        reject(error);
                        return;
                    } else {
                        var interval = intervals.pop();
                        setTimeout(() => {
                            // Passing on "reject" is the important part
                            this.retry(fn, intervals).then(resolve, reject);
                        }, interval);
                    }
                });
        });
    }

    private circuitBreaker(fn: () => Promise<{}>, internval: number): Promise<{}> {
        return new Promise((resolve, reject) => {
            let timer = setTimeout(() => {
                reject({ timeout: true });
            }, internval);
            let prom = fn();
            prom.then(it => {
                clearTimeout(timer);
                resolve(it);
            }).catch(reject);
        });
    }

    private executeOnNotification(notiChannel: any, params: any) {
        if (this.NotificationCannel.has(notiChannel)) {
            this.zone.run(() => {
                this.NotificationCannel.get(notiChannel)(params);
            });
        }
    }

    private executeCallBackFunc() {
        if (this.callBackFunc) {
            this.zone.run(() => {
                this.callBackFunc();
            });
        }
    }
}