import { RequestOptions } from "@angular/http/src/base_request_options";

import { GenericCharacter } from '../data/genericcharacter';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http, Response, Headers }          from '@angular/http';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { AppSettings }          from '../../app.component';


@Injectable()
export class GameService {

  constructor (private http: Http) {}

  getGames(): Observable<String[]> {
    let authToken = localStorage.getItem('token');
      let headers = new Headers({ 'Content-Type': 'application/json' });
      headers.append('X-AUTH-TOKEN',  localStorage.getItem("token"));
      let options = new RequestOptions({ headers: headers });
      return this.http.get(AppSettings.API_ENDPOINT+AppSettings.API_GAME, options)
                      .map(this.extractNames)
                      .catch(this.handleError);
  }
  private extractNames(res: Response) {
    return res.json();
  }
  private handleError (error: Response | any) {
    alert("error games: ")
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
