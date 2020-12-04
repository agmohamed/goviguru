import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EditPolicyPage } from './edit-policy.page';

describe('EditPolicyPage', () => {
  let component: EditPolicyPage;
  let fixture: ComponentFixture<EditPolicyPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditPolicyPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EditPolicyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
