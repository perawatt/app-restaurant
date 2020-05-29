import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BikerDetailPage } from './biker-detail.page';

describe('BikerDetailPage', () => {
  let component: BikerDetailPage;
  let fixture: ComponentFixture<BikerDetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BikerDetailPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BikerDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
