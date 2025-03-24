import { createReducer, on } from '@ngrx/store';
import { Metric } from '../../models/metric';
import { VisualizationOptions } from '../../models/visualization';
import * as DashboardActions from '../actions/dashboard.actions';

export interface DashboardState {
  metrics: Metric[];
  selectedMetricId: string | null;
  selectedMetric: Metric | null; // Store the selected metric directly
  visualizationOptions: VisualizationOptions;
  error: string | null; // Store error messages
}

export const initialState: DashboardState = {
  metrics: [],
  selectedMetricId: null,
  selectedMetric: null, 
  visualizationOptions: { colorScheme: 'vivid' },
  error: null, // Initial state for errors
};

export const dashboardReducer = createReducer(
  initialState,

  // Load Metrics Success
  on(DashboardActions.loadMetricsSuccess, (state, { metrics }) => ({
    ...state,
    metrics,
    error: null, // Reset error on success
  })),

  // Load Metrics Failure
  on(DashboardActions.loadMetricsFailure, (state, { error }) => ({
    ...state,
    error, // Store error message
  })),

  // Select Metric
  on(DashboardActions.selectMetric, (state, { metricId }) => ({
    ...state,
    selectedMetricId: metricId,
    selectedMetric: state.metrics.find((metric) => metric.id === metricId) || null, // Find the selected metric
  })),

  // Update Visualization Options
  on(DashboardActions.updateVisualizationOptions, (state, { options }) => ({
    ...state,
    visualizationOptions: { ...state.visualizationOptions, ...options },
  }))
);