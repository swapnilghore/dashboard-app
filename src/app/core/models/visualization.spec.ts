import { VisualizationOptions } from './visualization';

describe('VisualizationOptions Interface', () => {
  it('should create a valid visualization object', () => {
    const options: VisualizationOptions = { colorScheme: 'vivid', scale: 1 };
    expect(options).toBeTruthy();
  });
});
