import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  loaded:boolean = false;
}



export class AppSettings {
   public static API_ENDPOINT='https://pacific-atoll-54145.herokuapp.com/';
    // public static API_ENDPOINT='http://localhost:8080/';
   public static API_CHARACTER='character';
   public static API_RELATIONSHIP='relationship';
   public static API_RELATION='relation';
   public static API_LOGIN='login';
   public static API_USER='user';
}
