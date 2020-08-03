import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgedTemperatureComponent } from './widged-temperature.component';

describe('WidgedTemperatureComponent', () => {
  let component: WidgedTemperatureComponent;
  let fixture: ComponentFixture<WidgedTemperatureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WidgedTemperatureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WidgedTemperatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
