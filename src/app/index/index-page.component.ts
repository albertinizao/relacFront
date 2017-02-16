import 'rxjs/add/operator/switchMap';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { CharacterService } from '../character/services/character.service';

@Component({
  moduleId: module.id,
  selector: 'app-index-page',
  templateUrl: './index-page.component.html',
  styleUrls: ['./index-page.component.css']
})
export class IndexPageComponent implements OnInit {
  characters: String[] = [
    'Federico', 'Juancho', 'Paquito', 'Mariano', 'Alberto', 'Fernando', 'Enrique', 'Antonio', 'María', 'Maria', 'María Mercedes', 'Björn', 'Lars', 'Erick', 'Gunnar', 'Ingeborg', 'Skyler'
  ];
  // public character: GenericCharacter;
  //
  // public buttonHome: Button = new Button('Home', 'home', null, ['../../'], null);
  // public buttonNew: Button = new Button('New', 'plus', null, ['new'], null);
  //
  constructor(
    private characterService: CharacterService
  //   private route: ActivatedRoute,
  //   private location: Location
  ) { }

  ngOnInit(): void {
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
