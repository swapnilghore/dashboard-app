import { ApplicationConfig } from '@angular/core';
import { provideStore } from '@ngrx/store';
import { dashboardReducer } from './core/store/reducers/dashboard.reducer';
import { provideHttpClient } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [
    provideStore({ dashboard: dashboardReducer }),
    provideHttpClient(),
  ]
};

