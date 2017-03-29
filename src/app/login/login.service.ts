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
                      .map(this.handleSuccess);
  }
  private extractToken(res: Response) {
    let body = res.json();
    return body.data || { };
  }
  private handleSuccess(response: Response | any):string {
    return response.headers.get("X-Auth-Token");
  }
  private handleError (error: Response | any) {
    return new Observable(observe =>{observe.next(error.json().error);observe.complete();});
  }
}
