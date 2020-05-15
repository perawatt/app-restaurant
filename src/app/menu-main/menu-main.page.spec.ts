import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MenuMainPage } from './menu-main.page';

describe('MenuMainPage', () => {
  let component: MenuMainPage;
  let fixture: ComponentFixture<MenuMainPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuMainPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MenuMainPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
