import { Relation } from '../../data/relation';
import { Component, Input } from '@angular/core';


@Component({
  moduleId: module.id,
  selector: 'app-relationship-resume',
  templateUrl: './relationshipresume.component.html',
  styleUrls: ['./relationshipresume.component.css']
})
export class RelationshipResumeComponent  {
  @Input() name: String;
  @Input() relation: Relation = new Relation();
}
