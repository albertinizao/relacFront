
import { GenericCharacter } from '../data/genericcharacter';
import { Injectable } from '@angular/core';


@Injectable()
export class CharacterService {
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
