import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Country } from '../../model/Country';

@Injectable()
export class CountryProvider {

  private headers = new HttpHeaders();
  private baseUrl = "http://localhost:8080/country";
  
  constructor(private http: HttpClient) {
    this.headers = this.headers.set('Accept', 'application/json');
  }
  
  getCountryList() : Observable<Country[]>{
    return this.http.get<Country[]>(this.baseUrl, {headers: this.headers})
  }

  getCountry(id : number) : Observable<Country>{
    return this.http.get<Country>(this.baseUrl + '/' + id, {headers: this.headers})
  }

  deleteCountry(id : number){
    return this.http.delete(this.baseUrl + '/' + id, {headers : this.headers})
  }

}
