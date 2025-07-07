import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-section1',
  templateUrl: './section1.component.html',
  styleUrl: './section1.component.scss'
})
export class Section1Component implements OnInit {
  isLoggedIn: boolean = false;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
  }

  openLogin(): void {
    this.router.navigate(['/login']);
  }

  openSignUp(): void {
    this.router.navigate(['/signup']);
  }

  goHome(): void {
    this.router.navigate(['/home']);
  }

  logout(): void {
    localStorage.removeItem('isLoggedIn');
    this.isLoggedIn = false;
    this.router.navigate(['/home']);
  }
}
