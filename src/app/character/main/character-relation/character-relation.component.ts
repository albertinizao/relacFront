import { Button } from "../../../generic/button/button";
import 'rxjs/add/operator/switchMap';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Location } from '@angular/common';
import { RelationService } from '../../services/relation.service';
import { AppSettings }          from '../../../app.component';

@Component({
  selector: 'app-character-relation',
  templateUrl: './character-relation.component.html',
  styleUrls: ['./character-relation.component.css', '../../../generic/button/button.component.css']
})
export class CharacterRelationComponent implements OnInit {
  public ownerName: String;
  public newName: String;
  public game: String;

  public buttonHome: Button;
  public buttonGame: Button;
  public buttonCancel: Button;
  public buttonSave: Button;

  constructor(
    private route: ActivatedRoute,
    private relationService: RelationService,
    private router:Router
  ) { }

  ngOnInit(): void {

      this.route.params.subscribe(param => {
        this.ownerName = param['characterName'];
        this.game = param['game'];});
        this.buttonHome = new Button('Home', 'home', null, ['/'], null);
        if (this.game && this.game!='null'){
          this.buttonGame= new Button(''+this.game, 'book', null, ['/'+AppSettings.API_GAME+'/'+this.game], null);
        }
        this.buttonCancel = new Button('Cancel', 'remove', null, ['/'+AppSettings.API_GAME+'/'+this.game+'/'+AppSettings.API_CHARACTER+'/'+this.ownerName], null);
        this.buttonSave = new Button('Save', 'save', null, ['/'+AppSettings.API_GAME+'/'+this.game+'/'+AppSettings.API_CHARACTER+'/'+this.ownerName+'/'+AppSettings.API_RELATIONSHIP], this.save);
  }

  save(): void{
    this.relationService.createRelationWith(this.ownerName,this.newName)
          .subscribe(response => {if (response){this.router.navigateByUrl(this.buttonSave.routerLink[0]+'/'+this.newName);}});
  }

  buildRouterLink(): Array<String>{
    if (this.newName){
      return ['../','relationship',this.newName];
    }else{
      return ['../','relationship'];
    }
  }
}
