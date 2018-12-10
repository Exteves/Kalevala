import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Packing } from '../../model/Packing';

@Injectable()
export class PackingProvider {
  private headers = new HttpHeaders();
  private baseUrl = "http://localhost:8080/packing";

  constructor(public http: HttpClient) {
    this.headers = this.headers.append('Accept', 'application/json');
  }
  
  getPackingList() : Observable<Packing[]>{
    return this.http.get<Packing[]>(this.baseUrl, {headers: this.headers})
  }

}