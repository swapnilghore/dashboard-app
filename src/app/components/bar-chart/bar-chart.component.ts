import { Component, Input } from '@angular/core';
import { MetricData } from '../../core/models/metric';

@Component({
  selector: 'app-bar-chart',
  imports: [],
  template: '<ngx-charts-bar-vertical [results]="data" [scheme]="colorScheme"></ngx-charts-bar-vertical>',
  styleUrl: './bar-chart.component.css'
})
export class BarChartComponent {
  @Input() data: MetricData[] = [];
  @Input() colorScheme: string = 'vivid';
}
