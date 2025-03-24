import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { MetricData } from '../../core/models/metric';

@Component({
  selector: 'app-line-chart',
  standalone: true,
  imports: [CommonModule, NgxChartsModule], // Added necessary modules
  template: `
   
   <ngx-charts-line-chart
   [view]="[700, 400]"
   [scheme]="colorScheme"
   [results]="formattedData"
   [xAxis]="true"
   [yAxis]="true"
   [legend]="true"
   [showXAxisLabel]="true"
   [showYAxisLabel]="true"
   xAxisLabel="Time Period"
   yAxisLabel="Value"
   [autoScale]="true"
   [animations]="true"
 >
 </ngx-charts-line-chart>
`,
  styleUrls: ['./line-chart.component.css']
})
export class LineChartComponent {
  @Input() data: MetricData[] = [];
  @Input() colorScheme: string = 'vivid';

  get formattedData() {
    return [{ name: "Line", series: this.data }];
  }
}

