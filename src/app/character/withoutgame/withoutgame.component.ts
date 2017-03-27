import { Relationship } from "../data/relationship";
import { Relation } from "../data/relation";
import { Button } from '../../generic/button/button'
import { GenericCharacter } from '../data/genericcharacter';
import 'rxjs/add/operator/switchMap';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Location } from '@angular/common';
import { CharacterSelectedService } from '../services/character-selected.service';
import { CharacterService } from '../services/character.service';

@Component({
  selector: 'app-withoutgame',
  templateUrl: 'withoutgame.component.html',
  styleUrls: ['withoutgame.component.css']
})
export class WithoutgameComponent implements OnInit {

  constructor(
    public characterSelectedService: CharacterSelectedService,
    private characterService: CharacterService,
    private route: ActivatedRoute,
    private router: Router,
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
        this.router.navigateByUrl('/game/'+character.game+'/character/'+character.name);
      });
  }
}
