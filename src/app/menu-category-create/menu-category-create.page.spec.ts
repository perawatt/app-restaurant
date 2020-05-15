import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MenuCategoryCreatePage } from './menu-category-create.page';

describe('MenuCategoryCreatePage', () => {
  let component: MenuCategoryCreatePage;
  let fixture: ComponentFixture<MenuCategoryCreatePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuCategoryCreatePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MenuCategoryCreatePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
