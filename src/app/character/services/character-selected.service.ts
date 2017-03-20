
import { Injectable } from '@angular/core';


@Injectable()
export class CharacterSelectedService {
  characterSelected: string;
  relationshipSelected: string;
  relationSelected: string;
  ownCharacters: String[];

  public characterIsOwn():boolean{
    return this.ownCharacters && this.ownCharacters.indexOf(this.characterSelected)>-1;
  }
}
