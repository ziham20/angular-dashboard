import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.scss']
})
export class PieChartComponent implements OnInit {

  constructor() { }

  public pieChartData: number[] = [340, 230, 540];
  public pieChartLabels: string[] = ['XYZ Logistics','Paan Paan', 'Sumanadisi'];
  colors: any[] =
    [
      {
        backgroundColor: ['#26547c','#ff6b6b','#ffd166'],
        borderColor: '#111'
      }      
    ];
    pieChartType = 'doughnut';
    // pieChartType = 'doughnut';
  ngOnInit() {
  }

}
