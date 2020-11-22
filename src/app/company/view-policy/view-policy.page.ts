import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { PolicyCrop } from './policyCrops';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
@Component({
  selector: 'app-view-policy',
  templateUrl: './view-policy.page.html',
  styleUrls: ['./view-policy.page.scss'],
})
export class ViewPolicyPage implements OnInit {

  constructor(private httpClient:HttpClient,private router:Router) { }
  //url1='http://localhost:8100/policyCrop';
  url='/assets/data/policy.json';
  policyCrops:PolicyCrop[];
  ngOnInit() {
    this.viewPolicy().subscribe(data=>
      {
        this.policyCrops=data;
      })
  }
  viewPolicy():Observable<PolicyCrop[]>{
    return this.httpClient.get<PolicyCrop[]>(this.url);
  }
  update(){
    this.router.navigate['./company/update-policy'];
  }
}
