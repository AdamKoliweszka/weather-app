import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgedRefreshButtonComponent } from './widged-refresh-button.component';

describe('WidgedRefreshButtonComponent', () => {
  let component: WidgedRefreshButtonComponent;
  let fixture: ComponentFixture<WidgedRefreshButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WidgedRefreshButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WidgedRefreshButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
