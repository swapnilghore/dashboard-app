import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Metric } from '../../core/models/metric';
import * as DashboardActions from '../../core/store/actions/dashboard.actions';
import {
  selectMetrics,
  selectSelectedMetric,
  selectVisualizationOptions
} from '../../core/store/dashboard.selectors'
@Component({
  selector: 'app-dashboard',
  imports: [],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  metrics$: Observable<Metric[]>;
  selectedMetric$: Observable<Metric | null>;
  visualizationOptions$: Observable<any>;

  constructor(private store: Store) {
    this.metrics$ = this.store.select(selectMetrics);
    this.selectedMetric$ = this.store.select(selectSelectedMetric);
    this.visualizationOptions$ = this.store.select(selectVisualizationOptions);
  }

  ngOnInit() {
    this.store.dispatch(DashboardActions.loadMetrics());
  }

  onMetricChange(metricId: string) {
    this.store.dispatch(DashboardActions.selectMetric({ metricId }));
  }

  onColorChange(colorScheme: string) {
    this.store.dispatch(DashboardActions.updateVisualizationOptions({ options: { colorScheme } }));
  }
}
