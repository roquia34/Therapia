import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // مهم علشان ngModel يشتغل

@Component({
  selector: 'app-customer-growth',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './customer-growth.component.html',
  styleUrls: ['./customer-growth.component.scss']
})
export class CustomerGrowthComponent {
  months = ['Today', 'January', 'February', 'March'];
  selectedMonth = 'Today';

  dataByMonth: {
    [key: string]: {
      countries: { name: string; value: number }[],
      bubbles: { value: number }[]
    }
  } = {
    Today: {
      countries: [
        { name: 'Total number of sessions', value: 2417 },
        { name: 'Total number of patients', value: 2281 },
        { name: 'Total number of hours', value: 812 },
        { name: 'Rate', value: 287 }
      ],
      bubbles: [
        { value: 497 },
        { value: 129 },
        { value: 287 },
        { value: 4.7 }
      ]
    },
    January: {
      countries: [
        { name: 'Total number of sessions', value: 1100 },
        { name: 'Total number of patients', value: 1050 },
        { name: 'Total number of hours', value: 400 },
        { name: 'Rate', value: 120 }
      ],
      bubbles: [
        { value: 180 },
        { value: 70 },
        { value: 120 },
        { value: 3.1 }
      ]
    },
    February: {
      countries: [
        { name: 'Total number of sessions', value: 1800 },
        { name: 'Total number of patients', value: 1500 },
        { name: 'Total number of hours', value: 600 },
        { name: 'Rate', value: 200 }
      ],
      bubbles: [
        { value: 390 },
        { value: 90 },
        { value: 200 },
        { value: 4.0 }
      ]
    },
    March: {
      countries: [
        { name: 'Total number of sessions', value: 2100 },
        { name: 'Total number of patients', value: 1980 },
        { name: 'Total number of hours', value: 700 },
        { name: 'Rate', value: 250 }
      ],
      bubbles: [
        { value: 450 },
        { value: 110 },
        { value: 250 },
        { value: 4.5 }
      ]
    }
  };

  countries = this.dataByMonth['Today'].countries;
  bubbles = this.dataByMonth['Today'].bubbles;
  max = Math.max(...this.bubbles.map(b => b.value));

  onMonthChange() {
    this.countries = this.dataByMonth[this.selectedMonth].countries;
    this.bubbles = this.dataByMonth[this.selectedMonth].bubbles;
    this.max = Math.max(...this.bubbles.map(b => b.value));
  }
}
