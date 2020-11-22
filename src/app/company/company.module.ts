import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { IonicModule } from '@ionic/angular';

import { CompanyPageRoutingModule } from './company-routing.module';

import { CompanyPage } from './company.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CompanyPageRoutingModule,
    HttpClientModule
  ],
  declarations: [CompanyPage]
})
export class CompanyPageModule {}
