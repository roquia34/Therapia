import { Component , OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';



@Component({
  selector: 'app-my-sessionsprevious',
  templateUrl: './my-sessionsprevious.component.html',
  styleUrl: './my-sessionsprevious.component.scss'
})
export class MySessionspreviousComponent implements OnInit {
  previousSessions: any[] = []; 

  activeTab: string = 'previous';

  loc: string | null = null;
  constructor(private route: ActivatedRoute , private router: Router,) {
    
  }
  goToBooking() {
    this.router.navigate(['/our-therapists']);
  }
  ngOnInit():any {
    this.loc = this.route.snapshot.queryParamMap.get('loc');
   
    // لو بدك تعملي أي شيء بناءً على loc
  } 

}
