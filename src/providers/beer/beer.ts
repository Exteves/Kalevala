import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Beer } from '../../model/Beer';

@Injectable()
export class BeerProvider {

  private headers = new HttpHeaders();
  private baseUrl = "http://localhost:8080/beer";

  constructor(public http: HttpClient) {    
    this.headers = this.headers.set('Accept', 'application/json');
  }

  getBeerList() : Observable<Beer[]>{
    return this.http.get<Beer[]>(this.baseUrl)
  }

  createBeer(beer : Beer){
    return this.http.post<Beer>(this.baseUrl, beer)
  }

  getBeer(id : number){
    return this.http.get<Beer>(this.baseUrl + '/' + id, {headers: this.headers})
  }

  deleteBeer(id : number){
    return this.http.delete(this.baseUrl + '/' + id, {headers : this.headers})
  }
  
}
