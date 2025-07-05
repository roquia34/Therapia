import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-stats-cards',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './stats-cards.component.html',
  styleUrls: ['./stats-cards.component.scss']
})
export class StatsCardsComponent {
  // ===== Inputs + Checkboxes =====
  priceInput: string = '';
  minutesInput: string = '';
  extraInput: string = '';
  videoChecked: boolean = false;
  callChecked: boolean = false;

  clearInputs() {
    this.priceInput = '';
    this.minutesInput = '';
    this.extraInput = '';
    this.videoChecked = false;
    this.callChecked = false;
  }

  submitData() {
    console.log('Price:', this.priceInput);
    console.log('Minutes:', this.minutesInput);
    console.log('Extra Input:', this.extraInput);
    console.log('Video Checked:', this.videoChecked);
    console.log('Call Checked:', this.callChecked);
  }

  // ===== Discounts =====
  discountCode: string = '';
  discountPercentage: string = '';

  submitDiscount() {
    const discountData = {
      code: this.discountCode,
      percentage: this.discountPercentage
    };
    console.log('✅ تم حفظ الخصم:', discountData);
  }

  disableDiscount() {
    this.discountCode = '';
    this.discountPercentage = '';
    console.log('❌ تم مسح الخصم');
  }

  // ===== Available Times + Days =====
  availableTimes = [
    { session: '', time: '' }
  ];

  selectedDays: string[] = [];

  daysList = [
    'Saturday',
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday'
  ];

  addMoreTime() {
    this.availableTimes.push({ session: '', time: '' });
  }

  toggleDay(day: string, event: Event) {
    const checked = (event.target as HTMLInputElement).checked;
    if (checked) {
      this.selectedDays.push(day);
    } else {
      this.selectedDays = this.selectedDays.filter(d => d !== day);
    }
  }

  submitAvailableTimes() {
    console.log('✅ الأيام المختارة:', this.selectedDays);
    console.log('🕒 الجداول المتاحة:', this.availableTimes);
  }

  // ===== Stats Cards =====
  stats = [
    {
      title: 'Total Sales',
      value: '$612,917',
      icon: 'shopping_cart',
      percentage: '+12.5%',
      positive: true,
      subtext: 'vs last month'
    },
    {
      title: 'Total Orders',
      value: '12,345',
      icon: 'receipt',
      percentage: '+8.2%',
      positive: true,
      subtext: 'vs last month'
    },
    {
      title: 'Total Customers',
      value: '8,234',
      icon: 'people',
      percentage: '-2.1%',
      positive: false,
      subtext: 'vs last month'
    },
    {
      title: 'Total Revenue',
      value: '$45,678',
      icon: 'attach_money',
      percentage: '+5.3%',
      positive: true,
      subtext: 'vs last month'
    }
  ];
}
