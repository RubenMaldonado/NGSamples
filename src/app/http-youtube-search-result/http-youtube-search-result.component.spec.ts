import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpYoutubeSearchResultComponent } from './http-youtube-search-result.component';

describe('HttpYoutubeSearchResultComponent', () => {
  let component: HttpYoutubeSearchResultComponent;
  let fixture: ComponentFixture<HttpYoutubeSearchResultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HttpYoutubeSearchResultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HttpYoutubeSearchResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
