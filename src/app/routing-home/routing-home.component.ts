import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-routing-home',
  templateUrl: './routing-home.component.html',
  styleUrls: ['./routing-home.component.css']
})
export class RoutingHomeComponent implements OnInit {
  parameter: string;

  constructor(private route: ActivatedRoute) { 
    route.params.subscribe(urlParams => {this.parameter = urlParams['parameter']; });
  }

  ngOnInit() {
  }

}
