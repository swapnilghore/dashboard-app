import { Injectable, inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { DataService } from '../../services/data.service';
import * as DashboardActions from '../actions/dashboard.actions';

@Injectable()
export class DashboardEffects {
  private actions$ = inject(Actions); // ✅ Angular 19 Standalone Injection
  private dataService = inject(DataService); // ✅ Inject DataService correctly

  loadMetrics$ = createEffect(() =>
    this.actions$.pipe(
      ofType(DashboardActions.loadMetrics),
      mergeMap(() => {
        console.log('Effect Triggered: Fetching metrics...'); // ✅ Debug log
        return this.dataService.getMetrics().pipe(
          map((response) => {
            console.log('Metrics Loaded:', response.metrics); // ✅ Debug log
            return DashboardActions.loadMetricsSuccess({ metrics: response.metrics });
          }),
          catchError((error) => {
            console.error('Error Fetching Metrics:', error); // ✅ Debug log
            return of(DashboardActions.loadMetricsFailure({ error: error.message }));
          })
        );
      })
    )
  );
}


