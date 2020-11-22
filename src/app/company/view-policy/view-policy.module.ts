import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViewPolicyPageRoutingModule } from './view-policy-routing.module';

import { ViewPolicyPage } from './view-policy.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViewPolicyPageRoutingModule
  ],
  declarations: [ViewPolicyPage]
})
export class ViewPolicyPageModule {}
