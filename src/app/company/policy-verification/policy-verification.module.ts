import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PolicyVerificationPageRoutingModule } from './policy-verification-routing.module';

import { PolicyVerificationPage } from './policy-verification.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PolicyVerificationPageRoutingModule
  ],
  declarations: [PolicyVerificationPage]
})
export class PolicyVerificationPageModule {}
