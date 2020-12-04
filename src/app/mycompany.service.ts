import { policyCrop } from 'src/app/policyCrop';
import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import{map} from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({ 
  providedIn: 'root'
})
export class MycompanyService {

  protected url= 'http://localhost:3000';
  constructor(public httpClient:HttpClient) { }

  public c_id;
  public c_name;
  public c_value;
  public c_rate;

  
  httpOptions={
    header:new HttpHeaders({
      'content-type':'application/json'
    }),
  };
  getCrop():Observable<any>{
    return this.httpClient.get(`${this.url}/policyCrop`).pipe(map(res=>res));
  }
  //get
  getPolicy(id):Observable<policyCrop>{
    return this.httpClient.get<policyCrop>(this.url+'/policyCrop/'+id,{
      headers: new HttpHeaders()
      .set('Content-Type', 'application/json; charset=utf-8 '),
    })
    .pipe(map(res=>res));
  }
  getPolicies():Observable<policyCrop>{
    return this.httpClient.get<policyCrop>(this.url+'/policyCrop')
    .pipe(map(res=>res));
  }
  //Post
  createPolicy(data):Observable<policyCrop>{
    return this.httpClient
    .post<policyCrop>(this.url+'/policyCrop/',JSON.stringify(data),{
      headers: new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8 '),
    })
    .pipe(map(res=>res));
  
  }
  //put
  updatePolicy(id,data):Observable<policyCrop>{
    return this.httpClient.put<policyCrop>(this.url+'/policyCrop/'+id,JSON.stringify(data),{
      headers: new HttpHeaders()
      .set('Content-Type', 'application/json; charset=utf-8 '),
    })
    .pipe(map(res=>res));  
  }
  //delete
  deletePolicy(id):Observable<policyCrop>{
    return this.httpClient.delete<policyCrop>(this.url+'/policyCrop/'+id,{headers: new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8 '),})      
    .pipe(map(res=>res)); 
  }
}

