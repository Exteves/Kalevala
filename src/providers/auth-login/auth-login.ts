import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../../model/User';
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch';

@Injectable()
export class AuthLoginProvider {

  private headers = new HttpHeaders;
  private baseUrl = "http://localhost:8080/";

  constructor(
    private http: HttpClient
    ) {
    this.headers = this.headers.append("Accept", 'application/json');
  }

  loginIn(user:User){
    return this.http
      .post(this.baseUrl + 'login', [user.email, user.passwd], {headers: this.headers})
  }

  register(user:User){
    return this.http
    .post(this.baseUrl + 'register', user)
  }

  logout(user : User){
    this.headers = this.headers.append("key", user.token)
    return this.http
    .post(this.baseUrl + 'logout', {headers: this.headers})
  }
}
