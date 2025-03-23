import { Component } from '@angular/core';

@Component({
  selector: 'app-pie-chart',
  imports: [],
  template: '<ngx-charts-pie-chart [results]="data" [scheme]="colorScheme"></ngx-charts-pie-chart>',
  styleUrl: './pie-chart.component.css'
})
export class PieChartComponent {

}
