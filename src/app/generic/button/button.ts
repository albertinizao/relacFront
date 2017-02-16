import { Output,EventEmitter } from '@angular/core';


export class Button {
  public message: string;
  public glyphicon: string;
  public fa: string;
  public routerLink: string[];
  @Output() onClick: Function;
  @Output() click: EventEmitter<any> = new EventEmitter();

  constructor(message: string, glyphicon: string, fa: string, routerLink: string[] = null, onClick: Function) {
    this.message = message;
    this.glyphicon = glyphicon;
    this.fa = fa;
    this.routerLink = routerLink;
    this.onClick = onClick;
  }

  public prueba(): void{
    alert("prueba");
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
