
import { Injectable } from '@angular/core';
import { Http , URLSearchParams , Response, Headers, RequestOptions  } from '@angular/http';
import { Observable } from 'rxjs/Rx';


@Injectable()
export class LoginService {
  private OauthLoginEndPointUrl = 'https://accounts.google.com/o/oauth2/v2/auth';  // Oauth Login EndPointUrl to web API
  private clientId ='30564562842-q13okkf5le2l5b98mvognn0eo3frgvo7.apps.googleusercontent.com';
  private clientSecret ='Un78dbqW-Wo_fMf9ldLfzh3P';

  constructor(public http: Http) {}

  login(username, password) : Observable<any> {

    let params: URLSearchParams = new URLSearchParams();
     params.set('username', username );
     params.set('password', password );
     params.set('client_id', this.clientId );
     params.set('client_secret', this.clientSecret );
     params.set('grant_type', 'password' );


        const headers = new Headers();
             headers.append('Access-Control-Allow-Headers', 'Content-Type');
             headers.append('Access-Control-Allow-Methods', 'GET');
             headers.append('Access-Control-Allow-Origin', '*');

    return this.http.get(this.OauthLoginEndPointUrl , {
                   search: params, headers: headers
                 }).map(this.handleData)
                   .catch(this.handleError);
  }

  private handleData(res: Response) {
    let body = res.json();
    return body;
  }

  private handleError (error: any) {
    // In a real world app, we might use a remote logging infrastructure
    // We'd also dig deeper into the error to get a better message
    let errMsg = (error.message) ? error.message :
    error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg); // log to console instead
    return Observable.throw(errMsg);
  }

  public logout() {
     localStorage.removeItem('token');
  }
}
