
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-chart',
  templateUrl: './line-chart.component.html'
})
export class LineChartComponent  {
  // lineChart
  @Input() public lineChartData:Array<any>;
   /**= [
    {data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A'},
    {data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B'},
    {data: [18, 48, 77, 9, 100, 27, 40], label: 'Series C'}
  ];*/
  @Input() public lineChartLabels:Array<string>;
  public lineChartLabelsReal:Array<string>;
  public lineChartOptions:any = {
    responsive: true,
    tooltips: {position: 'nearest'},
    legend: {
            usePointStyle: false,
            display: false,
            labels: {
                fontColor: 'rgb(255, 99, 132)'
            },
        reverse: true
        },
    reverse: true
  };
  public lineChartColors:Array<any> = [
    {
      fill: false,
      backgroundColor: 'rgba(128,128,128,0)',
      borderColor: 'rgba(	128,128,128,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
    },
    {
      fill: false,
      backgroundColor: 'rgba(0,0,255,0)',
      borderColor: 'rgba(0,0,255,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
    },
    {
      fill: false,
      backgroundColor: 'rgba(	128,0,0,0)',
      borderColor: 'rgba(	128,0,0,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
    },
    {
      fill: false,
      backgroundColor: 'rgba(	0,128,0,0)',
      borderColor: 'rgba(	0,128,0,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
    },
    {
      fill: false,
      backgroundColor: 'rgba(	128,0,128,0)',
      borderColor: 'rgba(	128,0,128,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
    },
    {
      fill: false,
      backgroundColor: 'rgba(	218,165,32,0)',
      borderColor: 'rgba(	218,165,32,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
    },
    {
      fill: false,
      backgroundColor: 'rgba(	255,0,0,0)',
      borderColor: 'rgba(	255,0,0,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
    },
  ];
  public lineChartType:string='line';
}
