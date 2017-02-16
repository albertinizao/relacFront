
import { GenericCharacter } from '../data/genericcharacter';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http, Response }          from '@angular/http';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { AppSettings }          from '../../app.component';


@Injectable()
export class CharacterService {

  constructor (private http: Http) {}

  getCharacters(owner: String): Observable<String[]> {
    return this.http.get(AppSettings.API_ENDPOINT+AppSettings.API_CHARACTER)
                    .map(this.extractNames)
                    .catch(this.handleError);
  }
  private extractNames(res: Response) {
    let body = res.json();
    return body.data || { };
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
  getCharacter(characterName: String): Promise<GenericCharacter> {
    const character: GenericCharacter = {
      'name': 'Manolete',
      'user': 'Alberto',
      'relationships': [
        {
          'characterName': 'Paquito',
          'relation': [
            {
              'date': 1486634299626,
              'working': null,
              'confidential': null,
              'loyalty': null,
              'trust': null,
              'respect': null,
              'funny': null,
              'affection': 10
            }
          ]
        },
        {
          'characterName': 'Juancho',
          'relation': [
            {
              'date': 1486634299626,
              'working': 5,
              'confidential': 6,
              'loyalty': 3,
              'trust': 8,
              'respect': 7,
              'funny': 4,
              'affection': 6
            }
          ]
        },
        {
          'characterName': 'Mariano',
          'relation': [
            {
              'date': 1486634299626,
              'working': 1,
              'confidential': 2,
              'loyalty': 3,
              'trust': 4,
              'respect': 5,
              'funny': 6,
              'affection': 7
            }
          ]
        },
          {
            'characterName': 'Eusebio'
        }
      ]
    };
    return Promise.resolve(character);
  }
}
