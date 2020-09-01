import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GetapiService {

  sdata:any;
  constructor(private http: HttpClient) { }

  apiUrl: string = `https://jsonplaceholder.typicode.com/posts`;

  getApiData(){
    return this.http.get(this.apiUrl);
  }

  getUserId(id){
    const uidUrl = `https://jsonplaceholder.typicode.com/posts?userId=${id}`;
    return this.sdata = this.http.get(uidUrl);
  }
}
