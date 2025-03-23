import { createReducer, on } from '@ngrx/store';
import { Metric } from '../../models/metric';
import { VisualizationOptions } from '../../models/visualization';
import * as DashboardActions from '../actions/dashboard.actions';

export interface DashboardState {
  metrics: Metric[];
  selectedMetricId: string | null;
  visualizationOptions: VisualizationOptions;
}

export const initialState: DashboardState = {
  metrics: [],
  selectedMetricId: null,
  visualizationOptions: { colorScheme: 'vivid' }
};

export const dashboardReducer = createReducer(
  initialState,
  on(DashboardActions.loadMetricsSuccess, (state, { metrics }) => ({
    ...state,
    metrics
  })),
  on(DashboardActions.selectMetric, (state, { metricId }) => ({
    ...state,
    selectedMetricId: metricId
  })),
  on(DashboardActions.updateVisualizationOptions, (state, { options }) => ({
    ...state,
    visualizationOptions: { ...state.visualizationOptions, ...options }
  }))
);