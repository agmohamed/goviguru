import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PolicyVerificationPage } from './policy-verification.page';

const routes: Routes = [
  {
    path: '',
    component: PolicyVerificationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PolicyVerificationPageRoutingModule {}
