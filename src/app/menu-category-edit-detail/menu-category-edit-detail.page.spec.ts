import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MenuCategoryEditDetailPage } from './menu-category-edit-detail.page';

describe('MenuCategoryEditDetailPage', () => {
  let component: MenuCategoryEditDetailPage;
  let fixture: ComponentFixture<MenuCategoryEditDetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuCategoryEditDetailPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MenuCategoryEditDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
