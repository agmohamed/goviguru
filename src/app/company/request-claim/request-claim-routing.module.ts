import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RequestClaimPage } from './request-claim.page';

const routes: Routes = [
  {
    path: '',
    component: RequestClaimPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RequestClaimPageRoutingModule {}
