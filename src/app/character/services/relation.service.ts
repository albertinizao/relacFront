
import { GenericCharacter } from '../data/genericcharacter';
import { Relation } from '../data/relation'
import { Injectable } from '@angular/core';
import { Http, Response, Headers }          from '@angular/http';
import { RequestOptions } from "@angular/http/src/base_request_options";
import { AppSettings }          from '../../app.component';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';


@Injectable()
export class RelationService {

  constructor (private http: Http) {}

  createRelationWith(owner: String, other: String): Observable<Boolean> {
      let authToken = localStorage.getItem('token');
      let headers = new Headers({ 'Content-Type': 'application/json' });
      headers.append('X-AUTH-TOKEN',  localStorage.getItem("token"));

      let options = new RequestOptions({ headers: headers });
      return this.http.post(AppSettings.API_ENDPOINT+AppSettings.API_CHARACTER+"/"+owner+"/"+AppSettings.API_RELATIONSHIP+"/"+other, null, options)
                      .map(()=>true)
                      .catch(this.handleError);
  }

  saveRelation(owner: String, other: String, relation: Relation): Observable<Boolean> {
      let authToken = localStorage.getItem('token');
      let headers = new Headers({ 'Content-Type': 'application/json' });
      headers.append('X-AUTH-TOKEN',  localStorage.getItem("token"));

      let options = new RequestOptions({ headers: headers });
      return this.http.put(AppSettings.API_ENDPOINT+AppSettings.API_CHARACTER+"/"+owner+"/"+AppSettings.API_RELATIONSHIP+"/"+other+"/"+AppSettings.API_RELATION+"/"+relation.date, relation, options)
                      .map(()=>true)
                      .catch(this.handleError);
  }

  getRelationList(owner: String, other: String): Observable<number[]> {
    let authToken = localStorage.getItem('token');
      let headers = new Headers({ 'Content-Type': 'application/json' });
      headers.append('X-AUTH-TOKEN',  localStorage.getItem("token"));

      let options = new RequestOptions({ headers: headers });
      return this.http.get(AppSettings.API_ENDPOINT+AppSettings.API_CHARACTER+"/"+owner+"/"+AppSettings.API_RELATIONSHIP+"/"+other+"/"+AppSettings.API_RELATION, options)
                      .map(this.extractDates)
                      .catch(this.handleError);
  }
  private extractDates(res: Response) {
    return res.json();
  }
  private handleError (error: Response | any) {
    alert("error characters: ")
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
  getRelation(owner: String, other: String, relationId: number): Observable<Relation> {

      let authToken = localStorage.getItem('token');
        let headers = new Headers({ 'Content-Type': 'application/json' });
        headers.append('X-AUTH-TOKEN',  localStorage.getItem("token"));

        let options = new RequestOptions({ headers: headers });
        return this.http.get(AppSettings.API_ENDPOINT+AppSettings.API_CHARACTER+"/"+owner+"/"+AppSettings.API_RELATIONSHIP+"/"+other+"/"+AppSettings.API_RELATION+"/"+relationId, options)
                        .map(this.extractRelation)
                        .catch(this.handleError);
  }
  private extractRelation(res: Response) {
    return res.json();
  }
}
