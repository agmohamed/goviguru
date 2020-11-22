import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AddPolicyPage } from './add-policy.page';

describe('AddPolicyPage', () => {
  let component: AddPolicyPage;
  let fixture: ComponentFixture<AddPolicyPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddPolicyPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AddPolicyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
