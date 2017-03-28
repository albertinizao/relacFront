import { RequestOptions } from "@angular/http/src/base_request_options";

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http, Response, Headers }          from '@angular/http';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { AppSettings }          from '../app.component';
import { Login }          from './login';


@Injectable()
export class LoginService {

  constructor (private http: Http) {}

  login(login:Login): Observable<String> {
      return this.http.post(AppSettings.API_ENDPOINT+AppSettings.API_LOGIN, JSON.stringify(login))
                      .map(this.handleSuccess)
                      .catch(this.handleError);
  }
  private extractToken(res: Response) {
    let body = res.json();
    return body.data || { };
  }
  private handleSuccess(response: Response | any):string {
    return response.headers.get("X-Auth-Token");
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
