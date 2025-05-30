import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Metric } from '../models/metric'
@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }
  getMetrics(): Observable<{ metrics: Metric[] }> {
    console.log('Fetching metrics from mock-data.json...');
    return this.http.get<{ metrics: Metric[] }>('/mock-data.json');
  }
}

