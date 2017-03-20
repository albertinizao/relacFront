import { LoginService } from "./login.service";
import { Component, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Rx';
import { Login } from './login';
import { CharacterService } from '../character/services/character.service';
import { CharacterSelectedService } from '../character/services/character-selected.service';

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


  constructor(router: Router, loginService: LoginService, characterSelectedService: CharacterSelectedService, characterService: CharacterService) {
    this.characterSelectedService=characterSelectedService,
    this.characterService=characterService;
    this.router=router,
    this.loginService=loginService;
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

 onSuccess = (token) => {
     if(token ) {
         //Store the token in the db
         localStorage.setItem("token",token);
         localStorage.setItem("username",this.user);
         this.reload();
     } else {
       this.logout();
     }
    //  location.reload();
 };

 onFailure = (error) => {
   alert("error: "+error);
   this.user="";
   this.password="";
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
   this.reload();
  //  location.reload();
 }

 public reload():void{
   let user = localStorage.getItem("username");
   if (user){
     this.characterService.getCharacters(user).subscribe(
                      characters => this.characterSelectedService.ownCharacters = characters);
    }else{
      this.characterSelectedService.ownCharacters = null;
    }
   this.router.navigate(['']);
 }
}
