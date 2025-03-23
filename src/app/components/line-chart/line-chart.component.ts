import { Component, Input } from '@angular/core';
import { MetricData } from '../../core/models/metric';

@Component({
  selector: 'app-line-chart',
  imports: [],
  template: '<ngx-charts-line-chart [results]="[{ name: 'Line', series: data }]" [scheme]="colorScheme"></ngx-charts-line-chart>',
  styleUrl: './line-chart.component.css'
})
export class LineChartComponent {
  @Input() data: MetricData[] = [];
  @Input() colorScheme: string = 'vivid';
}
