import { Component, OnInit, ElementRef, Output, EventEmitter } from '@angular/core';
import { YouTubeSearchService } from '../services/you-tube-search.service';
import { SearchResult } from '../model/searchresult.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-http-youtube-searchbox',
  templateUrl: './http-youtube-searchbox.component.html',
  styleUrls: ['./http-youtube-searchbox.component.css']
})
export class HttpYoutubeSearchboxComponent implements OnInit {
  @Output() loading: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() results: EventEmitter<SearchResult[]> = new EventEmitter<SearchResult[]>();


  constructor(private youtube: YouTubeSearchService,
              private el: ElementRef) { 

  }

  ngOnInit() {
    Observable.fromEvent(this.el.nativeElement, 'keyup')
              .map((e: any) => e.target.value)
              .filter((text: string) => text.length > 3)
              .debounceTime(250)
              .do(() => this.loading.emit(true))
              .map((query: string) => this.youtube.search(query))
              .switch()
              .subscribe(
                (results: SearchResult[]) => {
                  this.loading.emit(false);
                  this.results.emit(results);
                },
                (error: any) => {
                  console.log(error);
                  this.loading.emit(false);
                },
                () => {
                  this.loading.emit(false);
                }
              );

  }

}
