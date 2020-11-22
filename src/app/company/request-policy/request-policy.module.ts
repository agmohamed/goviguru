import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RequestPolicyPageRoutingModule } from './request-policy-routing.module';

import { RequestPolicyPage } from './request-policy.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RequestPolicyPageRoutingModule
  ],
  declarations: [RequestPolicyPage]
})
export class RequestPolicyPageModule {}
