import { HelpBox } from './helpBox'
import { Component, OnInit } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import { Observable } from 'rxjs/Observable';
@Component({
  selector: 'app-relation-help',
  templateUrl: './relationHelp.component.html',
  styleUrls: ['./relationHelp.component.css', '../../../generic/relationColors.css']
})
export class RelationHelpComponent implements OnInit {
  public messages:string[][] = [
    ["working","",""],
    ["confidential","",""],
    ["loyalty","",""],
    ["trust","",""],
    ["respect","",""],
    ["funny","",""],
    ["affection","",""]
  ];


  constructor(
    private translateService: TranslateService
  ) { }

  ngOnInit(): void {
    for (let i=0;i<this.messages.length;i++){
      this.load(this.messages[i][0],i,1);
      this.load(this.messages[i][0],i,2);
    }
  }

  load(name:string, i:number, j:number){
    if (j==1){
      this.translateService.get('RELATIONS.'+name+'.NAME').subscribe(m=>this.messages[i][j]=m);
    }else if (j==2){
      this.translateService.get('RELATIONS.'+name+'.DESCRIPTION').subscribe(m=>this.messages[i][j]=m);
    }
  }
}
