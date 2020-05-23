import { Component, OnInit } from '@angular/core';
import { NativeService } from 'src/providers/navigateService';
import { RestaurantService } from 'src/services/restaurant.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-menu-category-create',
  templateUrl: './menu-category-create.page.html',
  styleUrls: ['./menu-category-create.page.scss'],
})
export class MenuCategoryCreatePage implements OnInit {
  public fg: FormGroup;
  lstOptions = [];
  name: any;
  price: number;
  canNote = false;
  constructor(private fb: FormBuilder, private nativeSvc: NativeService, private restaurantSvc: RestaurantService) {
    this.fg = this.fb.group({
      'name': [null, Validators.required],
      'canNote': false,
      'options': null,
    });
  }

  ngOnInit() {
    this.nativeSvc.SetPageTitle("เพิ่มหมวดหมู่");
  }

  addOptions() {
    this.lstOptions.push({
      'name': this.name,
      'price': this.price,
    });
  }

  deleteOptions(data: any) {
    console.log("dasd");
    let index = this.lstOptions.findIndex(it => it == data);
    if (index != -1) this.lstOptions.splice(index, 1);
  }

  onSave() {
    this.fg.get('options').patchValue(this.lstOptions);
    this.fg.get('canNote').patchValue(this.canNote);
    if (this.fg.valid) {
      this.restaurantSvc.createCategory(this.fg.value);
    }
  }
}