import { createSelector, createFeatureSelector } from '@ngrx/store';
import { DashboardState } from '../store/reducers/dashboard.reducer';

export const selectDashboardState = createFeatureSelector<DashboardState>('dashboard');

export const selectMetrics = createSelector(
  selectDashboardState,
  (state) => state.metrics
);

export const selectSelectedMetricId = createSelector(
  selectDashboardState,
  (state) => state.selectedMetricId
);

export const selectVisualizationOptions = createSelector(
  selectDashboardState,
  (state) => state.visualizationOptions
);

export const selectError = createSelector(
  selectDashboardState,
  (state) => state.error
);

// ✅ Directly select `selectedMetric` from state instead of computing it every time
export const selectSelectedMetric = createSelector(
  selectDashboardState,
  (state) => state.selectedMetric
);
