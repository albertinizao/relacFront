
import { Component, Input } from '@angular/core';
declare let require: any;
@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html'
})
export class LoadingComponent  {
  private IMAGE = require("./loading.gif");
  @Input() loaded:boolean;
}
