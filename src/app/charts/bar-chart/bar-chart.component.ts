import { Component, OnInit } from '@angular/core';

const SAMPLE_BACHART_DATA: any[] = 
[
  { data:[65,59,23,12,54,75,34,50], label: 'Q3 Sales'},
  { data:[69,79,53,92,74,15,54,70], label: 'Q4 Sales'},
  { data:[25,49,33,22,74,55,74,80], label: 'Q2 Sales'},
  { data:[55,69,73,42,54,75,74,20], label: 'Q1 Sales'}
];

const SAMPLE_BARCHART_LABELS: string[] = 
[
  'W1','W2','W3','W4','W5','W6','W7'
];

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.scss']
})
export class BarChartComponent implements OnInit {

  constructor() { }

  public barChartData: any [] = SAMPLE_BACHART_DATA;
  public barChartLabels: string []= SAMPLE_BARCHART_LABELS; 
  public barChartLegend: false;
  public barChartType = 'bar';
  public barChartOptions: any = 
  {
    scaleShowVerticalLines: false,
    responsive: true
  };
  

  ngOnInit() {
  }

}
