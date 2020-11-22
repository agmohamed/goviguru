import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UpdatePolicyPageRoutingModule } from './update-policy-routing.module';

import { UpdatePolicyPage } from './update-policy.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UpdatePolicyPageRoutingModule
  ],
  declarations: [UpdatePolicyPage]
})
export class UpdatePolicyPageModule {}
