import { Component, OnInit } from '@angular/core';
import { LINE_CHART_COLORS} from  '../../../shared/chart.colors'


const SAMPLE_LINE_CHART_DATA: any[] = [
  { data: [32, 14, 46, 23, 38, 56], label: "Sentiment Analysis" },
  { data: [12, 18, 26, 13, 28, 26], label: "Image Recognition" },
  { data: [52, 34, 49, 53, 68, 62], label: "Forecasting" }
];

const SAMPLE_LINE_CHART_LABELS: string[] = ["Jan", "Feb", "Mar", "Apr", "May", "Jun"];

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.scss']
})
export class LineChartComponent implements OnInit {

  constructor() { }
 
  lineChartData = SAMPLE_LINE_CHART_DATA;
  lineChartLabels = SAMPLE_LINE_CHART_LABELS;
  lineChartLegend: true
  lineChartType= 'line'
  lineChartOptions: any = 
  {
    reponsive: true
  }

  lineChartColors = LINE_CHART_COLORS;
  ngOnInit() {
  }

}
