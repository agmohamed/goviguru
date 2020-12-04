import { MycompanyService } from 'src/app/mycompany.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import{HttpHeaders,HttpClientModule} from '@angular/common/http';
import { IonicModule } from '@ionic/angular';

import { ViewPolicyPageRoutingModule } from './view-policy-routing.module';

import { ViewPolicyPage } from './view-policy.page';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    ViewPolicyPageRoutingModule,
    HttpHeaders,
    HttpClientModule
  ],
  providers:[MycompanyService],
  declarations: [ViewPolicyPage]
})
export class ViewPolicyPageModule {}
