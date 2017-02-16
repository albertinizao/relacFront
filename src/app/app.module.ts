import { LineChartComponent } from './generic/chart/line-chart.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
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
import { RelationshipUpdateComponent } from './character/relationship/relationship/relationship-update.component';
import { ButtonComponent } from './generic/button/button.component'
import { CharacterRelationComponent } from "./character/main/character-relation/character-relation.component";
import { CharacterUpdateComponent } from "./character/main/character-update.component";
import { IndexPageComponent } from "./index/index-page.component";
import { LoginComponent } from './login/login.component';


import { CharacterSelectedService } from './character/services/character-selected.service';
import { CharacterService } from './character/services/character.service';
import { RelationService } from './character/services/relation.service';

const appRoutes: Routes = [
  // { path: '', redirectTo: '/index'},
  { path: '', component: IndexPageComponent , canActivate : [CanActivateViaOAuthGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'new', component: CharacterUpdateComponent , canActivate : [CanActivateViaOAuthGuard]  },
  { path: 'character/:characterName', component: MainCharacterComponent , canActivate : [CanActivateViaOAuthGuard]  },
  { path: 'character/:characterName/new', component: CharacterRelationComponent , canActivate : [CanActivateViaOAuthGuard]  },
  { path: 'character/:characterName/relationship/:other', component: RelationshipComponent , canActivate : [CanActivateViaOAuthGuard]  },
  { path: 'character/:characterName/relationship/:other/new', component: RelationshipUpdateComponent , canActivate : [CanActivateViaOAuthGuard]  }
];


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
    LineChartComponent,
    RelationUpdateComponent,
    RelationSingleUpdateComponent,
    RelationshipResumeUpdateComponent,
    CharacterRelationComponent,
    CharacterUpdateComponent,
    IndexPageComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    Angular2FontawesomeModule,
    ChartsModule

  ],
  providers: [CharacterSelectedService, CharacterService, RelationService, DatePipe, CanActivateViaOAuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
