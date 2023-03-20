import { HttpClient, HttpClientModule, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  baseUrl:string=environment.baseUrl;
  // baseUrl:string="http://localhost:3000";
  httpHeaders:HttpHeaders= new HttpHeaders()
  .set("content-type","application/json");


  constructor( private http:HttpClient) { }
  getDataFromServer(endPoint:string){
    const url= this.baseUrl+endPoint;
    return this.http.get(url, {headers:this.httpHeaders});
  }
  // getDataFromServerByQueryParams(endPoint:string, httpParams:HttpParams){
  //   const url= this.baseUrl+endPoint;
  //   return this.http.get(url, {headers:this.httpHeaders, params:httpParams});
  // }
}
