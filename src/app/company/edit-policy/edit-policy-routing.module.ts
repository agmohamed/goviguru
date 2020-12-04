import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditPolicyPage } from './edit-policy.page';

const routes: Routes = [
  {
    path: '',
    component: EditPolicyPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditPolicyPageRoutingModule {}
