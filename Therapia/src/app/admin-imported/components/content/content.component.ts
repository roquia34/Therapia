import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-request-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class RequestCardComponent {
  @Input() request: any;

  approve() {
    console.log('Approved request:', this.request);
  }

  decline() {
    console.log('Declined request:', this.request);
  }
}
