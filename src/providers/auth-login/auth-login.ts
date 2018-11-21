import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { User } from '../../model/User';
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch';

@Injectable()
export class AuthLoginProvider {

  private baseUrl = "http://localhost:8080/";

  private headers = new Headers();

  constructor(public http: HttpClient) {
    this.headers.append("Accept", 'application/json');
    this.headers.append('Content-Type', 'application/json');
  }

  loginIn(user:User){
    return this.http
      .post(this.baseUrl + 'login', user, {headers: {'Content-Type' : 'application/json'}})
  }
}
