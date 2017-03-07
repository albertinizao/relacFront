import { Relation } from '../../data/relation';
import { Component, Input } from '@angular/core';


@Component({
  selector: 'app-relationship-resume-update',
  templateUrl: './relationshipresume-update.component.html',
  styleUrls: ['./relationshipresume.component.css']
})
export class RelationshipResumeUpdateComponent  {
  @Input() name: String;
  @Input() relation: Relation;
}
