
import { GenericCharacter } from '../data/genericcharacter';
import { Relation } from '../data/relation'
import { Injectable } from '@angular/core';


@Injectable()
export class RelationService {
  getRelationList(owner: String, other: String): Promise<number[]> {
    const relationList: number[] = [1486634299626, 1486984453104, 1486634300626];
    return Promise.resolve(relationList);
  }
  getRelation(owner: String, other: String, relationId: number): Promise<Relation> {
    const relation: Relation[] = [
      {
        'date': 1486634299626,
        'working': 5,
        'confidential': 6,
        'loyalty': 8,
        'trust': 5,
        'respect': 6,
        'funny': 0,
        'affection': 10
      },
      {
        'date': 1486984453104,
        'working': 6,
        'confidential': 0,
        'loyalty': 7,
        'trust': 10,
        'respect': 5,
        'funny': 5,
        'affection': 5
      },
        {
          'date': 1486634300626,
          'working': 4,
          'confidential': 5,
          'loyalty': 7,
          'trust': 4,
          'respect': 5,
          'funny': 2,
          'affection': 5
        }
    ];
    return Promise.resolve(relation.filter(r => r.date === relationId)[0]);
  }
}
