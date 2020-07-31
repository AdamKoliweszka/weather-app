import { TemperatureToCelsiusPipe } from './temperature-to-celsius.pipe';

describe('TemperatureToCelsiusPipe', () => {
  it('create an instance', () => {
    const pipe = new TemperatureToCelsiusPipe();
    expect(pipe).toBeTruthy();
  });
});
