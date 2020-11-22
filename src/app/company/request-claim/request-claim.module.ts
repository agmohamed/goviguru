import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RequestClaimPageRoutingModule } from './request-claim-routing.module';

import { RequestClaimPage } from './request-claim.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RequestClaimPageRoutingModule
  ],
  declarations: [RequestClaimPage]
})
export class RequestClaimPageModule {}
