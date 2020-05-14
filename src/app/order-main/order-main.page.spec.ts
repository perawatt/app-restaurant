import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { OrderMainPage } from './order-main.page';

describe('OrderMainPage', () => {
  let component: OrderMainPage;
  let fixture: ComponentFixture<OrderMainPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderMainPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(OrderMainPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
