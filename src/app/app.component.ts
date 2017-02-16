import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
}



export class AppSettings {
   public static API_ENDPOINT='https://pacific-atoll-54145.herokuapp.com/';
   public static API_CHARACTER='character';
   public static API_RELATIONSHIP='relationship';
}
