import { Component, Output, Input, OnInit, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-relation-single-update',
  templateUrl: './relation-single-update.component.html',
  styleUrls: ['./relation-single.component.css', '../../../generic/relationColors.css']
})
export class RelationSingleUpdateComponent {
  @Input() value: String;
  @Input() name: String;
  @Output() notify: EventEmitter<string> = new EventEmitter<string>();

}
