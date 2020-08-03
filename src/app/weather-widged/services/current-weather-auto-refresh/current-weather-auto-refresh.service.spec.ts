import { TestBed } from '@angular/core/testing';

import { CurrentWeatherAutoRefreshService } from './current-weather-auto-refresh.service';

describe('CurrentWeatherAutoRefreshService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CurrentWeatherAutoRefreshService = TestBed.get(CurrentWeatherAutoRefreshService);
    expect(service).toBeTruthy();
  });
});
