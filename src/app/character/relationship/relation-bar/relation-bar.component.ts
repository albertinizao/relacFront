import { Component, Input, state, trigger, transition, style, animate } from '@angular/core';


@Component({
  selector: 'app-relation-bar',
  templateUrl: './relation-bar.component.html',
  styleUrls: ['./relation-bar.component.css', '../../../generic/relationColors.css'],
  animations: [
    trigger(
      'enterAnimation', [
        state('*', style({ 'width': '100%' })),
        state('void', style({ 'width': '0%' })),
        transition('* => void', [
          style({ width: '*' }),
          animate(1000, style({ width: 0 }))
        ]),
        transition('void => *', [
          style({ width: '0' }),
          animate(1000, style({ width: '*' }))
        ])
      ]
    )
  ]
})
export class RelationBarComponent {
  @Input() value: String;
  @Input() name: String;
  show: boolean = false;
}
