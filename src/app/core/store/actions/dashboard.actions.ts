import { createAction, props } from '@ngrx/store';
import { Metric } from '../../models/metric';
import { VisualizationOptions } from '../../models/visualization';

// 📌 Load Metrics Actions
export const loadMetrics = createAction('[Dashboard] Load Metrics');
export const loadMetricsSuccess = createAction(
  '[Dashboard] Load Metrics Success',
  props<{ metrics: Metric[] }>()
);

// 📌 Select Metric Action
export const selectMetric = createAction(
  '[Dashboard] Select Metric',
  props<{ metricId: string }>()
);

// 📌 Update Visualization Options Action
export const updateVisualizationOptions = createAction(
  '[Dashboard] Update Visualization Options',
  props<{ options: VisualizationOptions }>()
);

export const loadMetricsFailure = createAction(
  '[Dashboard] Load Metrics Failure',
  props<{ error: string }>()
);

