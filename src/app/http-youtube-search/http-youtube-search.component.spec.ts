import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpYoutubeSearchComponent } from './http-youtube-search.component';

describe('HttpYoutubeSearchComponent', () => {
  let component: HttpYoutubeSearchComponent;
  let fixture: ComponentFixture<HttpYoutubeSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HttpYoutubeSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HttpYoutubeSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
