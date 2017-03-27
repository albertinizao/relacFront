import { HelpBox } from './helpBox'
import { Component, Input } from '@angular/core';
@Component({
  selector: 'app-help-box',
  templateUrl: './helpBox.component.html',
  styleUrls: ['./helpBox.component.css']
})
export class HelpBoxComponent {
  @Input() title: string;
  @Input() paragraphs: string[];
}
