import { Metric } from './metric';

describe('Metric Interface', () => {
  it('should create a valid metric object', () => {
    const metric: Metric = {
      id: '1',
      name: 'Test Metric',
      type: 'bar',
      data: [{ name: 'Sample', value: 100 }],
    };
    expect(metric).toBeTruthy();
  });
});

