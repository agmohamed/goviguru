import { policyCrop } from './../../policyCrop';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import {HttpClient} from '@angular/common/http';

import {  Observable } from 'rxjs';


import { MycompanyService } from 'src/app/mycompany.service';

@Component({
  selector: 'app-view-policy',
  templateUrl: './view-policy.page.html',
  styleUrls: ['./view-policy.page.scss'],
})

export class ViewPolicyPage implements OnInit {
 
  constructor(
    private httpClient:HttpClient,
    private router:Router,
    public mycompanyService :MycompanyService) {
  
   }
  //url='http://localhost:8100/policyCrops';
 
  id;
  policies:any=[];
   selectedPolicy:policyCrop;
  ngOnInit() {
    this.loadPolicy();
    
  }
  loadPolicy(){
    this.mycompanyService.getPolicies().subscribe(data=>{
      this.policies=data;})
  }
  edit(policy:policyCrop){
    this.selectedPolicy=policy;
    this.id=this.selectedPolicy.crop_id;

    this.mycompanyService.c_id=this.selectedPolicy.crop_id;
    this.mycompanyService.c_name=this.selectedPolicy.crop_name;
    this.mycompanyService.c_value=this.selectedPolicy.claim_value_for_Acre;
    this.mycompanyService.c_rate=this.selectedPolicy.rate;

    this.mycompanyService.getPolicy(this.id).subscribe(
      (res)=>{
        this.router.navigate(['./company/edit-policy/'+this.mycompanyService.c_id]);
      }
    )
  }
  update(){
    this.router.navigate['./company/update-policy'];
  }
  remove(policy:policyCrop){
    this.selectedPolicy=policy;
  
    this.mycompanyService.c_id=this.selectedPolicy.crop_id;

    this.mycompanyService.deletePolicy(this.mycompanyService.c_id)
    .subscribe(res=>{
      this.router.navigateByUrl('./company/view-policy');
    })
  }
}
