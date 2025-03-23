import { createAction, props } from '@ngrx/store';
import { Metric } from '../../models/metric';
import { VisualizationOptions } from '../../models/visualization';

export const loadMetrics = createAction('[Dashboard] Load Metrics');
export const loadMetricsSuccess = createAction(
  '[Dashboard] Load Metrics Success',
  props<{ metrics: Metric[] }>()
);
export const selectMetric = createAction(
  '[Dashboard] Select Metric',
  props<{ metricId: string }>()
);
export const updateVisualizationOptions = createAction(
  '[Dashboard] Update Visualization Options',
  props<{ options: VisualizationOptions }>()
);