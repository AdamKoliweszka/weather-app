import { TestBed } from '@angular/core/testing';

import { CurrentWeatherDataContainerService } from './current-weather-data-container.service';

describe('CurrentWeatherDataContainerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CurrentWeatherDataContainerService = TestBed.get(CurrentWeatherDataContainerService);
    expect(service).toBeTruthy();
  });
});
