import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import '../base-url'
import { Observable } from 'rxjs/Observable';
import { Tasting } from '../../model/Tasting';
import { User } from '../../model/User';

@Injectable()
export class TastingProvider {

  constructor(public http: HttpClient) {
  }

  getTastingList(user: User) : Observable<Tasting[]>{
    return this.http.get<Tasting[]>(baseUrl + 'tasting')
  }

}
