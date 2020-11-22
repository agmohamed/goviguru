import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RequestClaimPage } from './request-claim.page';

describe('RequestClaimPage', () => {
  let component: RequestClaimPage;
  let fixture: ComponentFixture<RequestClaimPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RequestClaimPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RequestClaimPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
