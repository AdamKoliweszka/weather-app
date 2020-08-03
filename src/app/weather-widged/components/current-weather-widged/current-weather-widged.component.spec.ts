import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentWeatherWidgedComponent } from './current-weather-widged.component';

describe('CurrentWeatherWidgedComponent', () => {
  let component: CurrentWeatherWidgedComponent;
  let fixture: ComponentFixture<CurrentWeatherWidgedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CurrentWeatherWidgedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrentWeatherWidgedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
