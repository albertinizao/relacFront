import { Relation } from '../../data/relation';
import { Component, Input } from '@angular/core';


@Component({
  moduleId: module.id,
  selector: 'app-relation-update',
  templateUrl: './relation-update.component.html',
  styleUrls: ['./relation.component.css']
})
export class RelationUpdateComponent  {
  @Input() relation: Relation;
  public change(event, type):void{
    if (type==='working'){
      this.relation.working=event;
    }else if (type==='confidential'){
      this.relation.confidential=event;
    }else if (type==='loyalty'){
      this.relation.loyalty=event;
    }else if (type==='trust'){
      this.relation.trust=event;
    }else if (type==='respect'){
      this.relation.respect=event;
    }else if (type==='funny'){
      this.relation.funny=event;
    }else if (type==='affection'){
      this.relation.affection=event;
    }
  };
}
