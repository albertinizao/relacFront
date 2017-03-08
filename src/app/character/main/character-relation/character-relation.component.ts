import { Button } from "../../../generic/button/button";
import 'rxjs/add/operator/switchMap';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-character-relation',
  templateUrl: './character-relation.component.html',
  styleUrls: ['./character-relation.component.css', '../../../generic/button/button.component.css']
})
export class CharacterRelationComponent implements OnInit {
  public ownerName: String;
  public newName: String;

  public buttonHome: Button = new Button('Home', 'home', null, ['/'], null);
  public buttonCancel: Button = new Button('Cancel', 'remove', null, ['../'], null);
  public buttonSave: Button = new Button('Save', 'save', null, null, this.save);

  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {

      this.route.params.subscribe(param => {
        this.ownerName = param['characterName'];});
  }

  save(): void{
    alert(JSON.stringify(this.newName));
  }

  buildRouterLink(): Array<String>{
    if (this.newName){
      return ['../','relationship',this.newName];
    }else{
      return ['../','relationship'];
    }
  }
}
