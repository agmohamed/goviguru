import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CompanyPage } from './company.page';

const routes: Routes = [
  {
    path: '',
    component: CompanyPage
  },
  {
    path: 'add-policy',
    loadChildren: () => import('./add-policy/add-policy.module').then( m => m.AddPolicyPageModule)
  },
  {
    path: 'view-policy',
    loadChildren: () => import('./view-policy/view-policy.module').then( m => m.ViewPolicyPageModule)
  },
  {
    path: 'request-policy',
    loadChildren: () => import('./request-policy/request-policy.module').then( m => m.RequestPolicyPageModule)
  },
  {
    path: 'request-claim',
    loadChildren: () => import('./request-claim/request-claim.module').then( m => m.RequestClaimPageModule)
  },
  {
    path: 'update-policy',
    loadChildren: () => import('./update-policy/update-policy.module').then( m => m.UpdatePolicyPageModule)
  },
  {
    path: 'claim-verification',
    loadChildren: () => import('./claim-verification/claim-verification.module').then( m => m.ClaimVerificationPageModule)
  },
  {
    path: 'policy-verification',
    loadChildren: () => import('./policy-verification/policy-verification.module').then( m => m.PolicyVerificationPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CompanyPageRoutingModule {}
