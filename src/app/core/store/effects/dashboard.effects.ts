import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, mergeMap } from 'rxjs/operators';
import { DataService } from '../../services/data.service';
import * as DashboardActions from '../actions/dashboard.actions';

@Injectable()
export class DashboardEffects {
  constructor(private actions$: Actions, private dataService: DataService) {}

  loadMetrics$ = createEffect(() =>
    this.actions$.pipe(
      ofType(DashboardActions.loadMetrics),
      mergeMap(() =>
        this.dataService.getMetrics().pipe(
          map((data) => DashboardActions.loadMetricsSuccess({ metrics: data.metrics }))
        )
      )
    )
  );
}