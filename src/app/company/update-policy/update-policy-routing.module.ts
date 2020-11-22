import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UpdatePolicyPage } from './update-policy.page';

const routes: Routes = [
  {
    path: '',
    component: UpdatePolicyPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UpdatePolicyPageRoutingModule {}
