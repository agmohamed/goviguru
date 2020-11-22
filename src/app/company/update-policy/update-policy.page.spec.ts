import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { UpdatePolicyPage } from './update-policy.page';

describe('UpdatePolicyPage', () => {
  let component: UpdatePolicyPage;
  let fixture: ComponentFixture<UpdatePolicyPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdatePolicyPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(UpdatePolicyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
