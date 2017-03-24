import { Output,EventEmitter } from '@angular/core';


export class Button {
  public message: string;
  public glyphicon: string;
  public fa: string;
  public routerLink: string[];
  public access: boolean;
  @Output() onClick: Function;
  @Output() click: EventEmitter<any> = new EventEmitter();

  constructor(message: string, glyphicon: string, fa: string, routerLink: string[] = null, onClick: Function, access: boolean=true) {
    this.message = message;
    this.glyphicon = glyphicon;
    this.fa = fa;
    this.routerLink = routerLink;
    this.onClick = onClick;
    this.access = access;
  }


  public getStyle(): String {
    if (this.glyphicon) {
      return 'glyphicon glyphicon-' + this.glyphicon;
    } else if (this.fa) {
      return 'fa fa-' + this.fa;
    }
    return '';
  }
}
