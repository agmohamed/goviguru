import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClaimVerificationPage } from './claim-verification.page';

const routes: Routes = [
  {
    path: '',
    component: ClaimVerificationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClaimVerificationPageRoutingModule {}
