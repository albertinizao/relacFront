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

  public buttonHome: Button = new Button('Home', 'home', null, ['/'], null);
  public buttonGame: Button;
  public buttonCancel: Button;
  public buttonCharacter: Button;
  public buttonSave: Button = new Button('Save', 'save', null, null, this.save);


  constructor(
    public characterSelectedService: CharacterSelectedService,
    public relationService: RelationService,
    private route: ActivatedRoute,
    private datePipe: DatePipe,
    private router:Router
  ) { }


  public save():void{
    this.relation.date=new Date().getTime();
    this.relationService.saveRelation(this.ownerName, this.otherName, this.relation)
    .subscribe(response => {if (response){this.router.navigateByUrl('/'+AppSettings.API_GAME+'/'+this.game+'/'+AppSettings.API_CHARACTER+'/'+this.ownerName+'/'+AppSettings.API_RELATIONSHIP+'/'+this.otherName);}});
  }



    ngOnInit(): void {
      this.relation = new Relation();
      this.route.params.subscribe(param => {
        this.characterSelectedService.characterSelected = param['characterName'];
        this.ownerName = this.characterSelectedService.characterSelected;
        this.game = param['game'];
        this.otherName = param['other'];
        if (this.game && this.game!='null'){
          this.buttonGame = new Button(''+this.game, 'book', null, ['/'+AppSettings.API_GAME+'/'+this.game], null);
        }
        this.buttonCancel = new Button('Cancel', 'remove', null, ['/'+AppSettings.API_GAME+'/'+this.game+'/'+AppSettings.API_CHARACTER+'/'+this.ownerName+'/'+AppSettings.API_RELATIONSHIP+'/'+this.otherName], null);
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
