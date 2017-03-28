import 'rxjs/add/operator/switchMap';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Location } from '@angular/common';
import { Button } from '../../generic/button/button';
import { CharacterService } from '../services/character.service';
import { CharacterSelectedService } from '../services/character-selected.service';
import {TranslateService} from '@ngx-translate/core';
import { Observable } from 'rxjs/Observable';


@Component({
  selector: 'app-list-page',
  templateUrl: './list-page.component.html',
  styleUrls: ['./list-page.component.css']
})
export class ListPageComponent implements OnInit {
  characters: String[];
  game:String;
  errorMessage: string;

  public buttonNew: Button = new Button('BUTTON.NEW', 'plus', null, ['new'], null, true);
  public buttonNewNotLogged: Button = new Button('BUTTON.NEW', 'plus', null, ['new'], null, false);
  public buttonHome: Button = new Button('BUTTON.HOME', 'home', null, ['/'], null);

  constructor(
    private route: ActivatedRoute,
    public characterSelectedService: CharacterSelectedService,
    private characterService: CharacterService,
    private translateService: TranslateService
  ) { }

  ngOnInit(): void {

    this.route.params.subscribe(param => {
      this.game = param['game'];});
    this.characterSelectedService.characterSelected=null;
    this.characterSelectedService.relationshipSelected=null;
    this.characterSelectedService.relationSelected=null;
    this.characterService.getCharacters(null, this.game).subscribe(
                     characters => {this.characters = characters;},
                     error =>  {this.errorMessage = <any>error;});

     let user = localStorage.getItem("username");
     if (user){
       this.characterService.getCharacters(user, null).subscribe(
                        characters => this.characterSelectedService.ownCharacters = characters,
                        error =>  this.errorMessage = <any>error);
      }
  }

  public getTittle():string{
    let obs:Observable<string>;
    if (this.game){
      obs = this.translateService.get('HEADER.LIST.TITLE.WITHGAME', {game: this.game.charAt(0).toUpperCase() + this.game.substr(1).toLowerCase()});
    }else{
      obs = this.translateService.get('HEADER.LIST.TITLE.WITHOUTGAME');
    }
    var result;
    obs.subscribe(m=>result=m);
    return result;
  }

  public getSubtittle():string{
    let obs:Observable<string>;
    if (this.game){
      obs = this.translateService.get('HEADER.LIST.SUBTITLE.WITHGAME', {game: this.game.charAt(0).toUpperCase() + this.game.substr(1).toLowerCase()});
    }else{
      obs = this.translateService.get('HEADER.LIST.SUBTITLE.WITHOUTGAME');
    }
    var result;
    obs.subscribe(m=>result=m);
    return result;
  }

  public isLogged():boolean{
    return (localStorage.getItem("token") === null) ? false : true;
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
