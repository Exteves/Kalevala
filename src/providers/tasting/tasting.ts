import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Tasting } from '../../model/Tasting';
import { User } from '../../model/User';

@Injectable()
export class TastingProvider {

  private headers = new HttpHeaders;
  private baseUrl = "http://localhost:8080/";

  constructor(public http: HttpClient) {
    this.headers.append("Accept", 'application/json');
  }

  getTastingList() : Observable<Tasting[]>{
    return this.http.get<Tasting[]>(this.baseUrl + 'tasting')
  }

  createTasting(key : string){
    this.headers.append("key", key);
    return this.http.post<Tasting>(this.baseUrl + 'tasting', {headers: this.headers})
  }

}
