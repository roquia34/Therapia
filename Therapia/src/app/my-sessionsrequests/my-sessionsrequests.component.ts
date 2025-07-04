import { Component , OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-my-sessionsrequests',
  templateUrl: './my-sessionsrequests.component.html',
  styleUrl: './my-sessionsrequests.component.scss'
})
export class MySessionsrequestsComponent  implements OnInit {
  requests = [
    // أمثلة بيانات: تقدر تجيبيها من API لاحقًا
    { therapist: 'Dr. Mohmed Ali', date: '2025-04-20', status: 'pending' },
    { therapist: 'Dr. Sara Ahmed ', date: '2025-04-25', status: 'accepted' }
  ];

  hasActiveRequests(): boolean {
    return this.requests.some(req => req.status === 'pending' || req.status === 'accepted');
  }
  loc: string | null = null;
  constructor(private route: ActivatedRoute , private router: Router) {}
  goToBooking() {
    this.router.navigate(['/our-therapists']); // أو أي مسار صفحة الحجز
  }
  ngOnInit():any {
    this.loc = this.route.snapshot.queryParamMap.get('loc');
    // لو بدك تعملي أي شيء بناءً على loc
  } 


}
