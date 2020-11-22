import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ClaimVerificationPage } from './claim-verification.page';

describe('ClaimVerificationPage', () => {
  let component: ClaimVerificationPage;
  let fixture: ComponentFixture<ClaimVerificationPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClaimVerificationPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ClaimVerificationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
