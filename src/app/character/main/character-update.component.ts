import { CharacterService } from "../services/character.service";
import { GameService } from "../services/game.service";
import { Button } from "../../generic/button/button";
import 'rxjs/add/operator/switchMap';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Location } from '@angular/common';
import { GenericCharacter } from '../data/genericcharacter'
import { CharacterSelectedService } from '../services/character-selected.service';
import { AutoCompleteModule } from 'primeng/primeng';
import { AppSettings }          from '../../app.component';
import {TranslateService} from '@ngx-translate/core';
import { FlashMessagesService } from 'angular2-flash-messages';

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
      private router:Router,
      private translateService: TranslateService,
      private flashMessagesService: FlashMessagesService,
        public characterSelectedService: CharacterSelectedService,
    ) { }

  save(): void{
    this.validated=false;
    if (this.character.name){
      this.character.relationships=null;
      this.characterService.create(this.character.name, this.character).subscribe(this.onSuccess, this.onFailure);
    }
    this.validated=true;
  }
 onSuccess = (response) => {
    let message;
    if (response){

      let user = localStorage.getItem("username");
      if (user){
        this.characterService.getCharacters(user, null).subscribe(
                         characters => {
                           this.characterSelectedService.ownCharacters = characters;
                           this.translateService.get('MESSAGES.SAVE.CORRECT').subscribe(m=>message=m);
                           this.flashMessagesService.show(message, { cssClass: 'alert alert-dismissible alert-success', timeout: 10000  } );
                           this.router.navigateByUrl(this.buildCharacterLink()+'/'+AppSettings.API_CHARACTER+'/'+this.character.name);
                         });
      }
    }
  }
 onFailure = (error) => {
    let message;
    try{
      this.translateService.get('MESSAGES.'+error.status).subscribe(m=>message=m);
    }catch(errorNew){
      this.translateService.get('MESSAGES.SAVE.INCORRECT').subscribe(m=>message=m);
    }
    this.flashMessagesService.show(message, { cssClass: 'alert alert-dismissible alert-danger', timeout: 10000  } );
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
