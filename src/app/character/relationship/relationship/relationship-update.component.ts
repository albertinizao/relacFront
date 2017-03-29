import { Button } from '../../../generic/button/button'
import { Relation } from '../../data/relation'
import { Relationship } from '../../data/relationship';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Component, Input, OnInit } from '@angular/core';
import { CharacterSelectedService } from '../../services/character-selected.service';
import { RelationService } from '../../services/relation.service';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { DatePipe } from '@angular/common';
import { AppSettings }          from '../../../app.component';
import {TranslateService} from '@ngx-translate/core';
import { FlashMessagesService } from 'angular2-flash-messages';


@Component({
  selector: 'app-relationship-update',
  templateUrl: './relationship-update.component.html',
  styleUrls: ['./relationship.component.css', '../../../generic/button/button.component.css']
})
export class RelationshipUpdateComponent implements OnInit {

  public game: string;
  public ownerName: string;
  public otherName: string;
  public relation: Relation = new Relation();
  public titleParam;
  public subtitleParam;

  //ownerName

  public buttonHome: Button = new Button('BUTTON.HOME', 'home', null, ['/'], null);
  public buttonGame: Button;
  public buttonCancel: Button;
  public buttonCharacter: Button;
  public buttonSave: Button = new Button('BUTTON.SAVE', 'save', null, null, this.save);


  constructor(
    public characterSelectedService: CharacterSelectedService,
    public relationService: RelationService,
    private route: ActivatedRoute,
    private datePipe: DatePipe,
    private router:Router,
    private translateService: TranslateService,
    private flashMessagesService: FlashMessagesService
  ) { }


  public save():void{
    this.relation.date=new Date().getTime();
    this.relationService.saveRelation(this.ownerName, this.otherName, this.relation)
      .subscribe(this.onSuccess, this.onFailure);
  }
 onSuccess = (response) => {
    let message;
    if (response){
      this.translateService.get('MESSAGES.SAVE.CORRECT').subscribe(m=>message=m);
      this.flashMessagesService.show(message, { cssClass: 'alert alert-dismissible alert-success', timeout: 10000  } );
      this.router.navigateByUrl('/'+AppSettings.API_GAME+'/'+this.game+'/'+AppSettings.API_CHARACTER+'/'+this.ownerName+'/'+AppSettings.API_RELATIONSHIP+'/'+this.otherName);
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
      this.relation = new Relation();
      this.route.params.subscribe(param => {
        this.characterSelectedService.characterSelected = param['characterName'];
        this.ownerName = this.characterSelectedService.characterSelected;
        this.game = param['game'];
        this.otherName = param['other'];
        this.titleParam={character: this.otherName};
        this.subtitleParam={owner: this.ownerName, character: this.otherName};
        if (this.game && this.game!='null'){
          this.buttonGame = new Button(''+this.game, 'book', null, ['/'+AppSettings.API_GAME+'/'+this.game], null);
        }
        this.buttonCancel = new Button('BUTTON.CANCEL', 'remove', null, ['/'+AppSettings.API_GAME+'/'+this.game+'/'+AppSettings.API_CHARACTER+'/'+this.ownerName+'/'+AppSettings.API_RELATIONSHIP+'/'+this.otherName], null);
        this.buttonCharacter = new Button(this.ownerName, 'user', null, ['/'+AppSettings.API_GAME+'/'+this.game+'/'+AppSettings.API_CHARACTER+'/'+this.ownerName], null);
        this.relationService.getRelationList(this.ownerName, this.otherName).subscribe(relIds => {
          if(relIds[0]){
              this.relationService.getRelation(this.ownerName, this.otherName, relIds[0]).subscribe(relation => {
                if (relation) {
                  this.relation.working=relation.working;
                  this.relation.confidential=relation.confidential;
                  this.relation.loyalty=relation.loyalty;
                  this.relation.trust=relation.trust;
                  this.relation.respect=relation.respect;
                  this.relation.funny=relation.funny;
                  this.relation.affection=relation.affection;
                }
              });
            }
        });
      });
    }
}
