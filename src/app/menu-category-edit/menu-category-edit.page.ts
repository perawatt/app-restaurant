import { Component, OnInit } from '@angular/core';
import { NativeService } from 'src/providers/navigateService';
import { RestaurantService } from 'src/services/restaurant.service';

@Component({
  selector: 'app-menu-category-edit',
  templateUrl: './menu-category-edit.page.html',
  styleUrls: ['./menu-category-edit.page.scss'],
})
export class MenuCategoryEditPage implements OnInit {
  data$ = Promise.resolve([]);

  constructor(private nativeSvc: NativeService, private restaurantSvc: RestaurantService) { }

  ngOnInit() {
    this.nativeSvc.SetPageTitle("แก้ไขหมวดหมู่");
    this.data$ = this.restaurantSvc.getCategoryList();
  }

  createCategoty() {
    this.nativeSvc.NavigateToPage("menu-create");
  }
}
