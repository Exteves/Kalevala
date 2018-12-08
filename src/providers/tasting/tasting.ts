import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Tasting } from '../../model/Tasting';
import { User } from '../../model/User';

@Injectable()
export class TastingProvider {

  private headers = new HttpHeaders();
  private baseUrl = "http://localhost:8080/";

  constructor(public http: HttpClient) {
    this.headers = this.headers.append('Accept', 'application/json');
  }

  getTastingList(user: User) : Observable<Tasting[]>{
    this.headers = this.headers.append('key', user.token)
    return this.http.get<Tasting[]>(this.baseUrl + 'tasting/user', {headers: this.headers})
  }

  createTasting(key : string){
    this.headers.set('key', key);
    return this.http.post<Tasting>(this.baseUrl + 'tasting', {headers: this.headers})
  }

}
