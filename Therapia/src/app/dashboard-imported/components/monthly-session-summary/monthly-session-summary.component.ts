import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

// واجهة توضح شكل كل Session
interface Session {
  price: string;
  type: string;
  duration: string;
  image?: string;
}

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

  sessions: Session[] = [
    { price: '800PE', type: 'Video', duration: '50 mins' },
    { price: '600PE', type: 'Call', duration: '30 mins' },
    { price: '600PE', type: 'Call', duration: '30 mins' },
    { price: '600PE', type: 'Call', duration: '30 mins' },
    { price: '600PE', type: 'Call', duration: '30 mins' }
  ];

  constructor() {
    this.assignImages();
    this.calculateTotal();
  }

  assignImages() {
    this.sessions.forEach(session => {
      switch (session.type) {
        case 'Video':
          session.image = '/monthly-session/call-session.jpg'; // ← من مجلد public
          break;
        case 'Call':
          session.image = '/monthly-session/video-session.jpg';
          break;
        default:
          session.image = '/monthly-session/default-avatar.png';
          break;
      }
    });
  }

  calculateTotal() {
    this.total = this.sessions.reduce((sum, session) => {
      const value = parseInt(session.price.replace('PE', '').trim());
      return sum + (isNaN(value) ? 0 : value);
    }, 0);
  }
}
