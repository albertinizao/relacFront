import { Component, Input } from '@angular/core';
@Component({
  moduleId: module.id,
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.css']
})
export class TitleComponent {
  @Input() title: String;
  @Input() subtitle: String;
}
