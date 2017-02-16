import { Relation } from '../../data/relation';
import { Component, Input } from '@angular/core';


@Component({
  moduleId: module.id,
  selector: 'app-relation',
  templateUrl: './relation.component.html',
  styleUrls: ['./relation.component.css']
})
export class RelationComponent  {
  @Input() relation: Relation;
}
