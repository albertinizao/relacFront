import { LoginService } from "./login.service";
import { Component, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Rx';
import { Login } from './login';
import { CharacterService } from '../character/services/character.service';
import { CharacterSelectedService } from '../character/services/character-selected.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'my-login',
  templateUrl: './login.html',
  styleUrls:  ['./login.css','../generic/button/button.component.css']
})
export class LoginComponent {

  public user: string = "";
  public password: string = "";
  public loginDisabled = false;
  router: Router;
  loginService: LoginService;
  characterSelectedService: CharacterSelectedService;
  private characterService: CharacterService;
  private flashMessagesService: FlashMessagesService;
  private translateService:TranslateService;
  public welcome={user:localStorage.getItem("username")};


  constructor(router: Router, loginService: LoginService, characterSelectedService: CharacterSelectedService,
              characterService: CharacterService, flashMessagesService: FlashMessagesService,
              translateService: TranslateService) {
    this.characterSelectedService=characterSelectedService,
    this.characterService=characterService;
    this.router=router,
    this.loginService=loginService;
    this.flashMessagesService=flashMessagesService;
    this.translateService=translateService;
  }

 login() {
   let login: Login = new Login();
   login.username=this.user;
   login.password=this.password;
   this.loginDisabled=true;
   try{
     this.loginService.login(login).subscribe(this.onSuccess,this.onFailure);
   }finally{
     this.loginDisabled=false;
   }
   this.loginDisabled=false;
 }

register() {
  this.router.navigateByUrl('user');
}

 onSuccess = (token) => {
     if(token ) {
         //Store the token in the db
         localStorage.setItem("token",token);
         localStorage.setItem("username",this.user);
         let message;
         this.translateService.get('MESSAGES.LOGIN.CORRECT',{username:this.user}).subscribe(m=>message=m);
         this.flashMessagesService.show(message, { cssClass: 'alert alert-dismissible alert-success', timeout: 5000  } );
         this.welcome={user:localStorage.getItem("username")};
         this.reload();
     } else {
       this.logout();
     }
 };

 onFailure = (error) => {
   this.user="";
   this.password="";
   let message;
   this.translateService.get('MESSAGES.LOGIN.INVALID').subscribe(m=>message=m);
   this.flashMessagesService.show(message, { cssClass: 'alert alert-dismissible alert-danger', timeout: 5000  } );
 }

 public isLogged():boolean{
   return (localStorage.getItem("token") === null) ? false : true;
 }

 public getToken():String{
   return localStorage.getItem("token");
 }

 public logout():void{
   localStorage.removeItem("username");
   localStorage.removeItem("token");
   let message;
   this.translateService.get('MESSAGES.LOGIN.LOGOUT').subscribe(m=>message=m);
   this.flashMessagesService.show(message, { cssClass: 'alert alert-dismissible alert-success', timeout: 5000  } );
   this.reload();
  //  location.reload();
 }

 public reload():void{
   let user = localStorage.getItem("username");
   if (user){
     this.characterService.getCharacters(user, null).subscribe(
                      characters => this.characterSelectedService.ownCharacters = characters);
    }else{
      this.characterSelectedService.ownCharacters = null;
    }
   this.router.navigate(['']);
 }
}
