import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MenuCreateQrConfirmPage } from './menu-create-qr-confirm.page';

describe('MenuCreateQrConfirmPage', () => {
  let component: MenuCreateQrConfirmPage;
  let fixture: ComponentFixture<MenuCreateQrConfirmPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuCreateQrConfirmPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MenuCreateQrConfirmPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
