import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Style } from '../../model/Style';

@Injectable()
export class FlavorProvider {
  
  private headers = new HttpHeaders();
  private baseUrl = "http://localhost:8080/flavor";

  constructor(public http: HttpClient) {
    this.headers = this.headers.set('Accept', 'application/json');
  }

  getFlavorList() : Observable<Style[]>{
    return this.http.get<Style[]>(this.baseUrl, {headers: this.headers})
  }

  getFlavor(id : number) : Observable<Style>{
    return this.http.get<Style>(this.baseUrl + '/' + id, {headers: this.headers})
  }

  deleteFlavor(id : number){
    return this.http.delete(this.baseUrl + '/' + id, {headers : this.headers})
  }
}
