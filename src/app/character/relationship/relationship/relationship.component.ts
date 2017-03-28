import { Button } from '../../../generic/button/button'
import { Relation } from '../../data/relation'
import { Relationship } from '../../data/relationship';
import { ActivatedRoute, Params } from '@angular/router';
import { Component, Input, OnInit } from '@angular/core';
import { CharacterSelectedService } from '../../services/character-selected.service';
import { RelationService } from '../../services/relation.service';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { DatePipe } from '@angular/common';
import { AppSettings }          from '../../../app.component';
import {TranslateService} from '@ngx-translate/core';
import { Observable } from 'rxjs/Observable';


@Component({
  selector: 'app-relationship',
  templateUrl: './relationship.component.html',
  styleUrls: ['./relationship.component.css']
})
export class RelationshipComponent implements OnInit {

  public ownerName: string;
  public otherName: string;
  public game: string;
  public relations: Relation[];
  public loaded=false;

  public buttonHome: Button = new Button('BUTTON.HOME', 'home', null, ['/'], null);
  public buttonCharacter;
  public buttonNew: Button = new Button('BUTTON.NEW', 'plus', null, ['new'], null, true);
  public buttonNewNotOwner: Button = new Button('BUTTON.NEW', 'plus', null, ['new'], null, false);
  public buttonGame;


    // lineChart
    public lineChartData:Array<any>= [
      {data: [], name: 'working', },
      {data: [], name: 'confidential'},
      {data: [], name: 'loyalty'},
      {data: [], name: 'trust'},
      {data: [], name: 'respect'},
      {data: [], name: 'funny'},
      {data: [], name: 'affection'}
    ];
    public lineChartLabels:Array<String> = [];
    public lineChartsReady:boolean = false;
    public nowLoaded:number=0;
    public toLoad:number=0;


  constructor(
    public characterSelectedService: CharacterSelectedService,
    public relationService: RelationService,
    private route: ActivatedRoute,
    private datePipe: DatePipe,
    private translateService: TranslateService
  ) { }

  ngOnInit(): void {
    this.lineChartData.forEach(line=>{
      this.translateService.get('RELATIONS.'+line.name+'.NAME').subscribe(m=>line.label=m.charAt(0).toUpperCase() + m.substr(1).toLowerCase());
    });
    this.route.params.subscribe(param => {
      this.characterSelectedService.characterSelected = param['characterName'];
      this.game = param['game'];
      this.ownerName = this.characterSelectedService.characterSelected;
      this.buttonCharacter = new Button(this.ownerName, 'user', null, ['/'+AppSettings.API_GAME+'/'+this.game+'/character/'+this.ownerName], null);
      if (this.game && this.game!='null'){
        this.buttonGame = new Button(''+this.game, 'book', null, ['/'+AppSettings.API_GAME+'/'+this.game], null);
      }
      this.otherName = param['other'];
      this.nowLoaded=0;
      this.relationService.getRelationList(this.ownerName, this.otherName).subscribe(relIds => {
        this.relations = [];
        this.toLoad=relIds.length;
        relIds.forEach((item, index) => {
          this.relationService.getRelation(this.ownerName, this.otherName, item).subscribe(relation => {
            if (relation) {
                this.relations[index]=relation;
                this.lineChartLabels[relIds.length-index-1]=this.datePipe.transform(relation.date.toString(), 'dd-MM-yyyy HH:mm:ss');
                this.lineChartData.filter(f=>'working'===f.name)[0].data[relIds.length-index-1]=relation.working;
                this.lineChartData.filter(f=>'loyalty'===f.name)[0].data[relIds.length-index-1]=relation.loyalty;
                this.lineChartData.filter(f=>'trust'===f.name)[0].data[relIds.length-index-1]=relation.trust;
                this.lineChartData.filter(f=>'respect'===f.name)[0].data[relIds.length-index-1]=relation.respect;
                this.lineChartData.filter(f=>'funny'===f.name)[0].data[relIds.length-index-1]=relation.funny;
                this.lineChartData.filter(f=>'affection'===f.name)[0].data[relIds.length-index-1]=relation.affection;
                this.lineChartData.filter(f=>'confidential'===f.name)[0].data[relIds.length-index-1]=relation.confidential;
            }
          }, null, ()=>this.nowLoaded++);
        });
        this.loaded=true;
      })
    });
  }
}
