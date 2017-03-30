import { Button } from "../../../generic/button/button";
import 'rxjs/add/operator/switchMap';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Location } from '@angular/common';
import { RelationService } from '../../services/relation.service';
import { AppSettings }          from '../../../app.component';
import { Observable } from 'rxjs/Observable';
import {TranslateService} from '@ngx-translate/core';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-character-relation',
  templateUrl: './character-relation.component.html',
  styleUrls: ['./character-relation.component.css', '../../../generic/button/button.component.css']
})
export class CharacterRelationComponent implements OnInit {
  public ownerName: String;
  public newName: String;
  public game: String;
  public titleMessage: string;
  public subtitleMessage;
  public validated:boolean=false;

  public buttonHome: Button;
  public buttonGame: Button;
  public buttonCancel: Button;
  public buttonSave: Button;

  constructor(
    private route: ActivatedRoute,
    private relationService: RelationService,
    private router:Router,
    private translateService: TranslateService,
    private flashMessagesService: FlashMessagesService,
  ) { }

  ngOnInit(): void {

      this.route.params.subscribe(param => {
        this.ownerName = param['characterName'];
        this.game = param['game'];});
        this.buttonHome = new Button('BUTTON.HOME', 'home', null, ['/'], null);
        if (this.game && this.game!='null'){
          this.buttonGame= new Button(''+this.game, 'book', null, ['/'+AppSettings.API_GAME+'/'+this.game], null);
        }
        this.buttonCancel = new Button('BUTTON.CANCEL', 'remove', null, ['/'+AppSettings.API_GAME+'/'+this.game+'/'+AppSettings.API_CHARACTER+'/'+this.ownerName], null);
        this.buttonSave = new Button('BUTTON.SAVE', 'save', null, ['/'+AppSettings.API_GAME+'/'+this.game+'/'+AppSettings.API_CHARACTER+'/'+this.ownerName+'/'+AppSettings.API_RELATIONSHIP], this.save);
        this.translateService.get('HEADER.NEWRELATION.TITLE',{character:this.ownerName}).subscribe(m=>this.titleMessage=m);
        this.subtitleMessage = {character:this.ownerName};
  }

  save(): void{
    if (this.newName){
      this.relationService.createRelationWith(this.ownerName,this.newName)
          .subscribe(this.onSuccess,this.onFailure);
    }
    this.validated=true;
  }
 onSuccess = (response) => {
    let message;
    if (response){
      this.translateService.get('MESSAGES.SAVE.CORRECT').subscribe(m=>message=m);
      this.flashMessagesService.show(message, { cssClass: 'alert alert-dismissible alert-success', timeout: 10000  } );
      this.router.navigateByUrl(this.buttonSave.routerLink[0]+'/'+this.newName);
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

  buildRouterLink(): Array<String>{
    if (this.newName){
      return ['../','relationship',this.newName];
    }else{
      return ['../','relationship'];
    }
  }
}
