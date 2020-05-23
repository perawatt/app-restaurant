import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { NativeService } from '../providers/navigateService';
import { BlobStorageService } from 'src/services/blob-storage/blob-storage.service';
import { BLOB_STORAGE_TOKEN, IAzureStorage } from 'src/services/blob-storage/azureStorage';
declare var AzureStorage: IAzureStorage;

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, HttpClientModule,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    NativeService,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    BlobStorageService,
    {
      provide: BLOB_STORAGE_TOKEN,
      useValue: AzureStorage.Blob
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
