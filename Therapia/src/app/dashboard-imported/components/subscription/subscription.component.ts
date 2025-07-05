import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Plan {
  name: string;
  price: string;
  patients: number;
}

@Component({
  selector: 'app-subscription',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './subscription.component.html',
  styleUrls: ['./subscription.component.scss']
})
export class SubscriptionComponent {
  currentPlan: Plan = {
    name: 'Free',
    price: '0 EGP',
    patients: 5
  };

  plans: Plan[] = [
    { name: 'Bronze', price: '300 EGP', patients: 10 },
    { name: 'Silver', price: '500 EGP', patients: 25 },
    { name: 'Gold', price: '800 EGP', patients: 50 }
  ];

  selectedPlan: Plan | null = null;
  uploadedFile: File | null = null;

  subscribe(plan: Plan) {
    this.selectedPlan = plan;
  }

  confirmSubscription() {
    if (this.uploadedFile && this.selectedPlan) {
      this.currentPlan = this.selectedPlan;
      console.log('✅ Subscribed to:', this.currentPlan);
      console.log('📷 Uploaded file:', this.uploadedFile.name);
      this.selectedPlan = null;
      this.uploadedFile = null;
      alert('Subscription submitted successfully!');
    } else {
      alert('Please upload a file to confirm subscription.');
    }
  }

  cancel() {
    this.selectedPlan = null;
    this.uploadedFile = null;
  }

  onFileSelected(event: any) {
    const file = event.target.files[0];
    if (file) {
      this.uploadedFile = file;
    }
  }
}
