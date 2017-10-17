import { Component, OnInit, Input } from '@angular/core';
import { SearchResult } from '../model/searchresult.model'


@Component({
  selector: 'app-http-youtube-search-result',
  templateUrl: './http-youtube-search-result.component.html',
  styleUrls: ['./http-youtube-search-result.component.css']
})
export class HttpYoutubeSearchResultComponent implements OnInit {
  @Input() result: SearchResult;

  constructor() { }

  ngOnInit() {
  }

}
