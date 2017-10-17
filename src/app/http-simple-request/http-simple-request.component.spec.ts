import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpSimpleRequestComponent } from './http-simple-request.component';

describe('HttpSimpleRequestComponent', () => {
  let component: HttpSimpleRequestComponent;
  let fixture: ComponentFixture<HttpSimpleRequestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HttpSimpleRequestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HttpSimpleRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
