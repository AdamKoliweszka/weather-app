import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CloudinessComponent } from './cloudiness.component';

describe('CloudinessComponent', () => {
  let component: CloudinessComponent;
  let fixture: ComponentFixture<CloudinessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CloudinessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CloudinessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
