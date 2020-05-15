import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SettingMainPage } from './setting-main.page';

describe('SettingMainPage', () => {
  let component: SettingMainPage;
  let fixture: ComponentFixture<SettingMainPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SettingMainPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SettingMainPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
