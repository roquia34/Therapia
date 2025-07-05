import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-customer-habits',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './customer-habits.component.html',
  styleUrls: ['./customer-habits.component.scss']
})
export class CustomerHabitsComponent {
  months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'];
  productData = [43787, 38000, 24000, 27000, 35000, 22000, 43000];
  salesData = [39784, 31000, 20000, 23000, 30000, 18000, 39000];
  days = [13, 14, 15, 16, 17, 18];

  maxValue = Math.max(...this.productData.concat(this.salesData));

  // اليوم الحالي المختار
  selectedDay: number = 13;

  // المواعيد المرتبطة بكل يوم
  appointmentsByDay: { [key: number]: { time: string; text: string; color: string }[] } = {
  13: [
    { time: '2:00 pm', text: 'Meeting with chief physician Dr. Williams', color: 'orange' },
    { time: '2:30 pm', text: 'Consultation with Mr. White', color: 'green' },
    { time: '3:00 pm', text: 'Consultation with Mrs. Maisy', color: 'blue' },
    { time: '3:30 pm', text: 'Examination of Mrs. Lee’s freckle', color: 'pink' }
  ],
  14: [
    { time: '9:00 am', text: 'Team briefing', color: 'orange' },
    { time: '11:00 am', text: 'Patient round with Dr. Sara', color: 'green' },
    { time: '1:00 pm', text: 'Lunch with Dr. Omar', color: 'blue' }
  ],
  15: [
    { time: '10:00 am', text: 'Consultation with Mr. Ali', color: 'green' },
    { time: '2:00 pm', text: 'Surgery with Dr. Adams', color: 'pink' }
  ],
  16: [],
  17: [
    { time: '12:00 pm', text: 'Follow-up with Mrs. Lana', color: 'orange' },
    { time: '4:00 pm', text: 'Meeting with board members', color: 'blue' }
  ],
  18: [
    { time: '10:30 am', text: 'Lab results review with team', color: 'green' }
  ]
};


  // Getter للمواعيد حسب اليوم
  get appointmentsForSelectedDay() {
  return this.appointmentsByDay[this.selectedDay] || [];
}

  // عند الضغط على يوم
  selectDay(day: number) {
    this.selectedDay = day;
  }
}


