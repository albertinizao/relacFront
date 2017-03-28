import { Component } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title = 'app works!';
  loaded:boolean = false;

  constructor(translate: TranslateService) {
        translate.addLangs(["es", "en"]);
      // this language will be used as a fallback when a translation isn't found in the current language
      translate.setDefaultLang('en');

      let browserLang = translate.getBrowserLang();
       // the lang to use, if the lang isn't available, it will use the current loader to get them
      translate.use(browserLang.match(/en|es/) ? browserLang : 'en');
  }
}



export class AppSettings {
   public static API_ENDPOINT='https://pacific-atoll-54145.herokuapp.com/';
    // public static API_ENDPOINT='http://localhost:8080/';
   public static API_GAME='game';
   public static API_CHARACTER='character';
   public static API_RELATIONSHIP='relationship';
   public static API_RELATION='relation';
   public static API_LOGIN='login';
   public static API_USER='user';
}
