import 'rxjs/add/operator/switchMap';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Location } from '@angular/common';
import { Button } from '../../generic/button/button';
import { CharacterService } from '../services/character.service';
import { CharacterSelectedService } from '../services/character-selected.service';

@Component({
  selector: 'app-list-page',
  templateUrl: './list-page.component.html',
  styleUrls: ['./list-page.component.css']
})
export class ListPageComponent implements OnInit {
  characters: String[];
  game:String;
  errorMessage: string;

  public buttonNew: Button = new Button('New', 'plus', null, ['new'], null, true);
  public buttonNewNotLogged: Button = new Button('New', 'plus', null, ['new'], null, false);
  public buttonHome: Button = new Button('Home', 'home', null, ['/'], null);

  constructor(
    private route: ActivatedRoute,
    public characterSelectedService: CharacterSelectedService,
    private characterService: CharacterService,
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
    let message = "";
    if (this.game){
      message = this.game + ' ';
    }else{
      message = 'All ';
    }
    message = message + " character's list.";
    return message.charAt(0).toUpperCase() + message.substr(1).toLowerCase();
  }

  public getSubtittle():string{
    let message = "All the characters";
    if (this.game){
      message = message + " from "+this.game;
    }
    message = message + '.';
    return message;
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
