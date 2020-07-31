import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AthmosphericPressureComponent } from './athmospheric-pressure.component';

describe('AthmosphericPressureComponent', () => {
  let component: AthmosphericPressureComponent;
  let fixture: ComponentFixture<AthmosphericPressureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AthmosphericPressureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AthmosphericPressureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
