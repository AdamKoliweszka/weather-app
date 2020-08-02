import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgedCalculationInfoComponent } from './widged-calculation-info.component';

describe('WidgedCalculationInfoComponent', () => {
  let component: WidgedCalculationInfoComponent;
  let fixture: ComponentFixture<WidgedCalculationInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WidgedCalculationInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WidgedCalculationInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
