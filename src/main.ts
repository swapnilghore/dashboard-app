import { bootstrapApplication } from '@angular/platform-browser';
import { provideStore } from '@ngrx/store';
import { dashboardReducer } from './app/core/store/reducers/dashboard.reducer';
import { AppComponent } from './app/app.component';
import { DashboardEffects } from './app/core/store/effects/dashboard.effects';
import { provideEffects } from '@ngrx/effects';
import { provideHttpClient } from '@angular/common/http';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { provideAnimations } from '@angular/platform-browser/animations';
import { DataService } from './app/core/services/data.service';

bootstrapApplication(AppComponent, {
  providers: [
    provideHttpClient(),
    provideStore({ dashboard: dashboardReducer }),
    provideEffects(DashboardEffects),
    provideStoreDevtools(),
    provideAnimations(),
    DataService
  ]
});