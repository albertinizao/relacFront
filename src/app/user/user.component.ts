
import { Button } from "../generic/button/button";
import 'rxjs/add/operator/switchMap';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Location } from '@angular/common';
import { User } from './user';
import { UserService } from './user.service';
import { AppSettings }          from '../app.component';
import {TranslateService} from '@ngx-translate/core';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css', '../generic/button/button.component.css']
})
export class UserComponent {
  user: User;
  username: string;
  password: string;
  validated: boolean = false;
  minLength = {length:'5'};

  public buttonHome: Button = new Button('BUTTON.HOME', 'home', null, ['/'], null);
  public buttonCancel: Button = new Button('BUTTON.CANCEL', 'remove', null, ['/'], null);
  public buttonSave: Button = new Button('BUTTON.SAVE', 'save', null, ['/'], this.save);

  constructor(
    public router: Router,
    public userService: UserService,
    private translateService: TranslateService,
    private flashMessagesService: FlashMessagesService
  ) { }



  save(): void{
    if (this.username && this.password && this.password.length>4){
      this.user = new User();
      this.user.username=this.username;
      this.user.password=this.password;
      this.userService.createUser(this.user)
            .subscribe(this.onSuccess, this.onFailure);
    }
    this.validated=true;
  }
 onSuccess = (response) => {
    let message;
    if (response){
      this.translateService.get('MESSAGES.SAVE.CORRECT').subscribe(m=>message=m);
      this.flashMessagesService.show(message, { cssClass: 'alert alert-dismissible alert-success', timeout: 10000  } );
      this.router.navigate(['']);
    }
  }
 onFailure = (error) => {
    let message;
    try{
      alert(error)
      this.translateService.get('MESSAGES.'+error.status).subscribe(m=>message=m);
    }catch(errorNew){
      this.translateService.get('MESSAGES.SAVE.INCORRECT').subscribe(m=>message=m);
    }
    this.flashMessagesService.show(message, { cssClass: 'alert alert-dismissible alert-danger', timeout: 10000  } );
  }

}
