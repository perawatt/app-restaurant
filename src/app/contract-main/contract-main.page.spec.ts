import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ContractMainPage } from './contract-main.page';

describe('ContractMainPage', () => {
  let component: ContractMainPage;
  let fixture: ComponentFixture<ContractMainPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContractMainPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ContractMainPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
