import { RequestOptions } from "@angular/http/src/base_request_options";

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http, Response, Headers }          from '@angular/http';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { AppSettings }          from '../app.component';
import { User }          from './user';


@Injectable()
export class UserService {

  constructor (private http: Http) {}

  createUser(user:User): Observable<Boolean> {
      let headers = new Headers({ 'Content-Type': 'application/json' });
      let options = new RequestOptions({ headers: headers });
      return this.http.post(AppSettings.API_ENDPOINT+AppSettings.API_USER, JSON.stringify(user), options)
                      .map(()=>true)
                      .catch(this.handleError);
  }
  private handleError (error: Response | any) {
    // In a real world app, we might use a remote logging infrastructure
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }
}
