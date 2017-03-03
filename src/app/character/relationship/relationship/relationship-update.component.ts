import { Button } from '../../../generic/button/button'
import { Relation } from '../../data/relation'
import { Relationship } from '../../data/relationship';
import { ActivatedRoute, Params } from '@angular/router';
import { Component, Input, OnInit } from '@angular/core';
import { CharacterSelectedService } from '../../services/character-selected.service';
import { RelationService } from '../../services/relation.service';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { DatePipe } from '@angular/common';


@Component({
  moduleId: module.id,
  selector: 'app-relationship-update',
  templateUrl: './relationship-update.component.html',
  styleUrls: ['./relationship.component.css', '../../../generic/button/button.component.css']
})
export class RelationshipUpdateComponent implements OnInit {

  public ownerName: string;
  public otherName: string;
  public relation: Relation = new Relation();

  public buttonHome: Button = new Button('Home', 'home', null, ['../../../../../'], null);
  public buttonCancel: Button = new Button('Cancel', 'remove', null, ['../'], null);
  public buttonCharacter: Button = new Button('Character', 'user', null, ['../../../'], null);
  public buttonSave: Button = new Button('Save', 'save', null, ['../'], this.save);


  constructor(
    public characterSelectedService: CharacterSelectedService,
    public relationService: RelationService,
    private route: ActivatedRoute,
    private datePipe: DatePipe
  ) { }


  public save(event):void{
    this.relation.date=new Date().getTime();
    alert(JSON.stringify(this.relation));
  }



    ngOnInit(): void {
      this.relation = new Relation();
      this.route.params.subscribe(param => {
        this.characterSelectedService.characterSelected = param['characterName'];
        this.ownerName = this.characterSelectedService.characterSelected;
        this.otherName = param['other'];
        this.relationService.getRelationList(this.ownerName, this.otherName).subscribe(relIds => {
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
        });
      });
    }
}
