import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup-confirm-email',
  templateUrl: './signup-confirm-email.component.html',
  styleUrls: ['./signup-confirm-email.component.scss']
})
export class SignupConfirmEmailComponent {
  countdown: number = 5;
  countdownStarted = false;

  constructor(private router: Router) {}

  startCountdown() {
    this.countdownStarted = true;

    const interval = setInterval(() => {
      this.countdown--;

      if (this.countdown === 0) {
        clearInterval(interval);
        this.router.navigate(['/complete-profile']);
      }
    }, 1000); // كل ثانية
  }
}
