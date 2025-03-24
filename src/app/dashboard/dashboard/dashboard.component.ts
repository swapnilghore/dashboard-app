import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { Metric } from '../../core/models/metric';
import * as DashboardActions from '../../core/store/actions/dashboard.actions';
import {
  selectMetrics,
  selectSelectedMetric,
  selectVisualizationOptions
} from '../../core/store/dashboard.selectors';
import { BarChartComponent } from '../../components/bar-chart/bar-chart.component';
import { LineChartComponent } from '../../components/line-chart/line-chart.component';
import { PieChartComponent } from '../../components/pie-chart/pie-chart.component';
import { map } from 'rxjs/operators';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatSelectModule,
    MatOptionModule,
    BarChartComponent,
    LineChartComponent,
    PieChartComponent
  ],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  metrics$: Observable<Metric[]>;
  selectedMetric$: Observable<Metric | null>;
  visualizationOptions$: Observable<{ colorScheme: string }>;
  showmatrixData: boolean = false;

  constructor(private store: Store) {
    this.metrics$ = this.store.select(selectMetrics);

    this.selectedMetric$ = this.store.select(selectSelectedMetric).pipe(
      map((metric) => metric ?? { id: '', name: 'No Data', type: 'bar', data: [] })
    );

    this.visualizationOptions$ = this.store.select(selectVisualizationOptions).pipe(
      map((options) => options ?? { colorScheme: 'vivid' })
    );
  }

  ngOnInit(): void {
    console.log('Dispatching loadMetrics action'); // Log action dispatch
    this.store.dispatch(DashboardActions.loadMetrics());
  }

  onMetricChange(metricId: string): void {
    this.showmatrixData = true;
    this.store.dispatch(DashboardActions.selectMetric({ metricId }));
  }

  onColorChange(colorScheme: string): void {
    this.store.dispatch(DashboardActions.updateVisualizationOptions({ options: { colorScheme } }));
  }
}
