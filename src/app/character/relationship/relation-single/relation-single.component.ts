import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-relation-single',
  templateUrl: './relation-single.component.html',
  styleUrls: ['./relation-single.component.css', '../../../generic/relationColors.css']
})
export class RelationSingleComponent implements OnInit {
  @Input() value: String;
  @Input() valueActual = 0;
  @Input() name: String;

  ngOnInit() {
    this.timeout();
  }

  timeout() {
    if (this.valueActual < +this.value) {
      setTimeout(() => { this.valueActual = this.valueActual + 1; this.timeout(); }, 100);
    }
  }


}
