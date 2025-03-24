import { Component, Input } from '@angular/core';
import { MetricData } from '../../core/models/metric';
import { NgxChartsModule } from '@swimlane/ngx-charts';

@Component({
  selector: 'app-bar-chart',
  imports: [NgxChartsModule],
  standalone: true,
  template: `
  <ngx-charts-bar-vertical
    [view]="[700, 400]"
    [scheme]="colorScheme"
    [results]="data"
    [xAxis]="true"
    [yAxis]="true"
    [legend]="true"
    [showXAxisLabel]="true"
    [showYAxisLabel]="true"
    xAxisLabel="Time Period"
    [barPadding]="10"
    [roundEdges]="true"
    yAxisLabel="Value"
    [animations]="true"
  >
  </ngx-charts-bar-vertical>
`,
  styleUrl: './bar-chart.component.css'
})
export class BarChartComponent {
  @Input() data: MetricData[] = [];
  @Input() colorScheme: string = 'vivid';
}
