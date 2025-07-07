import { Component , OnInit } from '@angular/core';
import { Router } from '@angular/router';
 





@Component({
  selector: 'app-loadingpage-home',
  templateUrl: './loadingpage-home.component.html',
  styleUrls: ['./loadingpage-home.component.scss']
})
export class LoadingpageHomeComponent implements OnInit {
  isLoggedIn: boolean = false;

  constructor(private router: Router) {}

  ngOnInit(): void {
    // مثلًا تفقد وجود توكن أو flag في localStorage
    this.isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
  }

  scrollToSection(id: string) {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
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
 goToProfile(): void {
  const role = localStorage.getItem('role');
  const userId = localStorage.getItem('userId');

  if (role === 'patient' && userId) {
    this.router.navigate([`/patient/${userId}`]);
  } else {
    this.router.navigate(['/dashboard']);
  }
}


}

 

