import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BikerDetailPage } from './biker-detail.page';

const routes: Routes = [
  {
    path: '',
    component: BikerDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BikerDetailPageRoutingModule {}
