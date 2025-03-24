export interface MetricData {
  name: string;
  value: number;
}

export interface Metric {
  id: string;
  name: string;
  type: 'bar' | 'line' | 'pie';
  data: MetricData[];
}

