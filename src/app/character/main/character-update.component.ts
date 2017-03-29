import { CharacterService } from "../services/character.service";
import { GameService } from "../services/game.service";
import { Button } from "../../generic/button/button";
import 'rxjs/add/operator/switchMap';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Location } from '@angular/common';
import { GenericCharacter } from '../data/genericcharacter'
import { AutoCompleteModule } from 'primeng/primeng';
import { AppSettings }          from '../../app.component';

@Component({
  selector: 'app-character-update',
  templateUrl: './character-update.component.html',
  styleUrls: ['./character-update.component.css', '../../generic/button/button.component.css']
})
export class CharacterUpdateComponent implements OnInit  {
  public newName: String;
  public character:GenericCharacter;
  public gameGiven:boolean = false;
  public suggestedGames: String[];
  public validated:boolean=false;

  public buttonHome: Button = new Button('BUTTON.HOME', 'home', null, ['/'], null);
  public buttonCancel;
  public buttonSave;

    constructor(
      private route: ActivatedRoute,
      private gameService: GameService,
      private characterService: CharacterService,
      private router:Router
    ) { }

  save(): void{
    this.validated=false;
    if (this.character.name){
      this.character.relationships=null;
      this.characterService.create(this.character.name, this.character).subscribe(response => {if (response){this.router.navigateByUrl(this.buildCharacterLink()+'/'+AppSettings.API_CHARACTER+'/'+this.character.name);}});
    }
    this.validated=true;
  }

  ngOnInit(): void {
    this.route.params.subscribe(param => {
      this.character = new GenericCharacter();
      this.character.game = param['game'];
      this.gameGiven = this.character.game!=null;
      this.buttonCancel = new Button('BUTTON.CANCEL', 'remove', null, [this.buildCharacterLink()], null);
      this.buttonSave = new Button('BUTTON.SAVE', 'save', null, [this.buildCharacterLink()], null);
    });
    this.gameService.getGames().subscribe(games => {
      this.suggestedGames=games;
    })
  }
  buildCharacterLink():string{
    if (this.character.game){
      return '/'+AppSettings.API_GAME+'/'+this.character.game;
    }else{
      return '';
    }
  }

  buildRouterLink(): Array<String>{
    if (this.character){
      return [this.buildCharacterLink()+'/character',this.character.name];
    }else{
      return [this.buildCharacterLink()+'/character'];
    }
  }
}
