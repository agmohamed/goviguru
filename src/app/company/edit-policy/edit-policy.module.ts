import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { IonicModule } from '@ionic/angular';

import { EditPolicyPageRoutingModule } from './edit-policy-routing.module';

import { EditPolicyPage } from './edit-policy.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditPolicyPageRoutingModule,
    HttpClientModule
  ],
  declarations: [EditPolicyPage]
})
export class EditPolicyPageModule {}
