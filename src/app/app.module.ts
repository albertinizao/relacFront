import { LineChartComponent } from './generic/chart/line-chart.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, Http } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { Angular2FontawesomeModule } from 'angular2-fontawesome/angular2-fontawesome';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { DatePipe } from '@angular/common';

import { CanActivateViaOAuthGuard } from './oAuth.canActivateGuard';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { MainCharacterComponent } from './character/main/maincharacter.component';
import { RelationBarComponent } from './character/relationship/relation-bar/relation-bar.component'
import { RelationSingleComponent } from './character/relationship/relation-single/relation-single.component'
import { RelationSingleUpdateComponent } from './character/relationship/relation-single/relation-single-update.component'
import { RelationComponent } from './character/relationship/relation/relation.component'
import { RelationUpdateComponent } from './character/relationship/relation/relation-update.component'
import { TitleComponent } from './generic/title/title.component';
import { RelationshipResumeComponent } from './character/relationship/resume/relationshipresume.component';
import { RelationshipResumeUpdateComponent } from './character/relationship/resume/relationshipresume-update.component';
import { RelationshipComponent } from './character/relationship/relationship/relationship.component';
import { RelationHelpComponent } from './character/relationship/relationHelp/relationHelp.component';
import { RelationshipUpdateComponent } from './character/relationship/relationship/relationship-update.component';
import { ButtonComponent } from './generic/button/button.component';
import { HelpBoxComponent } from './generic/helpBox/helpBox.component';
import { LoadingComponent } from './generic/loading/loading.component';
import { CharacterRelationComponent } from "./character/relationship/character-relation/character-relation.component";
import { CharacterUpdateComponent } from "./character/main/character-update.component";
import { ListPageComponent } from "./character/list/list-page.component";
import { IndexPageComponent } from "./index/index-page.component";
import { LoginComponent } from './login/login.component';
import { WithoutgameComponent } from "./character/withoutgame/withoutgame.component";
import { UserComponent } from './user/user.component';


import { CharacterSelectedService } from './character/services/character-selected.service';
import { CharacterService } from './character/services/character.service';
import { RelationService } from './character/services/relation.service';
import { GameService } from './character/services/game.service';
import { LoginService } from './login/login.service';
import { UserService } from './user/user.service';

import { Ng2AutoCompleteModule } from 'ng2-auto-complete';
import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import { FlashMessagesModule } from 'angular2-flash-messages';

const appRoutes: Routes = [
  { path: '', component: IndexPageComponent },
  { path: 'user', component: UserComponent },
  { path: 'new', component: CharacterUpdateComponent , canActivate : [CanActivateViaOAuthGuard]  },
  { path: 'character', component: ListPageComponent },
  { path: 'character/:characterName', component: WithoutgameComponent },
  { path: 'game/:game', component: ListPageComponent },
  { path: 'game/:game/new', component: CharacterUpdateComponent , canActivate : [CanActivateViaOAuthGuard]  },
  { path: 'game/:game/character/:characterName', component: MainCharacterComponent },
  { path: 'game/:game/character/:characterName/new', component: CharacterRelationComponent , canActivate : [CanActivateViaOAuthGuard]  },
  { path: 'game/:game/character/:characterName/relationship/:other', component: RelationshipComponent  },
  { path: 'game/:game/character/:characterName/relationship/:other/new', component: RelationshipUpdateComponent , canActivate : [CanActivateViaOAuthGuard]  }
];


// AoT requires an exported function for factories
export function HttpLoaderFactory(http: Http) {
    return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    MainCharacterComponent,
    TitleComponent,
    RelationshipResumeComponent,
    RelationComponent,
    RelationSingleComponent,
    RelationBarComponent,
    RelationshipComponent,
    RelationshipUpdateComponent,
    ButtonComponent,
    HelpBoxComponent,
    LineChartComponent,
    RelationUpdateComponent,
    RelationSingleUpdateComponent,
    RelationshipResumeUpdateComponent,
    CharacterRelationComponent,
    CharacterUpdateComponent,
    ListPageComponent,
    LoginComponent,
    LoadingComponent,
    UserComponent,
    IndexPageComponent,
    WithoutgameComponent,
    RelationHelpComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    Angular2FontawesomeModule,
    ChartsModule,
    Ng2AutoCompleteModule,
    FlashMessagesModule,
    TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: HttpLoaderFactory,
                deps: [Http]
            }
        })

  ],
  providers: [CharacterSelectedService, CharacterService, RelationService, LoginService, UserService, GameService, DatePipe, CanActivateViaOAuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
