import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsWeatherComponent } from './details-weather.component';

describe('DetailsWeatherComponent', () => {
  let component: DetailsWeatherComponent;
  let fixture: ComponentFixture<DetailsWeatherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailsWeatherComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsWeatherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
