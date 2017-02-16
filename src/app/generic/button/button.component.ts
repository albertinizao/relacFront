import { Button } from './button'
import { Component, Input } from '@angular/core';
@Component({
  moduleId: module.id,
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent {
  @Input() public button: Button;
}
