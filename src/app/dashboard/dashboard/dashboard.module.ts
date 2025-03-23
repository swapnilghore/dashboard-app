import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { dashboardReducer } from '../../../app/core/store/reducers/dashboard.reducer';
import { DashboardEffects } from '../../../app/core/store/effects/dashboard.effects';
import { BarChartComponent } from '../../../app/components/bar-chart/bar-chart.component';
import { LineChartComponent } from '../../../app/components/line-chart/line-chart.component';
import { PieChartComponent } from '../../../app/components/pie-chart/pie-chart.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms'
import { DashboardRoutingModule } from './dashboard-routing.module';


@NgModule({
  declarations: [DashboardComponent,
    BarChartComponent,
    LineChartComponent,
    PieChartComponent],
  imports: [
    CommonModule,
    FormsModule,
    NgxChartsModule,
    MatSelectModule,
    MatFormFieldModule,
    DashboardRoutingModule,
    StoreModule.forFeature('dashboard', dashboardReducer),
    EffectsModule.forFeature([DashboardEffects])
  ]
})
export class DashboardModule { }
