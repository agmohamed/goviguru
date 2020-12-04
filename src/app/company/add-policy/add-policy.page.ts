import { MycompanyService } from 'src/app/mycompany.service';
import { Component, OnInit ,Input, NgZone} from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

import {HttpClient} from '@angular/common/http';
import { Router } from '@angular/router';



@Component({
  selector: 'app-add-policy',
  templateUrl: './add-policy.page.html',
  styleUrls: ['./add-policy.page.scss'],
})
export class AddPolicyPage implements OnInit {
  
 
  
  
  policyForm:FormGroup;
  
 

  constructor(private httpClient: HttpClient,
    private router:Router,
    private ngZone:NgZone,
    public myCompanyService:MycompanyService,
    private fb:FormBuilder) { }
 
 

  
  ngOnInit() {
    
   this.addnewPolicy();
      

  }
   addnewPolicy(){
    this.policyForm= new FormGroup({
      'crop_id':new FormControl(null,Validators.required),
      'crop_name':new FormControl(null,Validators.required),
      'claim_value_for_Acre':new FormControl(null,Validators.required),
      'rate':new FormControl(null,Validators.required)
    });

   }
  
  onSubmit(){
    this.myCompanyService.createPolicy(this.policyForm.value)
    .subscribe(
      (res)=>{
        console.log(this.policyForm.value);
        this.ngZone.run(()=>this.router
        .navigateByUrl('./company/view-policy'));
      }
    );
    
  }

  back(){
    this.router.navigate['company'];
  }
}
