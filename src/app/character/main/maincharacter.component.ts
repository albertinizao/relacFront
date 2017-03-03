import { Relationship } from "../data/relationship";
import { Relation } from "../data/relation";
import { Button } from '../../generic/button/button'
import { GenericCharacter } from '../data/genericcharacter';
import 'rxjs/add/operator/switchMap';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { CharacterSelectedService } from '../services/character-selected.service';
import { CharacterService } from '../services/character.service';

@Component({
  moduleId: module.id,
  selector: 'app-maincharacter',
  templateUrl: './maincharacter.component.html',
  styleUrls: ['./maincharacter.component.css']
})
export class MainCharacterComponent implements OnInit {
  public character: GenericCharacter;
  public loaded=false;

  public buttonHome: Button = new Button('Home', 'home', null, ['../../'], null);
  public buttonNew: Button = new Button('New', 'plus', null, ['new'], null);

  constructor(
    public characterSelectedService: CharacterSelectedService,
    private characterService: CharacterService,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(param => {
      this.characterSelectedService.characterSelected = param['characterName'];
      this.getCharacter();
    });
  }

  getCharacter() {
    this.characterService.getCharacter(this.characterSelectedService.characterSelected)
      .subscribe(character => {
        this.character = character;
        this.character.relationships.forEach((item,indez)=>{
          if (!item.relation){
            item.relation = [new Relation()];
          }
        });
        this.loaded=true;
      });
  }
}
