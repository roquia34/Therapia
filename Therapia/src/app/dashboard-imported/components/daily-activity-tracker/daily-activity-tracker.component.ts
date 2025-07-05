import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-daily-activity-tracker',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './daily-activity-tracker.component.html',
  styleUrls: ['./daily-activity-tracker.component.scss']
})
export class DailyActivityTrackerComponent {
  allDays = [1, 2, 3, 4, 5, 6, 7]; // لو فيه صور أكتر
  visibleDays: number[] = [];
  selectedDay = 1;

  // معلومات كل يوم
  dayData: {
    [key: number]: {
      exercise: string;
      duration: number;
      meals: string[];
      water: number;
      notes: string;
    };
  } = {
    1: { exercise: 'Push-ups', duration: 10, meals: ['Breakfast', 'Lunch'], water: 3, notes: 'Felt strong today' },
    2: { exercise: 'Yoga', duration: 15, meals: ['Breakfast', 'Dinner'], water: 5, notes: 'Relaxed and stretched' },
    3: { exercise: 'Squats', duration: 5, meals: ['Lunch'], water: 2, notes: 'Quick session' },
    4: { exercise: 'Plank', duration: 20, meals: ['Breakfast', 'Lunch', 'Dinner'], water: 4, notes: 'Core on fire 🔥' },
    5: { exercise: 'Yoga', duration: 10, meals: ['Dinner'], water: 3, notes: 'Evening stretch' },
    6: { exercise: 'Push-ups', duration: 10, meals: ['Breakfast'], water: 2, notes: 'Quick warmup' },
    7: { exercise: 'Plank', duration: 15, meals: ['Lunch'], water: 3, notes: 'Solid session' }
  };

  messages = '';

  ngOnInit() {
    this.updateVisibleDays(0);
  }

  updateVisibleDays(startIndex: number) {
    this.visibleDays = this.allDays.slice(startIndex, startIndex + 5);
  }

  next() {
    const currentStart = this.allDays.indexOf(this.visibleDays[0]);
    if (currentStart + 5 < this.allDays.length) {
      this.updateVisibleDays(currentStart + 1);
    }
  }

  prev() {
    const currentStart = this.allDays.indexOf(this.visibleDays[0]);
    if (currentStart > 0) {
      this.updateVisibleDays(currentStart - 1);
    }
  }

  selectDay(day: number) {
    this.selectedDay = day;
  }

  submit() {
    const log = {
      day: this.selectedDay,
      ...this.dayData[this.selectedDay],
      message: this.messages
    };
    console.log('📤 Submitted Activity:', log);
    alert('Activity Submitted!');
  }

  clear() {
    this.messages = '';
  }
}
