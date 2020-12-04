import { MycompanyService } from 'src/app/mycompany.service';
import { Component, NgZone, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { policyCrop } from 'src/app/policyCrop';
@Component({
  selector: 'app-edit-policy',
  templateUrl: './edit-policy.page.html',
  styleUrls: ['./edit-policy.page.scss'],
})
export class EditPolicyPage implements OnInit {

  constructor(private fb:FormBuilder,private ngZone:NgZone,private router :Router,
    public mycompanyService:MycompanyService) { }

  policyForm:FormGroup;
  
  ngOnInit() {
    this.updateIssue();
  }

  updateIssue(){
    this.policyForm=new FormGroup({
      crop_id:new FormControl(this.mycompanyService.c_id),
      crop_name:new FormControl(this.mycompanyService.c_name,Validators.required),
      claim_value_for_Acre:new FormControl(this.mycompanyService.c_value,Validators.required),
      rate:new FormControl(this.mycompanyService.c_rate,Validators.required)

    });
  
  }
  onUpdate(){
    this.mycompanyService.updatePolicy(this.mycompanyService.c_id,this.policyForm.value)
    .subscribe(data=>{
      console.log(this.policyForm.value);
      this.ngZone.run(()=>this.router.navigateByUrl('./company/view-policy'))
    })
  }
  

}
