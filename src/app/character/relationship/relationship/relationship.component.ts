import { Button } from '../../../generic/button/button'
import { Relation } from '../../data/relation'
import { Relationship } from '../../data/relationship';
import { ActivatedRoute, Params } from '@angular/router';
import { Component, Input, OnInit } from '@angular/core';
import { CharacterSelectedService } from '../../services/character-selected.service';
import { RelationService } from '../../services/relation.service';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { DatePipe } from '@angular/common';


@Component({
  moduleId: module.id,
  selector: 'app-relationship',
  templateUrl: './relationship.component.html',
  styleUrls: ['./relationship.component.css']
})
export class RelationshipComponent implements OnInit {

  public ownerName: string;
  public otherName: string;
  public relations: Relation[];

  public buttonHome: Button = new Button('Home', 'home', null, ['../../../../'], null);
  public buttonCharacter: Button = new Button('Character', 'user', null, ['../../'], null);
  public buttonNew: Button = new Button('New', 'plus', null, ['new'], null);


    // lineChart
    public lineChartData:Array<any>= [
      {data: [], label: 'Working'},
      {data: [], label: 'Loyalty'},
      {data: [], label: 'Trust'},
      {data: [], label: 'Respect'},
      {data: [], label: 'Funny'},
      {data: [], label: 'Affection'}
    ];
    public lineChartLabels:Array<String> = [];


  constructor(
    public characterSelectedService: CharacterSelectedService,
    public relationService: RelationService,
    private route: ActivatedRoute,
    private datePipe: DatePipe
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(param => {
      this.characterSelectedService.characterSelected = param['characterName'];
      this.ownerName = this.characterSelectedService.characterSelected;
      this.buttonCharacter = new Button(this.ownerName, 'user', null, ['../../'], null);
      this.otherName = param['other'];
      this.relationService.getRelationList(this.ownerName, this.otherName).then(relIds => {
        this.relations = [];
        relIds.sort((n1, n2) => n2 - n1).forEach((item, index) => {
          this.relationService.getRelation(this.ownerName, this.otherName, item).then(relation => {
            if (relation) {
                this.relations.push(relation);
                this.lineChartLabels[relIds.length-index-1]=this.datePipe.transform(relation.date.toString(), 'dd-MM-yyyy HH:mm:ss');
                this.lineChartData.filter(f=>'Working'===f.label)[0].data[relIds.length-index-1]=relation.working;
                this.lineChartData.filter(f=>'Loyalty'===f.label)[0].data[relIds.length-index-1]=relation.loyalty;
                this.lineChartData.filter(f=>'Trust'===f.label)[0].data[relIds.length-index-1]=relation.trust;
                this.lineChartData.filter(f=>'Respect'===f.label)[0].data[relIds.length-index-1]=relation.respect;
                this.lineChartData.filter(f=>'Funny'===f.label)[0].data[relIds.length-index-1]=relation.funny;
                this.lineChartData.filter(f=>'Affection'===f.label)[0].data[relIds.length-index-1]=relation.affection;
            }
          });
        });
      });
    });
  }
}