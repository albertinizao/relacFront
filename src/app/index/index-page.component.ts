import 'rxjs/add/operator/switchMap';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { CharacterService } from '../character/services/character.service';
import { CharacterSelectedService } from '../character/services/character-selected.service';

@Component({
  selector: 'app-index-page',
  templateUrl: './index-page.component.html',
  styleUrls: ['./index-page.component.css']
})
export class IndexPageComponent implements OnInit {
  characters: String[];
  errorMessage: string;
  loaded: boolean=false;

  constructor(
    public characterSelectedService: CharacterSelectedService,
    private characterService: CharacterService
  ) { }

  ngOnInit(): void {
    this.characterSelectedService.characterSelected=null;
    this.characterSelectedService.relationshipSelected=null;
    this.characterSelectedService.relationSelected=null;
    this.loaded=false;
    this.characterService.getCharacters(null).subscribe(
                     characters => {this.characters = characters;this.loaded=true;},
                     error =>  {this.errorMessage = <any>error;this.loaded=true;});
  }

  public toColor(str):String {
    var hash = 0;
    for (var i = 0; i < str.length; i++) {
      hash = str.charCodeAt(i) + ((hash << 5) - hash);
    }
    var colour = '#';
    for (var i = 0; i < 3; i++) {
      var value = (hash >> (i * 8)) & 0xFF;
      colour += ('00' + value.toString(16)).substr(-2);
    }
    return colour;
  }
}
