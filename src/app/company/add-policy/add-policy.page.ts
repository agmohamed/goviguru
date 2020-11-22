import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import{AddPolicy} from '../add-policy/addPolicy';

@Component({
  selector: 'app-add-policy',
  templateUrl: './add-policy.page.html',
  styleUrls: ['./add-policy.page.scss'],
})
export class AddPolicyPage implements OnInit {
  
 
  postedPolicy:AddPolicy;
  
  
  
  newPolicy= new AddPolicy();

  constructor(private httpClient: HttpClient,private router:Router) { }
 
  cRateKeyUp(newRate:number){
    this.newPolicy.rate=newRate;
  }
  cNameKeyUp(newName:string){
    this.newPolicy.crop_name=newName;
  }
  cIdKeyUp(newId:number){
    this.newPolicy.crop_id=newId;
  }
  cValueKeyUp(newValue:number){
    this.newPolicy.claim_value_for_Acre=newValue;
  }

  addNewPolicy(addpolicy:AddPolicy):Observable<AddPolicy>{
      //const url='http://localhost:8100/policyCrop';
      const url='/assets/data/policy.json';
      return this.httpClient.post<AddPolicy>(url,addpolicy);
  }

  ngOnInit() {
   

    this.addNewPolicy(this.newPolicy).subscribe(data=>{
      this.postedPolicy=data;
    })
  }

  back(){
    this.router.navigate['company'];
  }
}
