import { TestBed } from '@angular/core/testing';

import { CurrentWeatherApiService } from './current-weather-api.service';

describe('CurrentWeatherApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CurrentWeatherApiService = TestBed.get(CurrentWeatherApiService);
    expect(service).toBeTruthy();
  });
});
