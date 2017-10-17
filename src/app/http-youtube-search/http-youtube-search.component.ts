import { Component, OnInit } from '@angular/core';
import { SearchResult } from '../model/searchresult.model'

@Component({
  selector: 'app-http-youtube-search',
  templateUrl: './http-youtube-search.component.html',
  styleUrls: ['./http-youtube-search.component.css']
})
export class HttpYoutubeSearchComponent implements OnInit {
  results: SearchResult[];
  loading: boolean;

  constructor() { }

  ngOnInit() {
  }

  updateResults(results: SearchResult[]): void{
    this.results = results;
    console.log("results:", this.results);
  }

}
