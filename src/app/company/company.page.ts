import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-company',
  templateUrl: './company.page.html',
  styleUrls: ['./company.page.scss'],
})
export class CompanyPage implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }
  addPolicy(){
    this.router.navigate(['./company/add-policy']);
  }
  updatePolicy(){
    this.router.navigate(['./company/update-policy']);
  }
  viewPolicy(){
    this.router.navigate(['./company/view-policy']);
  }
  requestPolicy(){
    this.router.navigate(['./company/request-policy']);
  }
  requestClaim(){
    this.router.navigate(['./company/request-claim']);
  }
}
