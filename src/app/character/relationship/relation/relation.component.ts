import { Relation } from '../../data/relation';
import { Component, Input } from '@angular/core';


@Component({
  selector: 'app-relation',
  templateUrl: './relation.component.html',
  styleUrls: ['./relation.component.css']
})
export class RelationComponent  {
  @Input() relation: Relation;
}
