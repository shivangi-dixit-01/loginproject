import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationServiceService } from './Helper/authentication-service.service';
import { user } from './models/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  currentUser: user;
  constructor(
      private router: Router,
      private authenticationService: AuthenticationServiceService
  ) {
      this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
  }

  logout() {
      this.authenticationService.logout();
      this.router.navigate(['/login']);
  }
}
