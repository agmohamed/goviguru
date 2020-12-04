import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'company',
    pathMatch: 'full'
  },
  {
    path: 'company',
    loadChildren: () => import('./company/company.module').then( m => m.CompanyPageModule)
    
  },
  {
    path: 'add-policy',
    loadChildren: () => import('./company/add-policy/add-policy.module').then( m => m.AddPolicyPageModule)
  },
  {
    path: 'view-policy',
    loadChildren: () => import('./company/view-policy/view-policy.module').then( m => m.ViewPolicyPageModule)
  },
  {
    path: 'request-policy',
    loadChildren: () => import('./company/request-policy/request-policy.module').then( m => m.RequestPolicyPageModule)
  },
  {
    path: 'request-claim',
    loadChildren: () => import('./company/request-claim/request-claim.module').then( m => m.RequestClaimPageModule)
  },
  {
    path: 'update-policy',
    loadChildren: () => import('./company/update-policy/update-policy.module').then( m => m.UpdatePolicyPageModule)
  },
  {
    path: 'claim-verification',
    loadChildren: () => import('./company/claim-verification/claim-verification.module').then( m => m.ClaimVerificationPageModule)
  },
  {
    path: 'policy-verification',
    loadChildren: () => import('./company/policy-verification/policy-verification.module').then( m => m.PolicyVerificationPageModule)
  },
  {
    path: 'edit-policy',
    loadChildren: () => import('./company/edit-policy/edit-policy.module').then( m => m.EditPolicyPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
