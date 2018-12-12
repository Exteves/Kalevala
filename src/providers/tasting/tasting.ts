import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Tasting } from '../../model/Tasting';

@Injectable()
export class TastingProvider {

  private headers = new HttpHeaders();
  private baseUrl = "http://localhost:8080/tasting";

  constructor(public http: HttpClient) {
    this.headers = this.headers.set('Accept', 'application/json');
  }

  getTastingList(token: string) : Observable<Tasting[]>{
    this.headers = this.headers.set('key', token)
    return this.http.get<Tasting[]>(this.baseUrl, {headers: this.headers})
  }

  createTasting(key : string, tasting : Tasting){
    this.headers = this.headers.set('key', key)
    return this.http.post<Tasting>(this.baseUrl, tasting, {headers: this.headers})
  }

  getTasting(id : number) : Observable<Tasting>{
    return this.http.get<Tasting>(this.baseUrl + '/' + id, {headers: this.headers})
  }
}
