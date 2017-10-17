import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from '../services/spotify.service';

@Component({
  selector: 'app-track',
  templateUrl: './track.component.html',
  styleUrls: ['./track.component.css']
})
export class TrackComponent implements OnInit {
  track: Object;
  
  trackId:string;

  constructor(private route: ActivatedRoute, private spotify: SpotifyService) { 
    route.params.subscribe(urlParams => {this.trackId = urlParams['trackId']; });

  }

  ngOnInit() {
    this.search();
  }

  search(): void {
    this.spotify.getTrack(this.trackId)
                .subscribe((res: any) => this.renderResult(res));

  }

  renderResult(track: any): void {
    this.track = track;
  }

}
