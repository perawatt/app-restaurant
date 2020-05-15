import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MenuCreatePage } from './menu-create.page';

describe('MenuCreatePage', () => {
  let component: MenuCreatePage;
  let fixture: ComponentFixture<MenuCreatePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuCreatePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MenuCreatePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
