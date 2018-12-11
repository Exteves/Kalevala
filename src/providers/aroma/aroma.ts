import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Style } from '../../model/Style';

@Injectable()
export class AromaProvider {

  private headers = new HttpHeaders();
  private baseUrl = "http://localhost:8080/aroma";

  constructor(public http: HttpClient) {
    this.headers = this.headers.append('Accept', 'application/json');
  }
  
  getAromaList() : Observable<Style[]>{
    return this.http.get<Style[]>(this.baseUrl, {headers: this.headers})
  }

  getAroma(id : number){
    return this.http.get<Style>(this.baseUrl + '/' + id, {headers: this.headers})
  }
}
