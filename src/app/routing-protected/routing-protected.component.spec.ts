import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoutingProtectedComponent } from './routing-protected.component';

describe('RoutingProtectedComponent', () => {
  let component: RoutingProtectedComponent;
  let fixture: ComponentFixture<RoutingProtectedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoutingProtectedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoutingProtectedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
