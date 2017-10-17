import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpYoutubeSearchboxComponent } from './http-youtube-searchbox.component';

describe('HttpYoutubeSearchboxComponent', () => {
  let component: HttpYoutubeSearchboxComponent;
  let fixture: ComponentFixture<HttpYoutubeSearchboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HttpYoutubeSearchboxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HttpYoutubeSearchboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
