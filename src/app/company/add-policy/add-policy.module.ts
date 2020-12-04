import { HttpClientModule } from '@angular/common/http';
import { MycompanyService } from './../../mycompany.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { FormsModule,ReactiveFormsModule} from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { AddPolicyPageRoutingModule } from './add-policy-routing.module';

import { AddPolicyPage } from './add-policy.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddPolicyPageRoutingModule,
    ReactiveFormsModule,
    HttpClientModule  
  ],
  declarations: [
    AddPolicyPage
  ],
  providers:[MycompanyService]
})
export class AddPolicyPageModule {}
