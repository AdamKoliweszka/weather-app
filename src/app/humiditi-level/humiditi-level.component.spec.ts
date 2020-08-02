import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HumiditiLevelComponent } from './humiditi-level.component';

describe('HumiditiLevelComponent', () => {
  let component: HumiditiLevelComponent;
  let fixture: ComponentFixture<HumiditiLevelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HumiditiLevelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HumiditiLevelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
