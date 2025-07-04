import { Component  } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

import { NgIf } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'healthtracker';

  showSignUpScreen = false;

  showNavbar = true;
  showFooter = true;

  constructor(private router: Router) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.showNavbar = !(event.url === '/login' || event.url === '/signup');
        this.showFooter = !(event.url === '/login' || event.url === '/signup');
      }
    });
  }

  isThankYouPage(): boolean {
    return this.router.url === '/thank-you';
  }

  isSignupConfirmEmail(): boolean {
    return this.router.url === '/confirm-email';
  }
}
