import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PolicyVerificationPage } from './policy-verification.page';

describe('PolicyVerificationPage', () => {
  let component: PolicyVerificationPage;
  let fixture: ComponentFixture<PolicyVerificationPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PolicyVerificationPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PolicyVerificationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
