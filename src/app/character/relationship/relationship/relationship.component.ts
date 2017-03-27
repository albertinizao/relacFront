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

  public buttonHome: Button = new Button('Home', 'home', null, ['/'], null);
  public buttonCharacter;
  public buttonNew: Button = new Button('New', 'plus', null, ['new'], null, true);
  public buttonNewNotOwner: Button = new Button('New', 'plus', null, ['new'], null, false);
  public buttonGame;


    // lineChart
    public lineChartData:Array<any>= [
      {data: [], label: 'Working'},
      {data: [], label: 'Confidential'},
      {data: [], label: 'Loyalty'},
      {data: [], label: 'Trust'},
      {data: [], label: 'Respect'},
      {data: [], label: 'Funny'},
      {data: [], label: 'Affection'}
    ];
    public lineChartLabels:Array<String> = [];
    public lineChartsReady:boolean = false;
    public nowLoaded:number=0;
    public toLoad:number=0;


  constructor(
    public characterSelectedService: CharacterSelectedService,
    public relationService: RelationService,
    private route: ActivatedRoute,
    private datePipe: DatePipe
  ) { }

  ngOnInit(): void {
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
                this.lineChartData.filter(f=>'Working'===f.label)[0].data[relIds.length-index-1]=relation.working;
                this.lineChartData.filter(f=>'Loyalty'===f.label)[0].data[relIds.length-index-1]=relation.loyalty;
                this.lineChartData.filter(f=>'Trust'===f.label)[0].data[relIds.length-index-1]=relation.trust;
                this.lineChartData.filter(f=>'Respect'===f.label)[0].data[relIds.length-index-1]=relation.respect;
                this.lineChartData.filter(f=>'Funny'===f.label)[0].data[relIds.length-index-1]=relation.funny;
                this.lineChartData.filter(f=>'Affection'===f.label)[0].data[relIds.length-index-1]=relation.affection;
                this.lineChartData.filter(f=>'Confidential'===f.label)[0].data[relIds.length-index-1]=relation.confidential;
            }
          }, null, ()=>this.nowLoaded++);
        });
        this.loaded=true;
      })
    });
  }
}
