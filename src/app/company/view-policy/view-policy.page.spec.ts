import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ViewPolicyPage } from './view-policy.page';

describe('ViewPolicyPage', () => {
  let component: ViewPolicyPage;
  let fixture: ComponentFixture<ViewPolicyPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewPolicyPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ViewPolicyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
