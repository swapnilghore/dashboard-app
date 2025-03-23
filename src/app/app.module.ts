import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
// import { ModuleRoutingModule } from './module-routing.module';
import { ModuleRoutingModule } from '../app/module/module-routing.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DashboardModule } from '../app/dashboard/dashboard/dashboard.module';
import { MatToolbarModule } from '@angular/material/toolbar';
@NgModule({
  declarations: [AppComponent],
  imports: [
    CommonModule,
    ModuleRoutingModule,
    AppRoutingModule,
    BrowserModule,
    HttpClientModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
    BrowserAnimationsModule,
    DashboardModule,
    MatToolbarModule
  ],
  bootstrap: [AppComponent]
})
export class ModuleModule { }
