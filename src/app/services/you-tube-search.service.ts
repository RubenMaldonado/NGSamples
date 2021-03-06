import { Injectable, Inject } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
import { SearchResult } from '../model/searchresult.model';


export const YOUTUBE_API_KEY:string = "AIzaSyBJSOvoYM0I80qD_hH-IGPw9-G26d7mhc4";
export const YOUTUBE_API_URL:string = "https://www.googleapies.com/youtube/v3/search";

@Injectable()
export class YouTubeSearchService {
  //private apiKey: string;
  //private apiUrl: string;

  constructor(private http: Http, 
              @Inject(YOUTUBE_API_KEY) private apiKey: string, 
              @Inject(YOUTUBE_API_URL) private apiUrl: string
              ){ 
               // this.apiKey = YOUTUBE_API_KEY , 
                // this.apiUrl = YOUTUBE_API_URL
  }

  search(query:string): Observable<SearchResult[]> {
    const params: string = [
                          `q=${query}`,
                          `key=${this.apiKey}`,
                          `part=snippet`,
                          `type=video`,
                          `maxResults=10`,
                          ].join('&');

    const queryUrl = `${this.apiUrl}?${params}`;
    
    return this.http.get(queryUrl)
                    .map((response: Response) => {
                      return (<any>response.json()).items.map(item => {
                        console.log("raw item", item); // uncomment if you want to debug
                        return new SearchResult({
                          id: item.id.videoId,
                          title: item.snippet.title,
                          description: item.snippet.description,
                          thumbnailUrl: item.snippet.thumbnails.high.url
                        });
                      });
                    });


  }
}
