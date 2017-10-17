import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';

@Component({
  selector: 'app-http-simple-request',
  templateUrl: './http-simple-request.component.html',
  styleUrls: ['./http-simple-request.component.css']
})
export class HttpSimpleRequestComponent implements OnInit {
  data: Object;
  loading: boolean;

  constructor(private http: Http) { }

  ngOnInit() {
  }

  makeRequest(): void{
    this.loading = true;
    this.http.request('http://jsonplaceholder.typicode.com/posts/1')
        .subscribe((res: Response) => {
          this.data = res.json();
          this.loading = false;
        });
  }

}
