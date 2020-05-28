import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { OrderCancelApproveModalsPage } from './order-cancel-approve-modals.page';

describe('OrderCancelApproveModalsPage', () => {
  let component: OrderCancelApproveModalsPage;
  let fixture: ComponentFixture<OrderCancelApproveModalsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderCancelApproveModalsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(OrderCancelApproveModalsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
