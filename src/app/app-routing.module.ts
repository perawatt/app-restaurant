import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'history-main',
    loadChildren: () => import('./history-main/history-main.module').then( m => m.HistoryMainPageModule)
  },
  {
    path: 'order-main',
    loadChildren: () => import('./order-main/order-main.module').then( m => m.OrderMainPageModule)
  },
  {
    path: 'order-cancel',
    loadChildren: () => import('./order-cancel/order-cancel.module').then( m => m.OrderCancelPageModule)
  },{
    path: 'contract-main',
    loadChildren: () => import('./contract-main/contract-main.module').then( m => m.ContractMainPageModule)
  },
  {
    path: 'contract-detail',
    loadChildren: () => import('./contract-detail/contract-detail.module').then( m => m.ContractDetailPageModule)
  },  {
    path: 'setting-main',
    loadChildren: () => import('./setting-main/setting-main.module').then( m => m.SettingMainPageModule)
  },
  {
    path: 'setting-office-hour',
    loadChildren: () => import('./setting-office-hour/setting-office-hour.module').then( m => m.SettingOfficeHourPageModule)
  },


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
