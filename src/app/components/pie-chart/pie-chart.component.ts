import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxChartsModule } from '@swimlane/ngx-charts';

@Component({
  selector: 'app-pie-chart',
  standalone: true,
  imports: [CommonModule, NgxChartsModule], // Added required imports
  template: `
     <ngx-charts-pie-chart
      [view]="[700, 400]"
      [scheme]="colorScheme"
      [results]="data"
      [legend]="true"
      [labels]="true"
      [doughnut]="false"
      [explodeSlices]="true"
      [animations]="true"
    >
    </ngx-charts-pie-chart>
  `,
  styleUrls: ['./pie-chart.component.css']
})
export class PieChartComponent {
  @Input() data: any[] = []; // Ensure `data` is an array
  @Input() colorScheme: string = 'vivid'; // Default color scheme
}

