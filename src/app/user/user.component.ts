
import { Button } from "../generic/button/button";
import 'rxjs/add/operator/switchMap';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Location } from '@angular/common';
import { User } from './user';
import { UserService } from './user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css', '../generic/button/button.component.css']
})
export class UserComponent {
  user: User;
  username: string;
  password: string;

  public buttonHome: Button = new Button('BUTTON.HOME', 'home', null, ['/'], null);
  public buttonCancel: Button = new Button('BUTTON.CANCEL', 'remove', null, ['/'], null);
  public buttonSave: Button = new Button('BUTTON.SAVE', 'save', null, ['/'], this.save);

  constructor(
    public router: Router,
    public userService: UserService
  ) { }



  save(): void{
    this.user = new User();
    this.user.username=this.username;
    this.user.password=this.password;
    this.userService.createUser(this.user)
          .subscribe(response => {if (response){this.router.navigate(['']);}});
  }

}
