import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RequestPolicyPage } from './request-policy.page';

describe('RequestPolicyPage', () => {
  let component: RequestPolicyPage;
  let fixture: ComponentFixture<RequestPolicyPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RequestPolicyPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RequestPolicyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
