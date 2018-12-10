import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Color } from '../../model/Color';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ColorProvider {

  private headers = new HttpHeaders();
  private baseUrl = "http://localhost:8080/color";

  constructor(public http: HttpClient) {
    this.headers = this.headers.append('Accept', 'application/json');
  }

  public getColorList(): Observable<Color[]>{
    return this.http.get<Color[]>(this.baseUrl, {headers: this.headers})
  }

}
