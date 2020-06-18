import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  },
  {
    path: 'history-main',
    loadChildren: () => import('./history-main/history-main.module').then(m => m.HistoryMainPageModule)
  },
  {
    path: 'order-main',
    loadChildren: () => import('./order-main/order-main.module').then(m => m.OrderMainPageModule)
  },
  {
    path: 'order-cancel',
    loadChildren: () => import('./order-cancel/order-cancel.module').then(m => m.OrderCancelPageModule)
  }, {
    path: 'contract-main',
    loadChildren: () => import('./contract-main/contract-main.module').then(m => m.ContractMainPageModule)
  },
  {
    path: 'contract-detail',
    loadChildren: () => import('./contract-detail/contract-detail.module').then(m => m.ContractDetailPageModule)
  },
  {
    path: 'setting-main',
    loadChildren: () => import('./setting-main/setting-main.module').then(m => m.SettingMainPageModule)
  },
  {
    path: 'setting-office-hour',
    loadChildren: () => import('./setting-office-hour/setting-office-hour.module').then(m => m.SettingOfficeHourPageModule)
  },
  {
    path: 'order-cancel',
    loadChildren: () => import('./order-cancel/order-cancel.module').then(m => m.OrderCancelPageModule)
  }, {
    path: 'contract-main',
    loadChildren: () => import('./contract-main/contract-main.module').then(m => m.ContractMainPageModule)
  },
  {
    path: 'contract-detail',
    loadChildren: () => import('./contract-detail/contract-detail.module').then(m => m.ContractDetailPageModule)
  },
  {
    path: 'menu-main',
    loadChildren: () => import('./menu-main/menu-main.module').then(m => m.MenuMainPageModule)
  },
  {
    path: 'menu-create',
    loadChildren: () => import('./menu-create/menu-create.module').then(m => m.MenuCreatePageModule)
  },
  {
    path: 'menu-create-qr-confirm',
    loadChildren: () => import('./menu-create-qr-confirm/menu-create-qr-confirm.module').then(m => m.MenuCreateQrConfirmPageModule)
  },
  {
    path: 'menu-category-edit',
    loadChildren: () => import('./menu-category-edit/menu-category-edit.module').then(m => m.MenuCategoryEditPageModule)
  },
  {
    path: 'menu-category-create',
    loadChildren: () => import('./menu-category-create/menu-category-create.module').then(m => m.MenuCategoryCreatePageModule)
  },
  {
    path: 'biker-detail',
    loadChildren: () => import('./biker-detail/biker-detail.module').then(m => m.BikerDetailPageModule)
  },  {
    path: 'popover',
    loadChildren: () => import('./popover/popover.module').then( m => m.PopoverPageModule)
  },



];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { useHash: true })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
