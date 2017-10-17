import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-routing-login',
  templateUrl: './routing-login.component.html',
  styleUrls: ['./routing-login.component.css']
})
export class RoutingLoginComponent implements OnInit {
  message: string;

  constructor(public authService: AuthService) { 
    this.message = '';
  }

  login(username: string, password: string): boolean{
    this.message = '';
    if (!this.authService.login(username,password)){
      this.message = 'incorrect credentials.';
      setTimeout(function(){
        this.message = '';
      }.bind(this), 2500);
    }
    return false;
  }
  
  logout(): boolean{
    this.authService.logout();
    return false;
  }

  ngOnInit() {
  }

}
