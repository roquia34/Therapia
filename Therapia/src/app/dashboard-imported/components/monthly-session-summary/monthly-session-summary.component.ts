import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-monthly-session-summary',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './monthly-session-summary.component.html',
  styleUrls: ['./monthly-session-summary.component.scss']
})
export class MonthlySessionSummaryComponent {
  month = 'April';
  total = 0;

  sessions = [
    {
      image: 'assets/images/default-avatar.png',
      price: '800PE',
      type: 'Video',
      duration: '50 mins'
    },
    {
      image: 'assets/images/default-avatar.png',
      price: '600PE',
      type: 'Call',
      duration: '30 mins'
    },
    {
      image: 'assets/images/default-avatar.png',
      price: '600PE',
      type: 'Call',
      duration: '30 mins'
    },
    {
      image: 'assets/images/default-avatar.png',
      price: '600PE',
      type: 'Call',
      duration: '30 mins'
    },
    {
      image: 'assets/images/default-avatar.png',
      price: '600PE',
      type: 'Call',
      duration: '30 mins'
    }
  ];

  constructor() {
    this.calculateTotal();
  }

  calculateTotal() {
    this.total = this.sessions.reduce((sum, session) => {
      const value = parseInt(session.price.replace('PE', '').trim());
      return sum + (isNaN(value) ? 0 : value);
    }, 0);
  }
}
