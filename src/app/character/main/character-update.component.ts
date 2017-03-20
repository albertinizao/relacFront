import { CharacterService } from "../services/character.service";
import { Button } from "../../generic/button/button";
import 'rxjs/add/operator/switchMap';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-character-update',
  templateUrl: './character-update.component.html',
  styleUrls: ['./character-update.component.css', '../../generic/button/button.component.css']
})
export class CharacterUpdateComponent {
  public character: String;
  public newName: String;

  public buttonHome: Button = new Button('Home', 'home', null, ['/'], null);
  public buttonCancel: Button = new Button('Cancel', 'remove', null, ['../'], null);
  public buttonSave: Button = new Button('Save', 'save', null, null, this.save);

    constructor(
      private characterService: CharacterService,
      private router:Router
    ) { }

  save(): void{
    this.characterService.create(this.character).subscribe(response => {if (response){this.router.navigate(['']);}});
  }

  buildRouterLink(): Array<String>{
    if (this.character){
      return ['../','character',this.character];
    }else{
      return ['../','character'];
    }
  }
}
