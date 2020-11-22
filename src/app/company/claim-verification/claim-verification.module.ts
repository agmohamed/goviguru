import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ClaimVerificationPageRoutingModule } from './claim-verification-routing.module';

import { ClaimVerificationPage } from './claim-verification.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ClaimVerificationPageRoutingModule
  ],
  declarations: [ClaimVerificationPage]
})
export class ClaimVerificationPageModule {}
