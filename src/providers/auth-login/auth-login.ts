import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../../model/User';
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch';
import '../base-url'

@Injectable()
export class AuthLoginProvider {

  private headers = new HttpHeaders;

  constructor(
    private http: HttpClient
    ) {
    this.headers.append("Accept", 'application/json');
  }

  loginIn(user:User){
    return this.http
      .post(baseUrl + 'login', [user.email, user.passwd], {headers: this.headers})
  }

  register(user:User){
    return this.http
    .post(baseUrl + 'register', user, {headers: this.headers})
  }

  logout(user : User){
    return this.http
    .post(baseUrl + 'logout', user.token, {headers: this.headers})
  }
}
