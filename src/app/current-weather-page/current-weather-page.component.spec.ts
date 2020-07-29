import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentWeatherPageComponent } from './current-weather-page.component';

describe('CurrentWeatherPageComponent', () => {
  let component: CurrentWeatherPageComponent;
  let fixture: ComponentFixture<CurrentWeatherPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CurrentWeatherPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrentWeatherPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
