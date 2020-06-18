import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ConfirmRemoveMenuPage } from './confirm-remove-menu.page';

describe('ConfirmRemoveMenuPage', () => {
  let component: ConfirmRemoveMenuPage;
  let fixture: ComponentFixture<ConfirmRemoveMenuPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfirmRemoveMenuPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ConfirmRemoveMenuPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
