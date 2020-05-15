import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SettingOfficeHourPage } from './setting-office-hour.page';

describe('SettingOfficeHourPage', () => {
  let component: SettingOfficeHourPage;
  let fixture: ComponentFixture<SettingOfficeHourPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SettingOfficeHourPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SettingOfficeHourPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
